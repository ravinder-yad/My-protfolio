import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2025",
      title: "Advanced MERN Stack & Projects",
      description: "Earned React.js and problem-solving certifications. Built 20+ frontend and full-stack projects focusing on modern UI/UX.",
      active: true
    },
    {
      year: "Aug 2024 - Present",
      title: "Software Development Training",
      description: "Undergoing intensive software development training at Tips-G Alwar, applying theoretical knowledge to real-world MERN stack scenarios.",
      active: true
    },
    {
      year: "2024 - 2027",
      title: "BCA at Manipal University Jaipur",
      description: "Pursuing Bachelor of Computer Applications degree to build a strong academic foundation in computer science and programming logic.",
      active: false
    },
    {
      year: "2024",
      title: "Web Development Fundamentals",
      description: "Completed certifications in HTML, CSS, and JavaScript from Knowledge Gate, taking my first steps into responsive frontend development.",
      active: false
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="journey">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <SectionTitle title="My Journey" subtitle="The timeline of my growth and education" />

        <div className="mt-16 relative">
          {/* Vertical Line on the Left */}
          <div className="absolute left-6 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600 to-indigo-200 rounded-full"></div>

          {/* Timeline Nodes */}
          <div className="space-y-10 pl-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Node Dot */}
                <div className="absolute -left-16 w-5 h-5 transform translate-x-[3px] mt-2 z-10 flex items-center justify-center">
                  <div className={`w-full h-full rounded-full border-4 border-white shadow-sm transition-all duration-500 ${exp.active ? 'bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.5)]' : 'bg-gray-300'}`}></div>
                </div>

                {/* Content Box */}
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)] hover:border-blue-200 transition-all duration-300 group">
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-bold tracking-widest rounded-full text-xs uppercase mb-3 border border-blue-100/50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {exp.year}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ExperienceTimeline;
