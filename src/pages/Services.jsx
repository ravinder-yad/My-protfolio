import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMonitor, FiServer, FiCode, FiSmartphone, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  const servicesData = [
    {
      title: "Frontend Development",
      description: "I build modern, responsive, and user-friendly interfaces using HTML, CSS, JavaScript, and React with a strong focus on UX.",
      icon: <FiMonitor />
    },
    {
      title: "Backend Development",
      description: "I develop secure and scalable backend systems using Node.js, Express, and MongoDB, creating reliable APIs.",
      icon: <FiServer />
    },
    {
      title: "Full Stack Web Development",
      description: "I build complete web applications by managing both frontend and backend development.",
      icon: <FiCode />
    },
    {
      title: "Responsive Web Design",
      description: "I design and optimize websites to work seamlessly across mobile, tablet, and desktop devices.",
      icon: <FiSmartphone />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0 justify-center">
      
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-4/12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-textMain leading-tight mb-8">
              My Services <span className="text-primary">.</span>
            </h1>
            <p className="text-lg md:text-xl text-textGray leading-relaxed max-w-md">
              I offer a range of web development services to help bring ideas to life, from clean and responsive websites to complete, scalable web applications.
            </p>
          </motion.div>

          {/* Right Column: Services Grid */}
          <div className="w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-[100px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Row: Icon & Arrow */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100/50">
                      {service.icon}
                    </div>
                    <motion.div 
                      className="text-textGray opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all"
                      whileHover={{ x: 5 }}
                    >
                      <FiArrowRight className="text-2xl" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-textGray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
