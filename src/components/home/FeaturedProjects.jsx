import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import { projectsData } from '../../data/resumeData';

const FeaturedProjects = () => {
  // Take exactly the top 3 projects to fit perfectly in a single row on desktop
  const featured = projectsData.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-800 relative" id="projects">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Header with Top-Right Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Some of my best work and premium builds" 
          />
          
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-bold border-2 border-gray-100 dark:border-slate-800 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20 whitespace-nowrap"
          >
            View All Projects <FiArrowRight />
          </Link>
        </div>
        
        {/* 3 Projects in a Single Row (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] border border-gray-100 dark:border-slate-800 hover:border-blue-200 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col h-[calc(100%-15rem)]">
                <div className="text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-3">Featured Project</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 font-medium leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-50/50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-between items-center border-t border-gray-100 dark:border-slate-800 pt-5 mt-auto">
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-gray-900 dark:text-white hover:text-blue-600 transition-colors font-bold text-sm">
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-gray-900 dark:text-white hover:text-blue-600 transition-colors font-bold text-sm">
                      <FaGithub className="mr-2 text-lg" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedProjects;
