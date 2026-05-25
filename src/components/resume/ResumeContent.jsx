import { motion } from 'framer-motion';
import { portfolioData, projectsData } from '../../data/resumeData';
import { FaCheckCircle, FaLaptopCode, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const ResumeContent = () => {
  return (
    <div className="w-full lg:w-2/3 space-y-16 pb-32">
      
      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="scroll-mt-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-50 text-primary rounded-xl">
            <FaLaptopCode className="text-2xl" />
          </div>
          <h2 className="text-3xl font-extrabold text-textMain dark:text-white">Featured Projects</h2>
        </div>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(37,99,235,0.08)] hover:border-blue-100 transition-all group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h3 className="text-2xl font-bold text-textMain dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-gray-50 dark:bg-slate-800/50 text-textGray dark:text-slate-400 text-xs font-bold uppercase tracking-wider rounded-lg border border-gray-200 dark:border-slate-700">
                  {project.duration}
                </span>
              </div>
              
              <div className="mb-4">
                <span className="text-sm font-semibold text-indigo-500">{project.category}</span>
              </div>

              <p className="text-textGray dark:text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50/50 text-primary text-xs font-bold rounded-full border border-blue-100/50">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features List */}
              <div className="pt-6 border-t border-gray-50">
                <p className="text-xs font-bold text-textMain dark:text-white uppercase tracking-widest mb-3">Key Features</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-textGray dark:text-slate-400">
                      <FaCheckCircle className="text-green-500 mr-2 text-[10px]" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="scroll-mt-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl">
            <FaCheckCircle className="text-2xl" />
          </div>
          <h2 className="text-3xl font-extrabold text-textMain dark:text-white">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard title="Frontend" skills={portfolioData.skills.frontend} color="blue" />
          <SkillCard title="Backend & DB" skills={[...portfolioData.skills.backend, ...portfolioData.skills.database]} color="indigo" />
          <SkillCard title="Tools & DevOps" skills={portfolioData.skills.developmentTools} color="gray" />
          <SkillCard title="AI & Soft Skills" skills={[...portfolioData.skills.aiTools, ...portfolioData.skills.softSkills]} color="blue" />
        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS --- */}
      <section id="education" className="scroll-mt-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-50 text-primary rounded-xl">
            <FaGraduationCap className="text-2xl" />
          </div>
          <h2 className="text-3xl font-extrabold text-textMain dark:text-white">Education & Certifications</h2>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-200 before:to-transparent">
          
          {/* Degree */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white">
              <FaGraduationCap />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm">
              <div className="font-bold text-primary mb-1">{portfolioData.personalInfo.duration}</div>
              <h4 className="text-xl font-bold text-textMain dark:text-white mb-1">{portfolioData.personalInfo.education}</h4>
              <p className="text-sm font-semibold text-indigo-500">{portfolioData.personalInfo.university}</p>
            </div>
          </div>

          {/* Certifications Loop */}
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white">
                <FaTrophy className="text-sm" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm">
                <div className="font-bold text-primary mb-1">{cert.duration}</div>
                <h4 className="text-lg font-bold text-textMain dark:text-white mb-1">{cert.title}</h4>
                <p className="text-sm text-textGray dark:text-slate-400">{cert.organization}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

// Helper for skill groupings
const SkillCard = ({ title, skills, color }) => {
  const colorMap = {
    blue: 'border-blue-100 bg-blue-50/20 text-primary',
    indigo: 'border-indigo-100 bg-indigo-50/20 text-indigo-500',
    gray: 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50/50 text-gray-700 dark:text-slate-300'
  };

  return (
    <div className="bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
      <h3 className="text-xl font-bold text-textMain dark:text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${colorMap[color]}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResumeContent;
