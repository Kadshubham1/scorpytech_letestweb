import React from 'react';
import { renderIcon } from './Icons';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// ─── Tech tags per service (matched by id) ────────────────────────────────────
const SERVICE_TAGS = {
  1: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  2: ['Python', 'TensorFlow', 'OpenAI', 'LangChain'],
  3: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
  4: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  5: ['Cloud APIs', 'Automation', 'AI Integration', 'Analytics'],
};

// ─── Service card ─────────────────────────────────────────────────────────────
const ServiceCard = ({ service, index, onNavigate }) => {
  const tags = SERVICE_TAGS[service.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col h-full"
    >
      <div
        onClick={() => onNavigate && onNavigate('services')}
        className="
          relative flex flex-col h-full cursor-pointer
          bg-white
          border border-[#E8EAED]
          rounded-2xl
          p-8
          transition-all duration-300 ease-out
          hover:-translate-y-1.5
          hover:border-[#2563EB]/40
          hover:shadow-[0_16px_48px_rgba(0,0,0,0.10),0_0_0_1px_rgba(37,99,235,0.12)]
          shadow-[0_2px_12px_rgba(0,0,0,0.05)]
          overflow-hidden
        "
      >
        {/* ── Very subtle top highlight line ── */}
        <div className="
          absolute top-0 left-0 right-0 h-[1px]
          bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        " />

        {/* ── Icon ── */}
        <div className="mb-7">
          <div className="
            w-12 h-12 rounded-xl flex items-center justify-center
            bg-[#EEF2FF]
            group-hover:bg-[#2563EB]
            transition-all duration-300
            shadow-none group-hover:shadow-[0_4px_16px_rgba(37,99,235,0.30)]
          ">
            <span className="text-[#2563EB] group-hover:text-white transition-colors duration-300">
              {renderIcon(service.icon, 'w-5 h-5')}
            </span>
          </div>
        </div>

        {/* ── Title + Arrow ── */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="
            text-[17px] font-semibold text-gray-900 leading-snug
            group-hover:text-[#2563EB] transition-colors duration-250
          ">
            {service.title}
          </h3>
          <ArrowUpRight className="
            w-4 h-4 text-gray-300 shrink-0 mt-0.5
            group-hover:text-[#2563EB]
            translate-x-0 translate-y-0
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            transition-all duration-300
          " />
        </div>

        {/* ── Description ── */}
        <p className="text-[14px] text-gray-500 leading-[1.75] mb-7 flex-grow">
          {service.description}
        </p>

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[11px] font-medium
                px-2.5 py-1 rounded-md
                bg-gray-50 text-gray-500
                border border-gray-200/80
                group-hover:bg-[#EEF2FF] group-hover:text-[#2563EB] group-hover:border-[#2563EB]/20
                transition-all duration-300
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Services = ({ services, onNavigate }) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFBFC] overflow-hidden" id="services">

      {/* ── Background: extremely subtle ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#2563EB] rounded-full" />
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase">
              Our Services
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight">
                Engineering Digital Products
                <br />
                <span className="text-[#2563EB]">That Drive Business Growth</span>
              </h2>
            </div>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-md lg:text-right">
              From AI-powered automation to enterprise software and cloud transformation — scalable solutions for modern businesses.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px bg-gradient-to-r from-[#2563EB]/30 via-gray-200 to-transparent" />
        </motion.div>

        {/* ── Cards Grid: 3 desktop / 2 tablet / 1 mobile ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={service.id || index}
              service={service}
              index={index}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative overflow-hidden rounded-2xl
            bg-[#0F172A]
            border border-white/[0.06]
            px-10 py-12 md:px-16 md:py-14
          "
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_50%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                Looking for a Custom Software Solution?
              </h3>
              <p className="text-slate-400 text-[15px] leading-relaxed max-w-lg">
                Let's build scalable, secure, and intelligent digital products tailored for your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(37,99,235,0.40)', transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { onNavigate && onNavigate('contactus'); window.scrollTo(0, 0); }}
                className="
                  inline-flex items-center gap-2
                  bg-[#2563EB] hover:bg-[#1d4ed8]
                  text-white font-semibold text-[14px]
                  px-7 py-3.5 rounded-xl
                  shadow-[0_4px_16px_rgba(37,99,235,0.35)]
                  transition-colors duration-200
                  whitespace-nowrap
                "
              >
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.10)', y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { onNavigate && onNavigate('final-year-projects'); window.scrollTo(0, 0); }}
                className="
                  inline-flex items-center gap-2
                  bg-white/[0.06] hover:bg-white/[0.10]
                  text-white font-semibold text-[14px]
                  px-7 py-3.5 rounded-xl
                  border border-white/[0.12]
                  backdrop-blur-sm
                  transition-colors duration-200
                  whitespace-nowrap
                "
              >
                Explore Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
