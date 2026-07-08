import React from 'react';

const Partners = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-6" id="partners">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        
        <div className="flex-shrink-0 text-left border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-8">
          <p className="text-[0.7rem] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
            Trusted by<br />leading organizations
          </p>
        </div>

        <div className="flex-1 flex flex-wrap justify-between items-center gap-6 md:gap-8 w-full opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          
          {/* Mock Logos using stylized text to avoid missing images */}
          <div className="text-xl font-black text-[#0B2265] tracking-tighter">TATA</div>
          
          <div className="text-2xl font-semibold text-[#007CC3] tracking-tight">Infosys</div>
          
          <div className="text-xl font-medium text-[#1A4B8F] tracking-tight flex items-center gap-1">
            <div className="w-5 h-5 rounded-full border-[3px] border-dotted border-blue-500"></div>
            wipro
          </div>
          
          <div className="text-2xl font-black text-[#0069B4] italic tracking-tighter">HCL</div>
          
          <div className="text-lg font-bold text-[#4B4F54] leading-none text-center">
            Tech<br />Mahindra
          </div>
          
          <div className="text-2xl font-black text-[#0F62FE] tracking-widest font-serif" style={{WebkitTextStroke: "1px #0F62FE", color: "white", textShadow: "0px 1px 0px #0F62FE, 0px 2px 0px white, 0px 3px 0px #0F62FE, 0px 4px 0px white, 0px 5px 0px #0F62FE"}}>
            IBM
          </div>
          
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2.5 h-2.5 bg-[#F25022]"></div>
              <div className="w-2.5 h-2.5 bg-[#7FBA00]"></div>
              <div className="w-2.5 h-2.5 bg-[#00A4EF]"></div>
              <div className="w-2.5 h-2.5 bg-[#FFB900]"></div>
            </div>
            <span className="text-xl font-semibold text-gray-600">Microsoft</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
