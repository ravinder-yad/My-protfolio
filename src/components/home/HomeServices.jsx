import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMonitor, FiCode, FiSmartphone, FiLayout, FiPenTool, FiDatabase, FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';

const HomeServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, performant, and interactive user interfaces using modern frameworks like React.",
      icon: <FiMonitor />
    },
    {
      title: "Backend Development",
      description: "End-to-end web applications with robust backend systems using Node.js and MongoDB.",
      icon: <FiCode />
    },
    {
      title: "Responsive Design",
      description: "Pixel-perfect designs that look and work flawlessly across all device sizes.",
      icon: <FiSmartphone />
    },
    {
      title: "API Integration",
      description: "Designing and integrating secure RESTful APIs to connect frontend with powerful server logic.",
      icon: <FiDatabase />
    },
    {
      title: "Landing Pages",
      description: "High-converting, lightning-fast landing pages tailored for your marketing campaigns.",
      icon: <FiLayout />
    },
    {
      title: "UI/UX Enhancements",
      description: "Upgrading existing interfaces with premium animations and modern design principles.",
      icon: <FiPenTool />
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <SectionTitle title="What I Do" subtitle="Services designed to elevate your digital presence" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isActive = activeService === index;
            
            return (
              <motion.div
                key={index}
                onClick={() => setActiveService(isActive ? null : index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`cursor-pointer group relative bg-white dark:bg-slate-900 rounded-3xl p-8 border transition-all duration-500 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
                  isActive ? 'border-blue-300 shadow-[0_20px_50px_rgba(37,99,235,0.15)] bg-blue-50/10' : 'border-gray-100 dark:border-slate-800 hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-200'
                }`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-[100px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 blur-2xl transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    {/* Rotating Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-700 ease-in-out shadow-sm border border-blue-100/50 ${
                      isActive 
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rotate-[360deg] scale-110 shadow-blue-500/30' 
                        : 'bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-100'
                    }`}>
                      {service.icon}
                    </div>

                    {/* Arrow Right */}
                    <motion.div 
                      className={`transition-all duration-500 ${isActive ? 'text-blue-600 translate-x-2' : 'text-gray-300 group-hover:text-blue-500 opacity-50 group-hover:opacity-100'}`}
                    >
                      <FiArrowRight className="text-2xl" />
                    </motion.div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-900 dark:text-white group-hover:text-blue-600'}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View Detailed Services Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30"
          >
            View Detailed Services <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeServices;
