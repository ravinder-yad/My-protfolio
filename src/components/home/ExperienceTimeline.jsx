import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2024",
      title: "Looking for Internship",
      description: "Actively seeking opportunities to apply my skills in a professional environment and contribute to real-world projects.",
      active: true
    },
    {
      year: "2023",
      title: "Built Projects",
      description: "Developed multiple full-stack applications including a Hospital Management System and a Premium Portfolio.",
      active: false
    },
    {
      year: "2022",
      title: "Learned React & Node.js",
      description: "Dived deep into modern frontend frameworks and backend runtimes to become a full stack developer.",
      active: false
    },
    {
      year: "2021",
      title: "Learned HTML/CSS/JS",
      description: "Mastered the fundamentals of web development and responsive design principles.",
      active: false
    },
    {
      year: "2020",
      title: "Started Coding",
      description: "Wrote my first line of code and discovered a passion for building software.",
      active: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="My Journey" subtitle="The timeline of my growth as a developer" />

        <div className="mt-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-400 to-transparent transform md:-translate-x-1/2 rounded-full"></div>

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 transform -translate-x-[10px] md:-translate-x-1/2 mt-6 md:mt-0 z-10 flex items-center justify-center">
                  <div className={`w-full h-full rounded-full border-4 border-white shadow-md ${exp.active ? 'bg-primary animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.8)]' : 'bg-gray-300'}`}></div>
                </div>

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-primary font-bold rounded-full text-sm mb-3">
                      {exp.year}
                    </span>
                    <h4 className="text-xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">{exp.title}</h4>
                    <p className="text-textGray leading-relaxed">{exp.description}</p>
                  </div>
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
