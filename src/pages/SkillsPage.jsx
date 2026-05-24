import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaServer, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman, SiNotion 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const SkillsPage = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  const skillCards = [
    {
      title: "Frontend Development",
      description: "I build clean, responsive, and interactive user interfaces with a strong focus on usability, performance, and UX.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "BOOTSTRAP", icon: <FaBootstrap className="text-[#7952B3]" /> },
        { name: "TAILWIND CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "JAVASCRIPT (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "REACT.JS", icon: <FaReact className="text-[#61DAFB]" /> }
      ]
    },
    {
      title: "Backend Development",
      description: "I develop secure and scalable backend systems that efficiently handle data, APIs, and server-side logic.",
      skills: [
        { name: "NODE.JS", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "EXPRESS.JS", icon: <SiExpress className="text-[#000000]" /> },
        { name: "RESTFUL APIS", icon: <FaServer className="text-[#007ACC]" /> },
        { name: "JWT AUTH", icon: <FaServer className="text-[#FF4B4B]" /> }
      ]
    },
    {
      title: "Database Development",
      description: "I manage and optimize databases for high-performance and data integrity.",
      skills: [
        { name: "MONGODB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "SQL (BASIC)", icon: <FaDatabase className="text-[#00758F]" /> }
      ]
    },
    {
      title: "Tools & Technologies",
      description: "I work with modern development tools to improve productivity and maintain clean codebases.",
      skills: [
        { name: "GIT & GITHUB", icon: <FaGithub className="text-[#181717]" /> },
        { name: "POSTMAN", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "VS CODE", icon: <VscVscode className="text-[#007ACC]" /> },
        { name: "NOTION", icon: <SiNotion className="text-[#000000]" /> }
      ]
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
            className="text-5xl md:text-6xl font-extrabold text-textMain mb-4 leading-tight"
          >
            My Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Technologies.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-textGray max-w-2xl mx-auto"
          >
            A snapshot of the technologies and tools I use to build modern, scalable web applications.
          </motion.p>
        </div>

        {/* 3 Boxes in One Line Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300 relative overflow-hidden flex flex-col ${
                index === 3 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              {/* Inner Glow on Hover */}
              <div className="absolute -inset-[100px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-textMain mb-4 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-textGray leading-relaxed text-sm mb-8 flex-grow">
                  {card.description}
                </p>
                
                {/* Icons Grid inside Card */}
                <div className="grid grid-cols-2 gap-y-8 gap-x-2">
                  {card.skills.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3 cursor-pointer group/icon">
                      <div className="text-4xl filter group-hover/icon:drop-shadow-[0_0_8px_rgba(37,99,235,0.4)] group-hover/icon:scale-110 group-hover/icon:-translate-y-1 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] font-bold text-textGray uppercase tracking-widest group-hover/icon:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SkillsPage;
