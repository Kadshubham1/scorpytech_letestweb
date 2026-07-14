import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, Users, Briefcase, SmilePlus, Brain, Cloud, Shield, Cpu, Headphones } from 'lucide-react';

const industries = [
  {
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    description: "AI diagnostics, patient management, telemedicine, EMR solutions."
  },
  {
    title: "FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    description: "Payments, Banking, Wallet, Lending, Fraud Detection."
  },
  {
    title: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    description: "POS systems, AI recommendations, inventory automation."
  },
  {
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    description: "IoT, ERP, predictive maintenance, automation."
  },
  {
    title: "Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    description: "LMS, eLearning, AI tutors, assessment platforms."
  },
  {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    description: "CRM, Property Management, Virtual Tours."
  },

  {
    title: "Agriculture",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    description: "Precision farming, crop analytics, IoT monitoring."
  }
];

const whyChooseUsData = [
  {
    title: "AI First Approach",
    description: "We embed intelligence into the core of your software, using custom generative models and agentic workflows to automate reasoning.",
    icon: "brain"
  },
  {
    title: "Cloud Native Systems",
    description: "Designed for the cloud from day one, leveraging serverless architectures, Kubernetes orchestration, and auto-scaling.",
    icon: "cloud"
  },
  {
    title: "Enterprise Security",
    description: "Deploy secure platforms with zero-trust API layers, end-to-end encryption, and rigorous compliance configurations.",
    icon: "shield"
  },
  {
    title: "Scalable Architecture",
    description: "Engineered to support high-throughput loads with optimal database pooling, memory caching, and low-latency APIs.",
    icon: "cpu"
  },
  {
    title: "Dedicated Experts",
    description: "Work directly with senior systems architects and machine learning engineers committed to your product's roadmap.",
    icon: "users"
  },
  {
    title: "24/7 SLA Support",
    description: "Comprehensive long-term SLA monitoring, continuous telemetry logs, and instant incident response management.",
    icon: "headphones"
  }
];

const Counter = ({ end, duration = 2, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const HorizontalAccordion = ({ industries }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap w-full lg:h-[700px] gap-2 lg:gap-0 bg-white">
      {industries.map((industry, index) => {
        const isActive = active === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            className={`
              relative overflow-hidden cursor-pointer transition-all duration-[600ms] ease-in-out
              h-[150px] md:h-[300px] lg:h-[700px]
              w-full md:w-[calc(25%-0.375rem)] lg:w-auto
              lg:border-r border-white/15 last:border-r-0
              ${isActive ? 'lg:flex-[5]' : 'lg:flex-[1]'}
            `}
          >
            {/* Background Image */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-in-out ${isActive ? 'scale-110' : 'scale-100'}`}
              style={{ backgroundImage: `url(${industry.image})` }}
            />
            {/* Dark Overlay */}
            <div 
              className={`absolute inset-0 transition-colors duration-[600ms] ease-in-out ${isActive ? 'bg-black/30' : 'bg-black/55'}`}
            />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end h-full overflow-hidden">
              {/* Default Title (visible when NOT active) */}
              <div 
                className={`transition-opacity duration-[400ms] ${isActive ? 'lg:opacity-0 lg:invisible' : 'opacity-100'}`}
              >
                <h3 className="text-white font-bold text-2xl lg:text-[28px] leading-tight lg:-rotate-90 lg:origin-left lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 lg:w-max whitespace-nowrap">
                  {industry.title}
                </h3>
              </div>

              {/* Expanded Content (visible when active) */}
              <div 
                className={`hidden lg:flex flex-col transition-all duration-[600ms] ease-in-out transform ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
              >
                <h3 className="text-[42px] font-bold text-white mb-6 leading-tight drop-shadow-md">
                  {industry.title}
                </h3>
                
                <div className="flex flex-col gap-3 mb-10">
                  {industry.description.split(',').map((desc, i) => (
                    <span key={i} className="text-[18px] text-white/95 font-medium flex items-center gap-3 drop-shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      {desc.trim()}
                    </span>
                  ))}
                </div>

                <button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full px-8 py-3.5 w-max text-[16px] font-medium flex items-center gap-2 transition-colors shadow-lg">
                  Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Industries({ isHomePageSection = false }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="w-full bg-white text-[#111827] overflow-hidden selection:bg-[#2563EB]/20 selection:text-[#2563EB]">
      {/* Hero Section */}
      {!isHomePageSection && (
        <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y }} 
            className="absolute inset-0 z-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>

          <div className="relative z-10 container mx-auto px-6 max-w-[700px] text-center mt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[72px] font-bold text-white leading-tight mb-6 tracking-tight"
            >
              Industries
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed font-light"
            >
              Building intelligent software solutions across industries with AI, cloud, automation and digital transformation.
            </motion.p>
          </div>
        </section>
      )}

      {/* Premium Horizontal Accordion Industries Section */}
      <section className="w-full bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1600px] mb-12">
          <h2 className="text-[48px] md:text-[64px] font-bold text-[#111827] leading-tight tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light">
            Building intelligent software solutions for every industry.
          </p>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6">
          <HorizontalAccordion industries={industries} />
        </div>
      </section>

      {/* Why Choose ScorpyTech */}
      <section className="py-32 bg-[#F9FAFB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[56px] font-bold text-[#111827] leading-tight mb-6 tracking-tight">
              Why Choose ScorpyTech
            </h2>
            <p className="text-2xl text-gray-500 font-light">
              We deliver enterprise-grade solutions built for scale, security, and next-generation performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => {
              const cardThemes = [
                { grad: "from-blue-600 to-indigo-600", bgLight: "from-blue-50/50 to-blue-100/50", textAccent: "text-blue-600", shadow: "hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-200" },
                { grad: "from-indigo-600 to-violet-600", bgLight: "from-indigo-50/50 to-indigo-100/50", textAccent: "text-indigo-600", shadow: "hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] hover:border-indigo-200" },
                { grad: "from-cyan-500 to-blue-600", bgLight: "from-cyan-50/50 to-cyan-100/50", textAccent: "text-cyan-600", shadow: "hover:shadow-[0_20px_40px_rgba(6,182,212,0.12)] hover:border-cyan-200" },
                { grad: "from-emerald-500 to-teal-600", bgLight: "from-emerald-50/50 to-emerald-100/50", textAccent: "text-emerald-600", shadow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] hover:border-emerald-200" },
                { grad: "from-violet-500 to-purple-600", bgLight: "from-violet-50/50 to-violet-100/50", textAccent: "text-violet-600", shadow: "hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)] hover:border-violet-200" },
                { grad: "from-amber-500 to-orange-600", bgLight: "from-amber-50/50 to-amber-100/50", textAccent: "text-amber-600", shadow: "hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] hover:border-amber-200" }
              ];
              const theme = cardThemes[index % cardThemes.length];
              
              const IconComp = {
                brain: Brain,
                cloud: Cloud,
                shield: Shield,
                cpu: Cpu,
                users: Users,
                headphones: Headphones
              }[item.icon] || CheckCircle2;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group bg-white p-8 rounded-3xl border border-gray-100/80 ${theme.shadow} hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full`}
                >
                  <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${theme.grad} opacity-20 group-hover:opacity-100 group-hover:h-[4px] transition-all duration-300`} />
                  <div className={`absolute -right-12 -bottom-12 w-28 h-28 rounded-full bg-gradient-to-br ${theme.grad} opacity-0 group-hover:opacity-5 blur-2xl transition-all duration-500`} />

                  <div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${theme.bgLight} group-hover:bg-gradient-to-r group-hover:${theme.grad} transition-all duration-500 group-hover:shadow-md`}>
                      <IconComp className={`w-6 h-6 ${theme.textAccent} group-hover:text-white transition-colors duration-300`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors leading-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 group-hover:text-gray-700 transition-colors pt-2">
                    <span>Enterprise Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Call to Action */}
      {!isHomePageSection && (
        <section className="py-32 bg-[#0F172A] relative overflow-hidden">
          {/* Abstract Glow Effects */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#2563EB]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#2563EB]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h2 className="text-[56px] lg:text-[72px] font-bold text-white leading-tight mb-12 tracking-tight max-w-4xl">
              Ready to transform your business with AI?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2563EB] text-white px-10 py-5 rounded-[50px] font-medium text-lg hover:bg-[#1D4ED8] transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white px-10 py-5 rounded-[50px] font-medium text-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
