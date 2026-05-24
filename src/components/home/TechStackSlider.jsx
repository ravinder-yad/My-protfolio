import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiVite } from 'react-icons/si';

const TechStackSlider = () => {
  const techs = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind' },
    { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node' },
    { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
    { icon: <FaGithub className="text-[#181717]" />, name: 'GitHub' },
    { icon: <SiVite className="text-[#646CFF]" />, name: 'Vite' },
  ];

  // Double the array for seamless infinite marquee loop
  const infiniteTechs = [...techs, ...techs, ...techs, ...techs];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <motion.div
        className="flex space-x-12 w-max"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {infiniteTechs.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-3 text-xl font-bold text-textGray opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-3xl">{tech.icon}</span>
            <span>{tech.name}</span>
            {/* Dot Separator except for the last visual item (though it repeats) */}
            <span className="mx-6 text-gray-300">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStackSlider;
