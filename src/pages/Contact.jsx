import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../data/resumeData';

const Contact = () => {
  const { personalInfo, socialLinks } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-slate-900 font-sans text-gray-800 dark:text-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Have a project in mind, a job opportunity, or just want to say hi? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* CONTACT INFO SIDEBAR */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }} 
            className="w-full lg:w-1/3"
          >
            <div className="bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-800 p-10 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                      <FaEnvelope />
                    </div>
                    <div className="ml-5 pt-1">
                      <p className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-base font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors break-all">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                      <FaPhoneAlt />
                    </div>
                    <div className="ml-5 pt-1">
                      <p className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-base font-bold text-gray-900 dark:text-white">{personalInfo.phone}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="ml-5 pt-1">
                      <p className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-base font-bold text-gray-900 dark:text-white">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative z-10 mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
                <p className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-4">Follow Me</p>
                <div className="flex space-x-4">
                  <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm">
                    <FaLinkedin />
                  </a>
                  <a href={socialLinks.github} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:bg-gray-900 hover:border-gray-900 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.4 }} 
            className="w-full lg:w-2/3"
          >
            <div className="bg-white dark:bg-slate-900 p-10 md:p-12 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow h-full flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-slate-400 uppercase tracking-widest mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-900 dark:text-white placeholder-gray-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-900 dark:text-white placeholder-gray-400" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 dark:text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-900 dark:text-white placeholder-gray-400" 
                    placeholder="Freelance Project Inquiry" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 dark:text-slate-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    required
                    rows="5" 
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-900 dark:text-white placeholder-gray-400 resize-none" 
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`px-10 py-4 font-bold rounded-xl shadow-md flex items-center justify-center gap-3 transition-all w-full md:w-auto ${
                    submitted 
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/30' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/30 hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : submitted ? (
                    <>Message Sent Successfully!</>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
