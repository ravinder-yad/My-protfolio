import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../../data/resumeData';
import SectionTitle from '../common/SectionTitle';

const HomeContact = () => {
  const { personalInfo } = portfolioData;
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
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <SectionTitle title="Get In Touch" subtitle="Let's build something amazing together" />

        <div className="mt-16 flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* CONTACT INFO SIDEBAR */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }} 
            className="w-full lg:w-1/3"
          >
            <div className="bg-gray-50 border border-gray-100 p-10 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white border border-gray-200 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                      <FaEnvelope />
                    </div>
                    <div className="ml-5 pt-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-base font-bold text-gray-900 hover:text-blue-600 transition-colors break-all">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white border border-gray-200 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                      <FaPhoneAlt />
                    </div>
                    <div className="ml-5 pt-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-base font-bold text-gray-900">{personalInfo.phone}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-white border border-gray-200 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="ml-5 pt-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-base font-bold text-gray-900">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.4 }} 
            className="w-full lg:w-2/3"
          >
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-300 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-900 placeholder-gray-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-900 placeholder-gray-400" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    required
                    rows="4" 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-900 placeholder-gray-400 resize-none" 
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
    </section>
  );
};

export default HomeContact;
