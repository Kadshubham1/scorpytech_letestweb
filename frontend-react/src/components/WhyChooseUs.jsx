import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react';

const reasons = [
  {
    title: "Industry-Aligned Curriculum",
    description: "Learn what companies actually use. Our curriculum is constantly updated to match the latest tech trends and industry demands.",
    icon: <Briefcase className="w-6 h-6 text-[#005BAC]" />
  },
  {
    title: "Hands-on Real Projects",
    description: "Move beyond theory. Build a strong portfolio by working on real-world projects that solve actual business problems.",
    icon: <Code className="w-6 h-6 text-[#005BAC]" />
  },
  {
    title: "Expert Mentorship",
    description: "Get guided by seasoned professionals and industry experts who provide personalized feedback and career advice.",
    icon: <GraduationCap className="w-6 h-6 text-[#005BAC]" />
  },
  {
    title: "Career Support & Placements",
    description: "From resume building to interview prep, we provide end-to-end support to help you land your dream tech job.",
    icon: <Award className="w-6 h-6 text-[#005BAC]" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50 relative" id="why-choose-us">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#005BAC] font-bold text-xs tracking-widest uppercase mb-3"
          >
            Our Advantage
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-heading tracking-tight"
          >
            Why Choose <span className="text-[#005BAC]">Scorpy Tech</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We don't just teach modules; we align our interns with actual developer routines, live industry assignments, and direct pathways to top companies.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#001D4A] rounded-3xl p-10 md:p-14 relative overflow-hidden text-center flex flex-col md:flex-row justify-around gap-12 shadow-2xl"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10 flex-1">
            <div className="text-5xl md:text-6xl font-black text-white mb-2">100%</div>
            <div className="text-blue-200 text-sm font-bold uppercase tracking-widest mt-3">Interview Assistance</div>
          </div>
          
          <div className="hidden md:block w-px bg-white/10 relative z-10"></div>
          
          <div className="relative z-10 flex-1">
            <div className="text-5xl md:text-6xl font-black text-white mb-2">85%</div>
            <div className="text-blue-200 text-sm font-bold uppercase tracking-widest mt-3">Placement Success</div>
          </div>
          
          <div className="hidden md:block w-px bg-white/10 relative z-10"></div>
          
          <div className="relative z-10 flex-1">
            <div className="text-5xl md:text-6xl font-black text-white mb-2">500+</div>
            <div className="text-blue-200 text-sm font-bold uppercase tracking-widest mt-3">Hiring Partners</div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
