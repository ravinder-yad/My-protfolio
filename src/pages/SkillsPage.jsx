import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaServer, FaDatabase, FaRobot, 
  FaBrain, FaRegCheckCircle, FaCode, FaMobileAlt, FaPaintBrush, FaNetworkWired, FaLock, FaGitAlt,
  FaPuzzlePiece, FaUsers, FaComments, FaUserTie, FaClock, FaSyncAlt, FaLaptopCode, FaMagic, FaTerminal
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman, SiVercel, SiCanva, SiOpenai, SiGoogle
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { portfolioData } from '../data/resumeData';

// Precise Icon Mapping
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
  if (name.includes('express')) return <SiExpress className="text-gray-800" />;
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
  
  // AI Tools
  if (name.includes('chatgpt')) return <SiOpenai className="text-[#10a37f]" />;
  if (name.includes('claude')) return <FaRobot className="text-[#d97757]" />;
  if (name.includes('gemini')) return <SiGoogle className="text-[#4285F4]" />;
  if (name.includes('prompt')) return <FaTerminal className="text-[#8b5cf6]" />;
  if (name.includes('ai-assisted') || name.includes('ai tool')) return <FaMagic className="text-[#f59e0b]" />;
  
  // Soft Skills
  if (name.includes('problem')) return <FaPuzzlePiece className="text-[#ef4444]" />;
  if (name.includes('team') || name.includes('collaboration')) return <FaUsers className="text-[#3b82f6]" />;
  if (name.includes('communication')) return <FaComments className="text-[#10b981]" />;
  if (name.includes('leadership')) return <FaUserTie className="text-[#6366f1]" />;
  if (name.includes('time')) return <FaClock className="text-[#f59e0b]" />;
  if (name.includes('adaptability')) return <FaSyncAlt className="text-[#14b8a6]" />;
  
  // Fallback
  return <FaRegCheckCircle className="text-blue-600" />;
};

const SkillsPage = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  const skillCategories = [
    { 
      title: "Programming Languages", 
      data: portfolioData.skills.programmingLanguages, 
      desc: "Core languages used to write logic and build applications." 
    },
    { 
      title: "Frontend Development", 
      data: portfolioData.skills.frontend, 
      desc: "Building clean, responsive, and interactive user interfaces." 
    },
    { 
      title: "Backend Development", 
      data: portfolioData.skills.backend, 
      desc: "Developing secure and scalable APIs and server logic." 
    },
    { 
      title: "Database Management", 
      data: portfolioData.skills.database, 
      desc: "Managing and optimizing data storage and retrieval." 
    },
    { 
      title: "Development Tools", 
      data: portfolioData.skills.developmentTools, 
      desc: "Modern tools for productivity, version control, and deployment." 
    },
    { 
      title: "AI Tools & Workflows", 
      data: portfolioData.skills.aiTools, 
      desc: "Leveraging AI for faster, smarter, and more efficient development." 
    },
    { 
      title: "Soft Skills", 
      data: portfolioData.skills.softSkills, 
      desc: "Essential interpersonal, management, and collaborative skills." 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden pt-32 pb-24">
      
      {/* Global Page Background Effects */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: yBg }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <motion.div 
          animate={{ x: [0, 50, 0, -50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0, 40, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[100px]"
        />
      </motion.div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills & Tech.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto font-medium"
          >
            A comprehensive snapshot of the technologies, tools, and methodologies I use to build modern, scalable web applications.
          </motion.p>
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"
          ></motion.div>
        </div>

        {/* Masonry Layout for Skill Categories */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {skillCategories.map((category, index) => {
            if (!category.data || category.data.length === 0) return null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="break-inside-avoid group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                {/* Inner Glow on Hover */}
                <div className="absolute -inset-[100px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-8 font-medium border-b border-gray-100 pb-6">
                    {category.desc}
                  </p>
                  
                  {/* Flex Wrap for Centered Icons */}
                  <div className="flex flex-wrap justify-center gap-6">
                    {category.data.map((skill, i) => (
                      <div key={i} className="flex flex-col items-center text-center space-y-3 cursor-pointer group/icon p-2 w-[100px] rounded-xl hover:bg-blue-50/50 transition-colors">
                        <div className="text-5xl filter drop-shadow-sm group-hover/icon:drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] group-hover/icon:scale-110 group-hover/icon:-translate-y-2 transition-all duration-300">
                          {getIconForSkill(skill)}
                        </div>
                        <span className="text-[11px] font-bold text-gray-700 uppercase tracking-widest group-hover/icon:text-blue-600 transition-colors leading-tight">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SkillsPage;
