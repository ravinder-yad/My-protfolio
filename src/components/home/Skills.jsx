import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/resumeData';

// Icons Import
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaNetworkWired, FaLock, FaGitAlt, FaGithub, FaMobileAlt, FaPaintBrush
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman, SiVercel, SiCanva 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const getIconForSkill = (skillName) => {
  const name = skillName.toLowerCase();
  
  // Frontend & Languages
  if (name.includes('javascript')) return <SiJavascript className="text-[#F7DF1E]" />;
  if (name.includes('html')) return <FaHtml5 className="text-[#E34F26]" />;
  if (name.includes('css')) return <FaCss3Alt className="text-[#1572B6]" />;
  if (name.includes('bootstrap')) return <FaBootstrap className="text-[#7952B3]" />;
  if (name.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4]" />;
  if (name.includes('react')) return <FaReact className="text-[#61DAFB]" />;
  if (name.includes('responsive')) return <FaMobileAlt className="text-[#3b82f6]" />;
  if (name.includes('ui') || name.includes('ux') || name.includes('design')) return <FaPaintBrush className="text-[#ec4899]" />;
  
  // Backend & Database
  if (name.includes('node')) return <FaNodeJs className="text-[#339933]" />;
  if (name.includes('express')) return <SiExpress className="text-gray-800 dark:text-slate-200" />;
  if (name.includes('mongodb')) return <SiMongodb className="text-[#47A248]" />;
  if (name.includes('sql') || name.includes('database')) return <FaDatabase className="text-[#00758F]" />;
  if (name.includes('api')) return <FaNetworkWired className="text-[#0ea5e9]" />;
  if (name.includes('jwt') || name.includes('auth')) return <FaLock className="text-[#eab308]" />;
  
  // Tools
  if (name === 'git') return <FaGitAlt className="text-[#F05032]" />;
  if (name.includes('github')) return <FaGithub className="text-[#181717]" />;
  if (name.includes('postman')) return <SiPostman className="text-[#FF6C37]" />;
  if (name.includes('vscode') || name.includes('visual studio')) return <VscVscode className="text-[#007ACC]" />;
  if (name.includes('vercel')) return <SiVercel className="text-black" />;
  if (name.includes('canva')) return <SiCanva className="text-[#00C4CC]" />;
  
  return <FaReact className="text-blue-500" />;
};

const Skills = () => {
  // We only show the top 3 categories on the homepage so it's a preview
  const previewCategories = [
    { title: "Frontend Development", data: portfolioData.skills.frontend },
    { title: "Backend Development", data: portfolioData.skills.backend },
    { title: "Tools & Platforms", data: portfolioData.skills.developmentTools }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative" id="skills">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <SectionTitle title="Technical Skills" subtitle="The building blocks of my web experiences" />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {previewCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 dark:bg-slate-800 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 gap-4"
              >
                {category.data.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-slate-800 hover:border-blue-200 hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-3xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                      {getIconForSkill(skill)}
                    </div>
                    <span className="font-bold text-xs uppercase tracking-wide text-gray-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Skills Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/skills"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-bold border-2 border-gray-100 dark:border-slate-800 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
          >
            Explore All My Skills <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Skills;
