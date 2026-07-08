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
            {filteredProjects.map(project => (
              <motion.div 
                layout
                variants={item}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                key={project.id} 
                className="bg-white/80  border-2 border-slate-100 rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.25)] hover:border-indigo-300 hover:-translate-y-3 transition-all duration-500 flex flex-col h-full group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image_url || 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=400&q=80'} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=400&q=80' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <span className="absolute top-4 left-4 bg-white/20  text-gray-900 border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    {project.badge}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow relative bg-white">
                  {/* Floating Action Button */}
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-violet-600 transition-all duration-300 cursor-pointer">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-[0.95rem] text-gray-9000 leading-relaxed mb-8 flex-grow font-medium">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.split(',').map((tag, idx) => (
                      <span key={idx} className="bg-white text-xs font-bold text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg">
                        {tag.trim()}
                      </span>
                    ))}
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
