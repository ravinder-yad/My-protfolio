import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-textMain mb-6">Get In <span className="text-gradient">Touch</span></h1>
          <p className="text-xl text-textGray max-w-2xl mx-auto">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="w-full lg:w-1/3">
            <div className="glass-card p-10 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-textMain mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center text-xl shrink-0">
                      <FaEnvelope />
                    </div>
                    <div className="ml-4 pt-1">
                      <p className="text-sm font-medium text-textGray uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:hello@ravindra.com" className="text-lg font-bold text-textMain hover:text-primary transition-colors">hello@ravindra.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center text-xl shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="ml-4 pt-1">
                      <p className="text-sm font-medium text-textGray uppercase tracking-wider mb-1">Location</p>
                      <p className="text-lg font-bold text-textMain">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-borderGray">
                <p className="text-sm font-medium text-textGray uppercase tracking-wider mb-4">Follow Me</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 text-textMain hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all"><FaLinkedin /></a>
                  <a href="#" className="w-10 h-10 bg-gray-100 text-textMain hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all"><FaGithub /></a>
                  <a href="#" className="w-10 h-10 bg-gray-100 text-textMain hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all"><FaTwitter /></a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="w-full lg:w-2/3">
            <div className="glass p-10 md:p-12 rounded-3xl border-2 border-transparent hover:border-blue-100 transition-colors">
              <h3 className="text-3xl font-bold text-textMain mb-8">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-textGray mb-2">Your Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-borderGray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textGray mb-2">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 bg-gray-50 border border-borderGray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-textGray mb-2">Subject</label>
                  <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-borderGray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textGray mb-2">Message</label>
                  <textarea rows="5" className="w-full px-5 py-4 bg-gray-50 border border-borderGray rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="button" className="px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all w-full md:w-auto">
                  Send Message
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
