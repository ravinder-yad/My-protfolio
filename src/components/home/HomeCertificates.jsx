import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';

const HomeCertificates = () => {
  // Using the real certificate images from the public folder
  const certificates = [
    {
      id: 1,
      title: "NodeJs + ExpressJs + MongoDB",
      issuer: "KnowledgeGate",
      date: "2026",
      image: "/certificates/media__1779881150953.jpg"
    },
    {
      id: 2,
      title: "React and Redux",
      issuer: "KnowledgeGate",
      date: "2026",
      image: "/certificates/media__1779881150866.jpg"
    },
    {
      id: 3,
      title: "Complete JAVASCRIPT",
      issuer: "KnowledgeGate",
      date: "2026",
      image: "/certificates/media__1779881150883.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Header with Top-Right Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <SectionTitle 
            title="Certifications" 
            subtitle="My professional achievements and verified skills" 
          />
          
          <Link 
            to="/certificates"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-bold border-2 border-gray-100 dark:border-slate-800 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20 whitespace-nowrap"
          >
            View All Certificates <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-slate-800 hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 dark:bg-slate-800 relative border border-gray-100 dark:border-slate-800 mb-6">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="px-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-600 font-bold text-xs tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
                    {cert.issuer}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HomeCertificates;
