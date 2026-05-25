import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const AboutExperienceTimeline = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timelineData = [
    {
      year: "2026",
      title: "MERN Stack Learning & Mastery",
      description: "Deep diving into advanced backend concepts, database scaling with MongoDB, and building highly interactive full-stack applications with React and Express."
    },
    {
      year: "2025",
      title: "Building Real Projects",
      description: "Transitioned from tutorials to building complex, real-world applications. Focused on component architecture, state management, and API integrations."
    },
    {
      year: "2024",
      title: "Started Frontend Journey",
      description: "Began my web development journey by mastering the fundamentals of HTML, CSS, and JavaScript. Fell in love with UI design and Tailwind CSS."
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-white dark:bg-slate-900" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-textMain dark:text-white mb-4"
          >
            Experience & Learning Journey
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative mt-16 pl-4 md:pl-0">
          {/* Main Vertical Animated Line */}
          <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-1 bg-gray-100 dark:bg-slate-800 rounded-full transform md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-600 origin-top"
              style={{ scaleY, height: '100%' }}
            ></motion.div>
          </div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index} 
                data={item} 
                index={index} 
                alignLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ data, index, alignLeft }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-start md:items-center ${alignLeft ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Center Dot Indicator */}
      <div className="absolute left-6 md:left-[50%] w-6 h-6 transform -translate-x-1/2 mt-6 md:mt-0 z-20 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-primary shadow-[0_0_15px_rgba(37,99,235,0.6)]"
        ></motion.div>
      </div>

      {/* Content Box */}
      <div className={`ml-14 md:ml-0 w-full md:w-1/2 ${alignLeft ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
        <div className="group bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
          {/* Subtle Hover Gradient */}
          <div className={`absolute top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ${alignLeft ? 'left-0' : 'right-0'}`}></div>
          
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-primary font-bold rounded-full text-sm mb-4">
            {data.year}
          </span>
          <h3 className="text-2xl font-bold text-textMain dark:text-white mb-3 group-hover:text-primary transition-colors">{data.title}</h3>
          <p className="text-textGray dark:text-slate-400 leading-relaxed">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutExperienceTimeline;
