import React from 'react';
import { renderIcon } from './Icons';

const Technologies = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="technologies">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold tracking-widest text-[#005BAC] uppercase mb-3">Powered By Modern Tech</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Industry Relevant Tech Stack
          </h2>
        </div>
        
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
          `}
        </style>
        
        {/* Marquee Container with Fading Edges */}
        <div className="overflow-hidden w-full relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 md:gap-8 py-4">
            {[...technologies, ...technologies].map((tech, index) => (
              <div 
                key={`${tech.id}-${index}`} 
                className="group bg-white border border-gray-100 hover:border-blue-200 px-8 py-5 rounded-xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,91,172,0.2)] cursor-pointer shrink-0 relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="text-[#005BAC] group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {renderIcon(tech.icon_name, "w-8 h-8")}
                </div>
                <span className="font-bold text-gray-700 text-lg group-hover:text-gray-900 relative z-10">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
