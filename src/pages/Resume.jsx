import { motion } from 'framer-motion';
import { portfolioData, projectsData } from '../data/resumeData';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Resume = () => {
  const { personalInfo, skills, certifications, achievements, socialLinks } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-28 pb-20 font-sans text-gray-800 dark:text-slate-200">
      
      {/* Top Action Bar */}
      <div className="container mx-auto px-6 mb-8 flex justify-end print:hidden">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          <FaDownload /> Download PDF
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 max-w-7xl"
      >
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 border-b border-gray-200 dark:border-slate-700 pb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 tracking-widest uppercase">
            {personalInfo.title}
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <FaEnvelope className="text-blue-500" />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <FaLinkedin className="text-blue-500" />
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <FaGithub className="text-blue-500" />
              <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* SUMMARY SECTION */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-4">
            Professional Summary
            <span className="h-px flex-1 bg-gray-200 dark:bg-slate-700"></span>
          </h3>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-slate-400 max-w-5xl">
            {personalInfo.summary}
          </p>
        </div>

        {/* SKILLS SECTION */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-4">
            Technical Skills
            <span className="h-px flex-1 bg-gray-200 dark:bg-slate-700"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold text-blue-600 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-lg text-sm border border-gray-100 dark:border-slate-800">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-600 mb-4">Backend & DB</h4>
              <div className="flex flex-wrap gap-2">
                {[...skills.backend, ...skills.database].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-lg text-sm border border-gray-100 dark:border-slate-800">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-600 mb-4">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.developmentTools.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-lg text-sm border border-gray-100 dark:border-slate-800">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-600 mb-4">Soft Skills & AI</h4>
              <div className="flex flex-wrap gap-2">
                {[...skills.softSkills, ...skills.aiTools].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-lg text-sm border border-gray-100 dark:border-slate-800">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-8 flex items-center gap-4">
            Projects & Experience
            <span className="h-px flex-1 bg-gray-200 dark:bg-slate-700"></span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{project.title}</h4>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full whitespace-nowrap ml-2 shrink-0">
                    {project.duration}
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                  {project.category}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-bold text-gray-600 dark:text-slate-400 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-slate-400 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                {/* Print hidden buttons for actual web interactivity */}
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 mt-auto print:hidden">
                  {project.link && project.link !== "#" && (
                     <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 hover:text-indigo-600 inline-flex items-center">
                       Live Preview →
                     </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-8 flex items-center gap-4">
            Education & Certifications
            <span className="h-px flex-1 bg-gray-200 dark:bg-slate-700"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Education Left Column */}
            <div className="space-y-8">
              <div className="relative pl-6 border-l-4 border-blue-500">
                <div className="absolute w-4 h-4 bg-white dark:bg-slate-900 border-4 border-blue-500 rounded-full -left-[10px] top-1"></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{personalInfo.education}</h4>
                <div className="text-lg text-blue-600 font-semibold mb-2">{personalInfo.duration}</div>
                <p className="text-gray-600 dark:text-slate-400">{personalInfo.university}</p>
              </div>

              <div className="relative pl-6 border-l-4 border-indigo-500">
                <div className="absolute w-4 h-4 bg-white dark:bg-slate-900 border-4 border-indigo-500 rounded-full -left-[10px] top-1"></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{personalInfo.training.split(' - ')[0]}</h4>
                <div className="text-lg text-indigo-600 font-semibold mb-2">{personalInfo.trainingDuration}</div>
                <p className="text-gray-600 dark:text-slate-400">Tips-G Alwar</p>
              </div>
            </div>

            {/* Certifications Right Column */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Additional Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.filter(c => c.organization !== "Tips-G Alwar").map((cert, i) => (
                  <div key={i} className="p-4 rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800">
                    <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{cert.title}</div>
                    <div className="text-xs text-blue-600 font-semibold">{cert.organization}</div>
                    <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">{cert.duration}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-4">
            Key Achievements
            <span className="h-px flex-1 bg-gray-200 dark:bg-slate-700"></span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-600 dark:text-slate-400">
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>

      </motion.div>
    </div>
  );
};

export default Resume;
