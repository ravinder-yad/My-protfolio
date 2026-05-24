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
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-textMain mb-6">My <span className="text-gradient">Projects</span></h1>
          <p className="text-xl text-textGray max-w-2xl mx-auto">Explore my portfolio of real-world web applications and frontend clones.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat ? 'bg-primary text-white shadow-lg scale-105' : 'bg-gray-100 text-textGray hover:bg-gray-200'}`}
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
                className="group glass-card rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
                  <h3 className="text-xl font-bold mb-3 text-textMain group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase tracking-wider rounded-md">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center border-t border-borderGray pt-4 mt-auto">
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-textMain hover:text-primary transition-colors font-medium">
                        <FaExternalLinkAlt className="mr-2" /> Live
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-textMain hover:text-primary transition-colors font-medium">
                        <FaGithub className="mr-2 text-lg" /> Code
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
