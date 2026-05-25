import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiRedux } from 'react-icons/si';

const SkillsSection = () => {
  const frontendIcons = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
  ];

  const backendIcons = [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express', icon: <SiExpress className="text-[#000000]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Database', icon: <FaDatabase className="text-[#336791]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-[#181717]" /> },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle 
          title="Skills & Technologies" 
          subtitle="Technologies and tools I use to build modern scalable web applications." 
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <SkillCard title="Frontend Development" description="Crafting pixel-perfect, interactive, and highly responsive user interfaces." icons={frontendIcons} />
          <SkillCard title="Backend & Tools" description="Building robust APIs, managing databases, and orchestrating deployments." icons={backendIcons} />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, description, icons }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ translateY: -8 }}
      className="group bg-white dark:bg-slate-900/70 backdrop-blur-xl p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:border-blue-200 transition-all duration-500 relative overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-[100px] bg-gradient-to-r from-blue-100/30 to-indigo-100/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-textMain dark:text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-textGray dark:text-slate-400 mb-8 leading-relaxed">{description}</p>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {icons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gray-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-100 dark:border-slate-800 group-hover:shadow-md transition-shadow group-hover:border-blue-100">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-textGray dark:text-slate-400 group-hover:text-primary transition-colors">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
