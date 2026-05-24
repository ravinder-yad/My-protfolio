import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { FiMonitor, FiCode, FiSmartphone, FiLayout, FiPenTool } from 'react-icons/fi';

const HomeServices = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, performant, and interactive user interfaces using modern frameworks like React.",
      icon: <FiMonitor className="text-4xl" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web applications with robust backend systems using Node.js and MongoDB.",
      icon: <FiCode className="text-4xl" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Responsive Design",
      description: "Pixel-perfect designs that look and work flawlessly across all device sizes.",
      icon: <FiSmartphone className="text-4xl" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Landing Pages",
      description: "High-converting, lightning-fast landing pages tailored for your marketing campaigns.",
      icon: <FiLayout className="text-4xl" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "UI/UX Enhancements",
      description: "Upgrading existing interfaces with premium animations and modern design principles.",
      icon: <FiPenTool className="text-4xl" />,
      color: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle title="What I Do" subtitle="Services designed to elevate your digital presence" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-textMain mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-textGray leading-relaxed">{service.description}</p>
              
              {/* Bottom Glow Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
