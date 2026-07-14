import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const { addToast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterLoading(true);
    
    // Mock API call
    setTimeout(() => {
      addToast('Thank you for subscribing to our newsletter!', 'success');
      setNewsletterEmail('');
      setNewsletterLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="newsletter">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-lg p-8 md:p-12 shadow-md text-gray-900 relative overflow-hidden"
        >
          {/* Internal gradient decoration */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Subscribe to Our Tech Newsletter</h3>
              <p className="text-indigo-100 text-[1.05rem] leading-relaxed max-w-md">
                Subscribe to receive the latest insights on enterprise AI, cloud architecture, and modern product engineering.
              </p>
            </div>

            <div className="lg:col-span-5 w-full">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-grow bg-white/10 border border-white/20 focus:border-white focus:bg-white/30 text-gray-900 placeholder-indigo-200 rounded-md px-5 py-3.5 text-sm focus:outline-none transition-all"
                />
                <button 
                  type="submit" 
                  disabled={newsletterLoading}
                  className="bg-white text-indigo-700 hover:bg-primary/10 hover:scale-105 active:scale-95 font-bold px-6 py-3.5 rounded-md text-sm shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:hover:scale-100"
                >
                  {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
