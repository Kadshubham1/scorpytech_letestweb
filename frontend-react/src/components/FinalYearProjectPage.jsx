import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { renderIcon } from './Icons';
import { ChevronDown, ArrowRight, CheckCircle, Briefcase, Code } from 'lucide-react';
import { mockData } from '../data/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95, y: 20 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } } };

export default function FinalYearProjectPage({ onApplyNow }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const { projectCategories, fypProjects, fypWhyChooseUs, developmentProcess, projectTestimonials, projectFaqs } = mockData;

  const fypTech = [
    { name: "Python", icon: "python" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Flutter", icon: "flutter" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "TensorFlow", icon: "cpu" },
    { name: "Arduino", icon: "cpu" },
    { name: "AWS", icon: "aws" },
    { name: "Docker", icon: "box" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4 border border-blue-100">
              #1 ENTERPRISE SOFTWARE PARTNER
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
              Build Your Next-Gen Enterprise Solution with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ScorpyTech</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              We deliver tailormade Artificial Intelligence models, scalable cloud infrastructures, and high-performance custom software systems.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => {
                document.getElementById('fyp-projects')?.scrollIntoView({ behavior: 'smooth' });
              }} className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2">
                Explore Case Studies <ArrowRight size={18} />
              </button>
              <button onClick={onApplyNow} className="bg-white text-blue-600 border border-blue-200 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Briefcase size={18} /> Talk to Expert
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-blue-600 mb-1"><CheckCircle size={20} /><span className="font-bold text-xl text-slate-900">300+</span></div>
                <span className="text-xs text-slate-500 font-medium">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-blue-600 mb-1"><CheckCircle size={20} /><span className="font-bold text-xl text-slate-900">50+</span></div>
                <span className="text-xs text-slate-500 font-medium">Enterprise Partners</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-blue-600 mb-1"><CheckCircle size={20} /><span className="font-bold text-xl text-slate-900">120+</span></div>
                <span className="text-xs text-slate-500 font-medium">AI Models Deployed</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-blue-600 mb-1"><CheckCircle size={20} /><span className="font-bold text-xl text-slate-900">98%</span></div>
                <span className="text-xs text-slate-500 font-medium">Client Retention</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative z-10 w-full h-[500px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex items-center justify-center p-8">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" alt="Engineering Project" className="w-full h-full object-cover rounded-xl" />
              <div className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-xl font-bold text-blue-600 border border-slate-100 flex items-center gap-2 animate-bounce" style={{animationDuration: '3s'}}>
                AI
              </div>
              <div className="absolute top-32 -right-6 bg-white p-4 rounded-xl shadow-xl font-bold text-indigo-600 border border-slate-100 flex items-center gap-2 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
                IoT
              </div>
              <div className="absolute bottom-20 -right-4 bg-white p-4 rounded-xl shadow-xl font-bold text-slate-700 border border-slate-100 flex items-center gap-2 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
                <Code size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Project Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Project Categories</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <motion.div 
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {projectCategories?.map((category) => (
              <motion.div key={category.id} variants={item} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {renderIcon(category.icon, "w-8 h-8")}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{category.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed h-10">{category.description}</p>
                <div className="text-blue-600 font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section id="fyp-projects" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Featured Projects</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-800 transition-colors hidden sm:flex">
              View All Projects <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fypProjects?.map(project => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col sm:flex-row h-full">
                <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden">
                  <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                    {project.badge}
                  </div>
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{project.tags.split('|').join(' • ')}</p>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  </div>
                  <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="text-blue-600 font-semibold flex items-center justify-center gap-2 mt-8 hover:text-blue-800 transition-colors sm:hidden w-full">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* 4. Why Choose Us (Complete Support) */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {fypWhyChooseUs?.map((item, idx) => (
              <div key={item.id} className="text-center group border-b md:border-b-0 md:border-r border-slate-800 pb-8 md:pb-0 last:border-0 px-4 md:px-2">
                <div className="w-14 h-14 mx-auto bg-slate-800/50 text-blue-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {renderIcon(item.icon, "w-6 h-6")}
                </div>
                <h4 className="text-sm font-bold mb-3">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. Development Process & Tech Stack Container */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Development Process */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Development Process</h2>
              </div>
              
              <div className="relative flex justify-between items-start max-w-full overflow-x-auto pb-4 custom-scrollbar">
                {/* Connecting Line */}
                <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-200 -z-10 border-b border-dashed border-slate-300"></div>
                
                {developmentProcess?.map((step, idx) => (
                  <div key={step.id} className="flex flex-col items-center flex-shrink-0 w-24 relative z-10 group cursor-default">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center justify-center mb-2 shadow-sm border border-white">
                      {idx + 1}
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300 mb-3 shadow-sm">
                      {renderIcon(step.icon, "w-5 h-5")}
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 text-center uppercase tracking-wider group-hover:text-blue-600 transition-colors px-1 leading-tight">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Technologies We Use</h2>
              </div>
              
              <div className="grid grid-cols-5 gap-4">
                {fypTech.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-md hover:border-blue-100 transition-all duration-300 cursor-pointer">
                    <div className="text-blue-600 mb-2">
                      {renderIcon(tech.icon, "w-6 h-6")}
                    </div>
                    <span className="text-[10px] font-bold text-slate-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">What Partners Say</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTestimonials?.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-8 italic leading-relaxed text-sm h-auto min-h-[4rem]">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img src={t.author_image} alt={t.author_name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-50" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.author_name}</h4>
                    <p className="text-xs text-slate-500">{t.author_title}, {t.author_college}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Project Gallery</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-500">Glimpses of modern architectures and software implementations.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" alt="Hardware" className="w-full rounded-xl hover:opacity-90 transition-opacity mb-4" />
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80" alt="Code" className="w-full rounded-xl hover:opacity-90 transition-opacity mb-4" />
            <img src="https://images.unsplash.com/photo-1531297172864-822d10bf0dbf?auto=format&fit=crop&w=400&q=80" alt="Laptop" className="w-full rounded-xl hover:opacity-90 transition-opacity mb-4" />
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Team" className="w-full rounded-xl hover:opacity-90 transition-opacity mb-4" />
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Software" className="w-full rounded-xl hover:opacity-90 transition-opacity mb-4" />
            <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=400&q=80" alt="Mobile App" className="w-full rounded-xl hover:opacity-90 transition-opacity mb-4" />
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {projectFaqs?.map((faq) => (
              <div key={faq.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:border-blue-200 transition-colors">
                <button 
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <span className="font-bold text-slate-800">{faq.question}</span>
                  <ChevronDown className={`text-slate-400 transition-transform ${activeFaq === faq.id ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4 text-slate-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
            {/* BG pattern */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <svg width="400" height="400" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" /></svg>
            </div>
            
            <div className="flex items-center gap-6 mb-8 md:mb-0 relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm text-white shrink-0">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Ready to Start Your Digital Transformation?</h2>
                <p className="text-blue-100">Partner with our seasoned engineering teams to deploy production-ready AI and software solutions.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 relative z-10 w-full md:w-auto">
              <button onClick={onApplyNow} className="flex-1 md:flex-none bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                Start Your Project
              </button>
              <button onClick={onApplyNow} className="flex-1 md:flex-none bg-transparent text-white border border-white/30 px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
