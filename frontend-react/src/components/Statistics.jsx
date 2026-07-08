import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Counter = ({ value, label }) => {
  const numberPart = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffixPart = value.replace(/[0-9]/g, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div className="flex flex-col items-start border-l border-gray-200 pl-6 first:border-0 first:pl-0">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          if (!hasAnimated) {
            animate(count, numberPart, { duration: 2, ease: "easeOut" });
            setHasAnimated(true);
          }
        }}
        className="text-3xl md:text-4xl font-bold text-[#005BAC] mb-2 flex items-center"
      >
        <motion.span>{rounded}</motion.span>
        <span>{suffixPart}</span>
      </motion.div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
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
    <section className="py-12 bg-[#F9FAFB] border-t border-gray-100 pb-24" id="statistics">
      <div className="max-w-[1400px] mx-auto px-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#005BAC] mb-8">
          Scorpy Tech by numbers
        </h3>
        
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {mockupStats.map(stat => (
            <Counter key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
