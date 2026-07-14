import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Headphones, ArrowRight, Check } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useToast } from '../context/ToastContext';

const ContactPage = () => {
  const { addToast } = useToast();
  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.full_name || !formData.email || !formData.phone || !formData.message) {
      addToast('Please fill out all required fields.', 'error');
      return;
    }
    
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      addToast('Please verify that you are not a robot.', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch((import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000') + '/api/enquiry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptcha_token: recaptchaValue })
      });
      const data = await response.json();
      
      if (response.ok) {
        addToast(data.message || 'Thank you for contacting us.', 'success');
        setFormData({ full_name: '', email: '', company_name: '', phone: '', service: '', subject: '', message: '' });
        recaptchaRef.current?.reset();
      } else {
        addToast(data.error || 'Failed to submit enquiry.', 'error');
      }
    } catch (err) {
      addToast('Network error, please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Content */}
          <div className="flex-1 px-6 py-16 md:py-24 lg:pl-16 xl:pl-32 lg:pr-10 relative z-10 bg-gradient-to-r from-white via-white to-transparent">
            <div className="max-w-xl">
              <div className="text-sm font-medium mb-6 flex items-center gap-2">
                <span className="text-[#005BAC] hover:underline cursor-pointer">Home</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">Contact Us</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading tracking-tight leading-tight">
                Let's Connect.<br />
                We're <span className="text-[#005BAC]">Here to Help.</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Have a question or want to discuss how we can help your business? 
                Reach out to us anytime.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent hidden lg:block z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Office Building" 
              className="w-full h-[300px] lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>
          
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Get in Touch Info */}
            <div className="flex-1 lg:max-w-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
                Get in Touch
              </h2>
              <div className="w-10 h-1 bg-[#005BAC] mb-12"></div>

              <div className="space-y-10">
                {/* Our Office */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#005BAC]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 font-heading text-lg">Our Office</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      101, Navale Icon, Narhe,<br />
                      Pune - 411041, Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#005BAC]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 font-heading text-lg">Phone</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      +91 12345 67890<br />
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#005BAC]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 font-heading text-lg">Email</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      hello@scorpytech.com<br />
                      info@scorpytech.com
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#005BAC]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 font-heading text-lg">Business Hours</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Monday - Friday: 9:30 AM - 6:30 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Let's Talk */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-[#005BAC]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 font-heading text-lg">Let's Talk</h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-3">
                      Have a project in mind?<br />
                      Schedule a free consultation<br />
                      with our experts.
                    </p>
                    <a href="#" className="inline-flex items-center text-[#005BAC] font-semibold text-sm hover:text-[#004280] transition-colors">
                      Schedule a Call <ArrowRight className="w-4 h-4 ml-1.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="flex-1">
              <div className="bg-[#FAFBFC] rounded-2xl p-8 md:p-12 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 text-sm mb-8">
                  Fill out the form and our team will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <input 
                        type="text" 
                        required
                        placeholder="Your Name *" 
                        value={formData.full_name}
                        onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-colors"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        required
                        placeholder="Your Email *" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      value={formData.company_name}
                      onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone Number *" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-colors"
                    />
                  </div>

                  <div>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-colors text-gray-700"
                    >
                      <option value="">Service Interested In</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="AI & Machine Learning">AI & Machine Learning Solutions</option>
                      <option value="Cloud & DevOps">Cloud & DevOps Solutions</option>
                      <option value="Mobile Engineering">Enterprise Mobile Apps</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-colors"
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      rows="5" 
                      required
                      placeholder="Your Message *" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#005BAC] focus:ring-1 focus:ring-[#005BAC] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Google provided test key for localhost
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="bg-[#005BAC] hover:bg-[#004280] text-white font-semibold px-8 py-3.5 rounded-sm transition-colors flex items-center gap-2 shadow-sm disabled:opacity-70"
                  >
                    {loading ? 'Sending...' : 'Send Message'} {!loading && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage;
