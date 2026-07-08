const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Security Middlewares
app.use(helmet());
app.use(cors({
    origin: '*', // Allow frontend-react and frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: 'Too many requests from this IP, please try again later.' }
});
app.use('/api/', apiLimiter);

// Database Setup
const dbPath = path.resolve(__dirname, 'db.sqlite3');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS enquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            company_name TEXT,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            service TEXT,
            subject TEXT,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'New',
            submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            ip_address TEXT
        )`);
    }
});

let transporter;
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return;
    }
    transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
    console.log('Ethereal test email account created. Emails will be logged here with preview URLs.');
});

const sanitizeInput = (input) => {
    if (!input) return input;
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// POST /api/enquiry/
app.post('/api/enquiry/', (req, res) => {
    const { full_name, company_name, email, phone, service, subject, message } = req.body;
    
    if (!full_name || !email || !phone || !message) {
        return res.status(400).json({ error: 'Name, email, phone, and message are required.' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }
    
    const ipAddress = req.ip || req.connection.remoteAddress;
    
    const sanitizedName = sanitizeInput(full_name);
    const sanitizedCompany = sanitizeInput(company_name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedService = sanitizeInput(service);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    const query = `INSERT INTO enquiries (full_name, company_name, email, phone, service, subject, message, ip_address) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    
    db.run(query, [
        sanitizedName, sanitizedCompany, sanitizedEmail, sanitizedPhone, 
        sanitizedService, sanitizedSubject, sanitizedMessage, ipAddress
    ], function(err) {
        if (err) {
            console.error('Error saving enquiry:', err);
            return res.status(500).json({ error: 'Failed to save enquiry.' });
        }
        
        const companyMailOptions = {
            from: '"ScorpyTech System" <no-reply@scorpytech.com>',
            to: 'support@scorpytech.com',
            subject: 'New Website Enquiry - Let\'s Talk Form',
            text: `New enquiry received from the website.\n\nName: ${sanitizedName}\nCompany: ${sanitizedCompany || 'N/A'}\nEmail: ${sanitizedEmail}\nPhone: ${sanitizedPhone}\nService: ${sanitizedService || 'N/A'}\nSubject: ${sanitizedSubject || 'N/A'}\nMessage:\n${sanitizedMessage}\n\nSubmitted On: ${new Date().toISOString()}\nIP Address: ${ipAddress}`
        };

        const userMailOptions = {
            from: '"Scorpy Tech" <support@scorpytech.com>',
            to: sanitizedEmail,
            subject: 'Thank You for Contacting Scorpy Tech',
            text: `Dear ${sanitizedName},\n\nThank you for contacting Scorpy Tech.\n\nWe have successfully received your enquiry. Our team will review your request and contact you within 24 business hours.\n\nRegards,\nScorpy Tech\nsupport@scorpytech.com`
        };

        transporter.sendMail(companyMailOptions, (err, info) => {
            if (err) return console.error('Error sending company email:', err);
            console.log('--------------------------------------------------');
            console.log('COMPANY NOTIFICATION EMAIL PREVIEW URL:');
            console.log(nodemailer.getTestMessageUrl(info));
            console.log('--------------------------------------------------');
        });
        transporter.sendMail(userMailOptions, (err, info) => {
            if (err) return console.error('Error sending user email:', err);
            console.log('--------------------------------------------------');
            console.log('USER AUTO-REPLY EMAIL PREVIEW URL:');
            console.log(nodemailer.getTestMessageUrl(info));
            console.log('--------------------------------------------------');
        });

        res.status(201).json({ message: 'Thank you for contacting us. Our team will get back to you shortly.', id: this.lastID });
    });
});

// GET /api/admin/enquiries/
app.get('/api/admin/enquiries/', (req, res) => {
    db.all(`SELECT * FROM enquiries ORDER BY submitted_at DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch enquiries.' });
        res.json(rows);
    });
});

// PUT /api/admin/enquiries/:id
app.put('/api/admin/enquiries/:id', (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    
    if (!['New', 'Contacted', 'Closed'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status.' });
    }
    
    db.run(`UPDATE enquiries SET status = ? WHERE id = ?`, [status, id], function(err) {
        if (err) return res.status(500).json({ error: 'Failed to update status.' });
        res.json({ message: 'Status updated.' });
    });
});

// DELETE /api/admin/enquiries/:id
app.delete('/api/admin/enquiries/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM enquiries WHERE id = ?`, [id], function(err) {
        if (err) return res.status(500).json({ error: 'Failed to delete enquiry.' });
        res.json({ message: 'Enquiry deleted.' });
    });
});

app.get('/api/page-data/', (req, res) => res.json({}));
app.post('/api/subscribe/', (req, res) => res.json({ message: 'Subscribed' }));
app.post('/api/apply/', (req, res) => res.json({ message: 'Applied' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
