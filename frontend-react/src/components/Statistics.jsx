import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';

// ─── Animated counter ──────────────────────────────────────────────────────────
const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2.2 }) => {
  const count      = useMotionValue(0);
  const ref        = useRef(null);
  const isInView   = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
};

// ─── Six unique business metrics ──────────────────────────────────────────────
const STATS = [
  { end: 8,   suffix: '+',  label: 'Years of Experience' },
  { end: 300, suffix: '+',  label: 'Projects Delivered'  },
  { end: 50,  suffix: '+',  label: 'Enterprise Clients'  },
  { end: 18,  suffix: '+',  label: 'Countries Served'    },
  { end: 120, suffix: '+',  label: 'Team Members'        },
  { end: 98,  suffix: '%',  label: 'Client Satisfaction' },
];

// ─── Individual stat card ──────────────────────────────────────────────────────
const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
    whileHover={{
      y: -6,
      boxShadow: '0 0 40px rgba(37,99,235,0.22)',
      transition: { duration: 0.28, ease: 'easeOut' },
    }}
    className="
      relative flex flex-col items-center justify-center text-center
      px-6 py-8 rounded-2xl cursor-default
      bg-white/[0.04] border border-white/[0.08]
      backdrop-blur-sm
      transition-colors duration-300
      group
    "
    style={{ willChange: 'transform, box-shadow' }}
  >
    {/* Subtle top glow line on hover */}
    <div className="
      absolute top-0 left-1/2 -translate-x-1/2
      w-0 h-[2px] rounded-full bg-[#2563EB]
      group-hover:w-2/3
      transition-all duration-500 ease-out
    " />

    {/* Number */}
    <div
      className="font-black text-white leading-none tracking-tight mb-3"
      style={{ fontSize: 'clamp(52px, 5vw, 72px)' }}
    >
      <AnimatedCounter
        end={stat.end}
        suffix={
          <span className="text-[#2563EB] ml-0.5" style={{ fontSize: '0.85em' }}>
            {stat.suffix}
          </span>
        }
      />
    </div>

    {/* Label */}
    <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase">
      {stat.label}
    </p>
  </motion.div>
);

// ─── Main component ────────────────────────────────────────────────────────────
const Statistics = () => (
  <section
    id="statistics"
    className="relative w-full bg-[#0F172A] overflow-hidden py-24 lg:py-32"
  >
    {/* ── Background ambient glows ─────────────────────────────────────── */}
    <div className="absolute inset-0 pointer-events-none -z-0">
      <div className="absolute top-[-20%] left-[-8%]  w-[55%] h-[70%] rounded-full bg-[#2563EB]/10 blur-[140px]" />
      <div className="absolute bottom-[-20%] right-[-8%] w-[55%] h-[70%] rounded-full bg-[#1e40af]/10 blur-[140px]" />
    </div>

    {/* ── Top separator line ───────────────────────────────────────────── */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
    {/* ── Bottom separator line ────────────────────────────────────────── */}
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="relative z-10 max-w-[1380px] mx-auto px-6 lg:px-12">

      {/* ── Section header ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-16 lg:mb-20"
      >
        <p className="inline-block text-[11px] font-bold tracking-[0.22em] text-[#2563EB] uppercase mb-5 px-4 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/8">
          SCORPYTECH BY THE NUMBERS
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Delivering Digital Excellence{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa]">
            Worldwide
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed">
          Helping businesses accelerate growth through AI, software engineering, cloud solutions, and digital transformation.
        </p>
      </motion.div>

      {/* ── Stats grid ───────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3">
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Statistics;
