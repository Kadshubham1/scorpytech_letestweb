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
    <section className="py-24 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#005BAC] font-bold text-sm tracking-widest uppercase mb-4"
          >
            Our Advantage
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-heading tracking-tight leading-tight"
          >
            Why Choose <span className="text-gradient">Scorpy Tech</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            We don't just teach modules; we align our interns with actual developer routines, live industry assignments, and direct pathways to top companies.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.1 }}
              className="group bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-[0_20px_40px_-10px_rgba(0,91,172,0.15)] hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative top border gradient on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#005BAC] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {React.cloneElement(reason.icon, { className: "w-8 h-8 text-[#005BAC]" })}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#005BAC] transition-colors">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0B1121] to-[#001D4A] rounded-3xl p-12 md:p-16 relative overflow-hidden text-center flex flex-col md:flex-row justify-around gap-12 shadow-[0_20px_50px_-12px_rgba(0,29,74,0.5)] border border-gray-800"
        >
          {/* Background decoration */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex-1 group">
            <div className="text-5xl md:text-7xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">100%</div>
            <div className="text-blue-300 text-sm font-bold uppercase tracking-widest mt-4">Interview Assistance</div>
          </div>
          
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent relative z-10"></div>
          
          <div className="relative z-10 flex-1 group">
            <div className="text-5xl md:text-7xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">85%</div>
            <div className="text-blue-300 text-sm font-bold uppercase tracking-widest mt-4">Placement Success</div>
          </div>
          
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent relative z-10"></div>
          
          <div className="relative z-10 flex-1 group">
            <div className="text-5xl md:text-7xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">500+</div>
            <div className="text-blue-300 text-sm font-bold uppercase tracking-widest mt-4">Hiring Partners</div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
