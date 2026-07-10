import React from 'react';
import { renderIcon } from './Icons';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = ({ services }) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="relative py-20 overflow-hidden" id="services">
      {/* Background with modern gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 to-transparent -z-10 blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-[#005BAC] mb-4"
            >
              What We Do
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
            >
              Services that Accelerate <br className="hidden md:block" /><span className="text-gradient">Business Outcomes</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#005BAC] hover:text-[#004280] transition-colors">
              <span>View all services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.slice(0, 5).map((service, index) => (
            <motion.div 
              key={service.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col h-full cursor-pointer relative overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-[#005BAC] w-14 h-14 rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-[#005BAC] group-hover:text-white transition-all duration-300">
                {renderIcon(service.icon, "w-7 h-7")}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#005BAC] transition-colors leading-tight relative z-10">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed flex-grow relative z-10">
                {service.description}
              </p>
              
              <div className="mt-8 pt-4 border-t border-gray-100/50 flex justify-between items-center relative z-10">
                <span className="text-xs font-semibold text-gray-400 group-hover:text-[#005BAC] transition-colors">Learn more</span>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#005BAC] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
