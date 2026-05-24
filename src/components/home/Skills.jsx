import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiGit } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-[#000000]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <FaGithub className="text-[#181717]" /> },
        { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
        { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-white relative" id="skills">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Technical Skills" subtitle="The building blocks of my web experiences" />
        
        <div className="mt-16 space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-textMain mb-8 pl-4 border-l-4 border-primary">
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-blue-200 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="text-5xl mb-4 group-hover:rotate-12 transition-transform duration-300 relative z-10">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-textMain relative z-10">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
