import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Counter = ({ value, label }) => {
  const numberPart = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffixPart = value.replace(/[0-9]/g, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        onViewportEnter={() => {
          if (!hasAnimated) {
            animate(count, numberPart, { duration: 2.5, ease: "easeOut" });
            setHasAnimated(true);
          }
        }}
        className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      >
        <motion.span>{rounded}</motion.span>
        <span className="text-blue-500">{suffixPart}</span>
      </motion.div>
      <div className="text-sm font-semibold text-blue-200 tracking-wide uppercase">{label}</div>
    </div>
  );
};

const Statistics = () => {
  const mockupStats = [
    { id: 1, value: "12+", label: "Years of Experience" },
    { id: 2, value: "500+", label: "Projects Delivered" },
    { id: 3, value: "250+", label: "Global Clients" },
    { id: 4, value: "15+", label: "Industries Served" },
    { id: 5, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative py-24 bg-[#0B1121] overflow-hidden" id="statistics">
      {/* Dark modern background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B1121] to-[#0B1121] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
      
      {/* Decorative glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
            Scorpy Tech by numbers
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Delivering Impact at Scale
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-800">
          {mockupStats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-center text-center px-4">
              <Counter value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
