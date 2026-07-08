import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';

const InternshipModal = ({ isOpen, onClose }) => {
  const [internshipLoading, setInternshipLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const { addToast } = useToast();

  const handleInternshipSubmit = async (e) => {
    e.preventDefault();
    if (!formData.full_name || !formData.email || !formData.phone || !formData.interest) {
      addToast('Please fill out all required fields.', 'error');
      return;
    }
    setInternshipLoading(true);
    
    // Mock API call
    setTimeout(() => {
      addToast('Application submitted successfully! Our team will contact you.', 'success');
      onClose();
      setFormData({ full_name: '', email: '', phone: '', interest: '', message: '' });
      setInternshipLoading(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/60 "
            onClick={onClose}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white/90  border border-white/20 rounded-lg p-6 md:p-8 w-full max-w-lg shadow-md relative z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 hover:rotate-90 transition-all focus:outline-none bg-section-bg p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-1">Apply for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Internship</span></h3>
              <p className="text-gray-9000 text-sm">Please register your interest. Our placement manager will call you back within 24 hours.</p>
            </div>

            <form onSubmit={handleInternshipSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-9000">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rohan Joshi"
                  value={formData.full_name}
                  onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                  className="bg-white border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 rounded-md px-4 py-3 text-sm focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-9000">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. rohan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 rounded-md px-4 py-3 text-sm focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-9000">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 rounded-md px-4 py-3 text-sm focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-9000">Area of Specialization</label>
                <select 
                  required
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="bg-white border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 rounded-md px-4 py-3 text-sm focus:outline-none transition-all"
                >
                  <option value="" disabled>Select your interest</option>
                  <option value="AI/ML">AI / Machine Learning</option>
                  <option value="Full Stack">Full Stack Development</option>
                  <option value="Mobile">Mobile App Development</option>
                  <option value="IoT">Internet of Things (IoT)</option>
                  <option value="Cloud">Cloud & DevOps</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={internshipLoading}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-gray-900 font-bold py-3.5 rounded-md shadow-lg hover:shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {internshipLoading ? 'Submitting Application...' : 'Submit Application'}
                <Check className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InternshipModal;
