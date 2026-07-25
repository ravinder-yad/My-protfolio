import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/resumeData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Extract unique categories dynamically from data
  const categories = useMemo(() => {
    const cats = new Set(projectsData.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);
  
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-textMain dark:text-white mb-6">My <span className="text-gradient">Projects</span></h1>
          <p className="text-xl text-textGray dark:text-slate-400 max-w-2xl mx-auto">Explore my portfolio of real-world web applications and frontend clones.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat ? 'bg-primary text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-slate-800 text-textGray dark:text-slate-400 hover:bg-gray-200 dark:bg-slate-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col h-full glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 border border-slate-100 dark:border-slate-800"
              >
                <div className="relative h-52 overflow-hidden">
                  <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-xs font-semibold rounded-full shadow-sm text-primary border border-slate-100 dark:border-slate-800">
                    {project.category}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-textMain dark:text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-textGray dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-blue-50/60 dark:bg-slate-800/40 text-primary dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-100/30 dark:border-slate-700/30">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center border-t border-borderGray dark:border-slate-800 pt-4 mt-auto">
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-textMain dark:text-white hover:text-primary transition-colors font-semibold text-sm group/btn">
                        <FaExternalLinkAlt className="mr-2 text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" /> Live Link
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-textMain dark:text-white hover:text-primary transition-colors font-semibold text-sm group/btn">
                        <FaGithub className="mr-2 text-base" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
