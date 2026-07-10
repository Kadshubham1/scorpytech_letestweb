import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
};

const Projects = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!projects || projects.length === 0) return null;

  const categories = ['All', ...new Set(projects.map(p => p.badge))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.badge === selectedCategory);

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Featured Intern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Projects</span>
          </h2>
          <p className="text-gray-9000 text-lg leading-relaxed">
            Witness the high-quality industrial systems engineered by our interns during their dynamic modules.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative ${
                selectedCategory === cat
                  ? 'text-gray-900 shadow-lg shadow-indigo-500/30'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-section-bg hover:text-gray-900'
              }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                variants={item}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                key={project.id} 
                className={`group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 h-[450px] ${index % 3 === 1 ? 'lg:translate-y-12' : ''}`}
              >
                {/* Full Card Image Background */}
                <img 
                  src={project.image_url || 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80'} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80' }}
                />
                
                {/* Always-on gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>

                {/* Badge */}
                <span className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm z-20">
                  {project.badge}
                </span>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500">
                  <div className="transform translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col h-full justify-end">
                    
                    <h3 className="text-2xl font-bold text-white mb-2 shadow-sm drop-shadow-md">
                      {project.title}
                    </h3>
                    
                    {/* Glassmorphic Description Panel that appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                      <p className="text-[0.95rem] text-gray-100 leading-relaxed mb-6 font-medium">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.split(',').map((tag, idx) => (
                          <span key={idx} className="bg-white/20 text-xs font-bold text-white px-3 py-1.5 rounded-lg border border-white/30">
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                      
                      {/* View Project Button */}
                      <div className="mt-6 flex justify-end">
                        <div className="w-10 h-10 bg-white text-[#005BAC] rounded-full flex items-center justify-center hover:bg-[#005BAC] hover:text-white transition-colors cursor-pointer shadow-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
