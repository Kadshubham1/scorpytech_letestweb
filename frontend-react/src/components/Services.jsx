import React from 'react';
import { renderIcon } from './Icons';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = ({ services }) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-20 bg-[#F9FAFB]" id="services">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#005BAC] mb-4">What We Do</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Services that Accelerate Business Outcomes
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005BAC] hover:text-[#004280]">
              <span>View all services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.slice(0, 5).map((service, index) => (
            <motion.div 
              key={service.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-8 rounded-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-[#EBF3FC] text-[#005BAC] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                {renderIcon(service.icon, "w-6 h-6")}
              </div>
              
              <h3 className="text-[1.1rem] font-bold text-gray-900 mb-4 group-hover:text-[#005BAC] transition-colors leading-tight">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <div className="mt-8 pt-4">
                <ArrowRight className="w-5 h-5 text-[#005BAC] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
