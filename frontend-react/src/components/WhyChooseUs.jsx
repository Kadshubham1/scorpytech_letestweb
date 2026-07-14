import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Award, ArrowRight } from 'lucide-react';

const reasons = [
  {
    title: "Enterprise-Grade Reliability",
    description: "We engineer software that matches the highest security, scalability, and performance standards of modern enterprises.",
    icon: <Briefcase />,
    gradient: "from-blue-600 to-indigo-600",
    bgLight: "from-blue-50/50 to-blue-100/50",
    textAccent: "text-blue-600",
    shadowAccent: "hover:shadow-[0_20px_40px_rgba(37,99,235,0.18)] hover:border-blue-200"
  },
  {
    title: "Cutting-Edge AI Expertise",
    description: "Integrate custom Generative AI agents, natural language processing, and deep learning pipelines into your business operations.",
    icon: <Code />,
    gradient: "from-indigo-600 to-violet-600",
    bgLight: "from-indigo-50/50 to-indigo-100/50",
    textAccent: "text-indigo-600",
    shadowAccent: "hover:shadow-[0_20px_40px_rgba(99,102,241,0.18)] hover:border-indigo-200"
  },
  {
    title: "Agile Development Culture",
    description: "Get transparent sprint updates, clear API registries, and ongoing progress metrics via our integrated CI/CD staging servers.",
    icon: <GraduationCap />,
    gradient: "from-cyan-500 to-blue-600",
    bgLight: "from-cyan-50/50 to-cyan-100/50",
    textAccent: "text-cyan-600",
    shadowAccent: "hover:shadow-[0_20px_40px_rgba(6,182,212,0.18)] hover:border-cyan-200"
  },
  {
    title: "SLA-Backed High Availability",
    description: "We provide comprehensive uptime guarantees, proactive security monitoring, database tuning, and ongoing cloud cost optimization.",
    icon: <Award />,
    gradient: "from-emerald-500 to-teal-600",
    bgLight: "from-emerald-50/50 to-emerald-100/50",
    textAccent: "text-emerald-600",
    shadowAccent: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.18)] hover:border-emerald-200"
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
            Why Choose <span className="text-gradient">ScorpyTech</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            We don't just write code; we align our engineering pipelines with your business objectives, delivering high-performance solutions that scale.
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
              className={`group bg-white p-8 rounded-3xl border border-gray-100/80 ${reason.shadowAccent} hover:-translate-y-3 transition-all duration-300 relative overflow-hidden flex flex-col h-full`}
            >
              {/* Decorative top border gradient on hover */}
              <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${reason.gradient} opacity-20 group-hover:opacity-100 group-hover:h-[4px] transition-all duration-300`} />

              {/* Glowing gradient background accent on hover */}
              <div className={`absolute -right-12 -bottom-12 w-28 h-28 rounded-full bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500`} />

              <div className={`w-16 h-16 bg-gradient-to-br ${reason.bgLight} group-hover:bg-gradient-to-r group-hover:${reason.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-md`}>
                {React.cloneElement(reason.icon, { 
                  className: `w-8 h-8 ${reason.textAccent} group-hover:text-white transition-colors duration-300` 
                })}
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-900 transition-colors leading-tight relative z-10">{reason.title}</h4>
              
              <p className="text-gray-600 leading-relaxed text-sm flex-grow relative z-10">
                {reason.description}
              </p>

              {/* Interaction Indicator */}
              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                <span className={`text-xs font-bold ${reason.textAccent}`}>Enterprise Ready</span>
                <ArrowRight className={`w-4 h-4 ${reason.textAccent} transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhyChooseUs;
