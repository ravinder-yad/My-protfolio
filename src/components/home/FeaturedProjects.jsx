import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "A comprehensive digital solution for hospitals to manage patients, appointments, and staff efficiently with real-time updates.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "IndiaWalls Platform",
      description: "A premium wallpaper and interior design platform showcasing modern aesthetics with high-performance image rendering.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Admin Dashboard Pro",
      description: "An analytical dashboard providing deep insights into sales, user growth, and system performance through interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Recharts", "Express", "Context API"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section className="py-24 bg-white relative" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Featured Projects" subtitle="Some of my recent premium builds" />
        
        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 group`}
            >
              {/* Image Container with Hover Zoom & Glow */}
              <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-shadow duration-500">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Featured Project</div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-textMain mb-6 group-hover:text-primary transition-colors">{project.title}</h3>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 text-textGray text-lg leading-relaxed mb-6 relative z-20 md:-ml-8 lg:-ml-12 md:mr-0 group-hover:shadow-md transition-shadow">
                  {project.description}
                </div>
                
                <ul className="flex flex-wrap gap-3 mb-8 text-sm font-mono text-textGray">
                  {project.tags.map((tag, i) => (
                    <li key={i} className="px-3 py-1 bg-gray-100 rounded-md">{tag}</li>
                  ))}
                </ul>
                
                <div className="flex items-center space-x-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-textMain hover:text-primary transition-colors font-bold"
                  >
                    <FiGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-textMain hover:text-primary transition-colors font-bold"
                  >
                    <FiExternalLink className="text-xl" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <motion.a 
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white shadow-[0_10px_20px_rgba(37,99,235,0.1)] transition-all"
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
