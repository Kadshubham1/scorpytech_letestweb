import React from 'react';
import { renderIcon } from './Icons';

const Technologies = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="py-16 bg-white" id="technologies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase">Industry Relevant Tech Stack</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {technologies.map(tech => (
            <div 
              key={tech.id} 
              className="bg-white border border-slate-100 hover:border-blue-100 px-6 py-4 rounded-md flex items-center gap-3 transition-all hover:bg-white hover:shadow-md cursor-pointer"
            >
              <div className="text-blue-600">
                {renderIcon(tech.icon_name, "w-5 h-5")}
              </div>
              <span className="font-bold text-slate-700 text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
