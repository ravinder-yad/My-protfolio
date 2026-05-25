import { motion } from 'framer-motion';
import { portfolioData } from '../../data/resumeData';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const ResumeSidebar = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
      
      {/* Profile Card */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-slate-900/70 backdrop-blur-xl border border-gray-100 dark:border-slate-800 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 relative overflow-hidden group hover:border-blue-200 transition-colors"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        
        <h1 className="text-3xl font-extrabold text-textMain dark:text-white mb-2">{personalInfo.name}</h1>
        <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
          {personalInfo.title}
        </h2>
        
        <p className="text-textGray dark:text-slate-400 text-sm leading-relaxed mb-8">
          {personalInfo.summary}
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center text-textGray dark:text-slate-400 text-sm group/item">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary mr-3 group-hover/item:scale-110 transition-transform">
              <FaEnvelope />
            </div>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a>
          </div>
          <div className="flex items-center text-textGray dark:text-slate-400 text-sm group/item">
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 mr-3 group-hover/item:scale-110 transition-transform">
              <FaPhoneAlt />
            </div>
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center text-textGray dark:text-slate-400 text-sm group/item">
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-500 dark:text-slate-400 mr-3 group-hover/item:scale-110 transition-transform">
              <FaMapMarkerAlt />
            </div>
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <FaDownload /> Download Resume
        </button>

      </motion.div>

      {/* Navigation Quick Links (Desktop Only) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:flex flex-col gap-2"
      >
        <button onClick={() => scrollToSection('projects')} className="text-left px-6 py-3 rounded-xl hover:bg-white dark:bg-slate-900/80 text-textGray dark:text-slate-400 hover:text-textMain dark:text-white font-bold transition-all border border-transparent hover:border-gray-200 dark:border-slate-700">
          💼 Featured Projects
        </button>
        <button onClick={() => scrollToSection('skills')} className="text-left px-6 py-3 rounded-xl hover:bg-white dark:bg-slate-900/80 text-textGray dark:text-slate-400 hover:text-textMain dark:text-white font-bold transition-all border border-transparent hover:border-gray-200 dark:border-slate-700">
          ⚡ Technical Skills
        </button>
        <button onClick={() => scrollToSection('education')} className="text-left px-6 py-3 rounded-xl hover:bg-white dark:bg-slate-900/80 text-textGray dark:text-slate-400 hover:text-textMain dark:text-white font-bold transition-all border border-transparent hover:border-gray-200 dark:border-slate-700">
          🎓 Education & Certifications
        </button>
      </motion.div>

    </div>
  );
};

export default ResumeSidebar;
