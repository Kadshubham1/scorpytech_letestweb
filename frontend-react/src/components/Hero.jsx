import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Cpu, Bot, Cloud, Database, 
  ShieldCheck, Webhook, Workflow, LineChart, 
  MessageSquare, Zap, BarChart3, Server, Lock, 
  CheckCircle2, Mouse, Globe2, Activity, Network
} from 'lucide-react';

const StatCounter = ({ end, duration = 2, suffix = "+", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const isFloat = end % 1 !== 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(isFloat ? Number(start.toFixed(2)) : Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
};

const TrustIndicators = () => (
  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-12">
    {[
      "Artificial Intelligence", "Machine Learning", 
      "Enterprise Software", "Cloud Native", 
      "Cyber Security", "Generative AI"
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-2 text-[#CBD5E1] text-sm font-medium bg-white/5 border border-white/10 rounded-full px-3 py-1">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4]" />
        {item}
      </div>
    ))}
  </div>
);

const FloatingBadge = ({ text, delay, x, y, duration = 6 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1, y: [y, y - 15, y], x: [x, x + 8, x] }}
    transition={{ 
      opacity: { delay, duration: 1 }, 
      scale: { delay, duration: 1 },
      y: { duration: duration, repeat: Infinity, repeatType: "mirror", delay },
      x: { duration: duration + 1, repeat: Infinity, repeatType: "mirror", delay }
    }}
    style={{ left: `${x}%`, top: `${y}%`, willChange: "transform" }}
    className="absolute hidden xl:flex items-center justify-center px-4 py-2 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.15)] text-white/90 text-sm font-medium whitespace-nowrap z-20"
  >
    {text}
  </motion.div>
);

const BackgroundEffects = () => {
  // Use Framer Motion values instead of React state to avoid massive re-renders on mousemove
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring config for smooth follow without lag
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by 200px (half the width of the glow div) to center it on cursor
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
      {/* 
        PERFORMANCE FIX: 
        Replaced extremely lagging `blur-[150px]` and `mix-blend-screen` with radial-gradients.
        Browsers render radial gradients exponentially faster than large CSS blur filters.
      */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(7,26,53,1)_0%,transparent_70%)] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-full" 
      />

      {/* Mouse Reactive Glow - hardware accelerated */}
      <motion.div 
        className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_60%)] rounded-full pointer-events-none"
        style={{ x: smoothX, y: smoothY, willChange: "transform" }}
      />

      {/* Digital Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Neural Lines / Particles - Reduced count to 15 for better perf */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [Math.random() * 800, Math.random() * -800],
            x: [Math.random() * 400, Math.random() * -400],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1.5 h-1.5 bg-[#06B6D4] rounded-full shadow-[0_0_10px_#06B6D4]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "transform, opacity"
          }}
        />
      ))}
    </div>
  );
};

const FloatingDashboard = () => (
  <div className="relative w-full h-[600px] xl:h-[750px] perspective-[2500px] hidden lg:block">
    <motion.div
      animate={{ 
        rotateY: [-8, 8, -8], 
        rotateX: [4, -4, 4], 
        y: [-20, 20, -20] 
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 preserve-3d w-full h-full flex items-center justify-center"
    >
      {/* Central Holographic Brain / Digital Globe area */}
      <div className="absolute w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)] animate-pulse flex items-center justify-center translate-z-[-50px]">
        <Brain className="w-32 h-32 text-[#3B82F6]/30 animate-ping" />
        <Globe2 className="absolute w-64 h-64 text-[#06B6D4]/20 animate-spin-slow" />
      </div>

      {/* Main Large Data Dashboard */}
      <div className="absolute inset-x-0 inset-y-16 bg-[rgba(255,255,255,0.04)] backdrop-blur-2xl border border-[rgba(255,255,255,0.12)] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col gap-4 overflow-hidden transform translate-z-[20px]">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          </div>
          <div className="text-white/60 text-xs tracking-[0.2em] font-mono flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#06B6D4] animate-pulse" />
            SYSTEM_ACTIVE
          </div>
        </div>
        
        {/* Grid Content */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {/* Predictive Analytics */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-5 flex flex-col justify-between group hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/20 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div className="text-white/90 text-sm font-semibold">Predictive Analytics</div>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
              <motion.div 
                animate={{ width: ["30%", "90%", "40%"] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#06B6D4] to-[#2563EB]" 
              />
            </div>
          </div>

          {/* ML Pipeline */}
          <div className="bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-2xl border border-[#2563EB]/30 p-5 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <Network className="w-6 h-6 text-[#3B82F6]" />
              <div className="text-white/90 text-sm font-semibold">ML Pipeline</div>
            </div>
            <div className="text-4xl font-extrabold text-white mt-2 tracking-tight">
              99.9<span className="text-[#3B82F6] text-2xl">%</span>
            </div>
            <div className="text-[#06B6D4] text-xs font-mono mt-1">Optimization complete</div>
          </div>

          {/* AI Chat Assistant */}
          <div className="col-span-2 bg-[rgba(255,255,255,0.03)] rounded-2xl border border-white/5 p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shrink-0 shadow-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col gap-3 w-full mt-1">
              <div className="h-2.5 w-1/3 bg-white/30 rounded-full animate-pulse" />
              <div className="h-2 w-3/4 bg-white/10 rounded-full" />
              <div className="h-2 w-1/2 bg-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Panel: Cyber Security Shield */}
      <motion.div 
        animate={{ y: [-15, 15, -15], z: [60, 80, 60], rotateX: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-12 top-20 bg-[rgba(255,255,255,0.06)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-4 translate-z-[60px]"
      >
        <div className="w-12 h-12 rounded-full bg-[#06B6D4]/20 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-[#06B6D4]" />
        </div>
        <div>
          <div className="text-white font-bold text-sm">Zero-Trust Security</div>
          <div className="text-green-400 text-xs font-mono mt-1">Secured</div>
        </div>
      </motion.div>

      {/* Floating Panel: Cloud Infrastructure */}
      <motion.div 
        animate={{ y: [15, -15, 15], z: [80, 100, 80], rotateY: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 bottom-32 bg-[rgba(37,99,235,0.15)] backdrop-blur-xl border border-[#2563EB]/40 rounded-2xl p-5 shadow-[0_20px_40px_rgba(37,99,235,0.2)] flex flex-col gap-3 translate-z-[80px]"
      >
        <div className="flex items-center gap-3">
          <Cloud className="w-5 h-5 text-white" />
          <span className="text-white font-bold text-sm">Cloud Native Architecture</span>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i} 
              animate={{ height: [10, 20 + Math.random() * 20, 10] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 bg-[#06B6D4] rounded-t-sm"
            />
          ))}
        </div>
      </motion.div>

    </motion.div>
  </div>
);

const AnimatedText = ({ text, highlight }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => {
        const isHighlight = highlight && word.includes(highlight.split(" ")[0]);
        return (
          <motion.span
            key={`${text}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`inline-block mr-[20px] ${isHighlight ? 'text-gradient-animated pb-2' : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
};

const heroSlides = [
  {
    id: 1,
    heading: "Building AI-Powered Digital Products for the Future.",
    highlight: "AI-Powered",
    description: "ScorpyTech builds enterprise-grade Artificial Intelligence solutions, cloud-native applications, intelligent automation platforms, data engineering systems, and next-generation digital products for businesses worldwide.",
    primaryCTA: "Start Your Project",
    secondaryCTA: "Explore Solutions"
  },
  {
    id: 2,
    heading: "Automating Enterprise Workflows with Machine Learning.",
    highlight: "Machine Learning.",
    description: "Deploy scalable AI models and intelligent automation to reduce operational costs, eliminate manual processes, and accelerate enterprise growth.",
    primaryCTA: "See AI in Action",
    secondaryCTA: "View Case Studies"
  },
  {
    id: 3,
    heading: "Architecting Cloud-Native Infrastructure for Scale.",
    highlight: "Cloud-Native",
    description: "Build resilient, secure, and infinitely scalable architectures using cutting-edge cloud technologies, Kubernetes, and zero-trust security frameworks.",
    primaryCTA: "Optimize Your Cloud",
    secondaryCTA: "Our Architecture"
  }
];

export default function Hero({ onApplyNow }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // 6 second slide duration
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full bg-[#020617] relative flex flex-col justify-between overflow-hidden min-h-[100vh] pt-24 xl:pt-32">
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-[2500px] { perspective: 2500px; }
        .translate-z-[-50px] { transform: translateZ(-50px); }
        .translate-z-[20px] { transform: translateZ(20px); }
        .translate-z-[60px] { transform: translateZ(60px); }
        .translate-z-[80px] { transform: translateZ(80px); }
        .text-gradient-animated {
          background: linear-gradient(90deg, #2563EB, #06B6D4, #2563EB);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        .marquee-container {
          display: flex;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee-content {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 4rem;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <BackgroundEffects />

      {/* Floating Badges */}
      <FloatingBadge text="OpenAI" delay={0} x={48} y={15} duration={7} />
      <FloatingBadge text="LLM" delay={1} x={92} y={25} duration={5} />
      <FloatingBadge text="GenAI" delay={2} x={88} y={65} duration={6} />
      <FloatingBadge text="Automation" delay={0.5} x={45} y={80} duration={8} />
      <FloatingBadge text="Computer Vision" delay={1.5} x={95} y={45} duration={7} />
      <FloatingBadge text="AI Agents" delay={2.5} x={42} y={50} duration={6} />

      {/* Main Split Layout */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          
          {/* Left Side (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center pt-10 lg:pt-0 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-y-0 flex flex-col justify-center"
              >
                <h1 className="text-[50px] md:text-[70px] xl:text-[90px] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                  <AnimatedText text={heroSlides[currentSlide].heading} highlight={heroSlides[currentSlide].highlight} />
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-[22px] text-[#CBD5E1] font-light leading-relaxed max-w-[620px] mb-12"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onApplyNow}
                    className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white px-9 py-4 rounded-[999px] font-semibold text-[18px] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.4)] relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10">{heroSlides[currentSlide].primaryCTA}</span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgba(255,255,255,0.03)] text-white border border-white/20 backdrop-blur-md px-9 py-4 rounded-[999px] font-semibold text-[18px] transition-all flex items-center justify-center gap-3 group"
                  >
                    {heroSlides[currentSlide].secondaryCTA}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </motion.button>
                </motion.div>
                
                {/* Slide Indicators */}
                <div className="flex items-center gap-3 mt-12">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        currentSlide === index ? 'w-10 bg-[#3B82F6]' : 'w-4 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side (55%) */}
          <div className="w-full lg:w-[55%] mt-16 lg:mt-0 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="w-full flex justify-end"
            >
              <FloatingDashboard />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Marquee & Stats Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative z-10 w-full mt-24"
      >
        {/* Client Logos Marquee */}
        <div className="w-full border-t border-white/10 bg-white/5 py-8">
          <div className="text-center text-[#CBD5E1] text-sm font-medium tracking-widest uppercase mb-6">
            Trusted by Innovative Businesses
          </div>
          <div className="marquee-container w-full max-w-[1400px] mx-auto px-6">
            <div className="marquee-content items-center text-white/50 text-2xl font-bold font-mono">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <span>AWS</span>
                  <span>Microsoft Azure</span>
                  <span>Google Cloud</span>
                  <span>Docker</span>
                  <span>Kubernetes</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                  <span>OpenAI</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="w-full bg-[rgba(255,255,255,0.03)] border-t border-white/10 backdrop-blur-xl">
          <div className="container mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { label: "Projects Delivered", end: 300, suffix: "+" },
              { label: "Enterprise Clients", end: 50, suffix: "+" },
              { label: "Industries Served", end: 20, suffix: "+" },
              { label: "AI Platform Uptime", end: 99.99, suffix: "%" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">
                  <StatCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-[#CBD5E1] font-medium tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 translate-y-full opacity-50">
          <Mouse className="w-6 h-6 text-white animate-bounce" />
          <span className="text-[10px] text-white tracking-widest uppercase font-medium">Scroll to Discover</span>
        </div>
      </motion.div>
    </div>
  );
}
