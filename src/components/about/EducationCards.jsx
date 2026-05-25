import { motion } from 'framer-motion';

const EducationCards = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      duration: "2022 - 2026",
      description: "Focusing on core computer science concepts, software engineering principles, algorithms, and modern web technologies. Participating in multiple hackathons and technical clubs.",
      institute: "University Placeholder"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
      description: "Intensive training covering the entire MERN stack, responsive design, RESTful APIs, and building scalable applications from scratch.",
      institute: "Online Certification"
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-textMain dark:text-white mb-4"
          >
            Education & Training
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-[2.5rem] transition-colors duration-500"></div>
              
              {/* Subtle Background Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-slate-800 text-textGray dark:text-slate-400 font-bold rounded-lg text-sm mb-6 tracking-wide">
                  {edu.duration}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-textMain dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                
                <h4 className="text-lg text-indigo-500 font-semibold mb-6">
                  {edu.institute}
                </h4>
                
                <p className="text-textGray dark:text-slate-400 leading-relaxed text-lg">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCards;
