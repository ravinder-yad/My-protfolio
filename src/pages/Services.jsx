import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMonitor, FiCode, FiSmartphone, FiLayout, FiPenTool, FiDatabase, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
  const [activeService, setActiveService] = useState(null);

  const servicesData = [
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 relative overflow-hidden pt-32 md:pt-40 pb-24">
      
      {/* Global Page Background Effects */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: yBg }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <motion.div 
          animate={{ x: [0, 50, 0, -50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0, 40, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[100px]"
        />
      </motion.div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-4/12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 uppercase tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-slate-400 font-medium leading-relaxed max-w-md">
              I offer a range of specialized web development services to help bring ideas to life, from clean, responsive websites to complex, scalable web applications.
            </p>
            <div className="w-24 h-1 bg-blue-600 mt-8 rounded-full"></div>
          </motion.div>

          {/* Right Column: Services Grid */}
          <div className="w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
              const isActive = activeService === index;

              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveService(isActive ? null : index)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`group cursor-pointer bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border transition-all duration-500 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
                    isActive ? 'border-blue-300 shadow-[0_20px_50px_rgba(37,99,235,0.15)] bg-blue-50/10' : 'border-gray-100 dark:border-slate-800 hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-200'
                  }`}
                >
                  {/* Inner Glow on Hover / Active */}
                  <div className={`absolute -inset-[100px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 blur-2xl transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Row: Icon & Arrow */}
                    <div className="flex justify-between items-start mb-8">
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
                        <FiArrowRight className="text-3xl" />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
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

        </div>
      </div>
    </div>
  );
};

export default Services;
