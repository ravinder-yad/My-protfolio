import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const certificatesData = [
    {
      id: 1,
      title: "Google Analytics Certification",
      organization: "Google",
      image: "/certificates/media__1779635393781.jpg",
    },
    {
      id: 2,
      title: "Manage GA4 Data & Reports",
      organization: "Google",
      image: "/certificates/media__1779635388106.jpg",
    },
    {
      id: 3,
      title: "Software Engineer Certification",
      organization: "HackerRank",
      image: "/certificates/media__1779635419081.jpg",
    },
    {
      id: 4,
      title: "Git/Github Completion",
      organization: "CodeChef",
      image: "/certificates/media__1779635424391.jpg",
    },
    {
      id: 5,
      title: "500 Difficulty Rating",
      organization: "CodeChef",
      image: "/certificates/media__1779635428157.jpg",
    },
    {
      id: 6,
      title: "Innovex Storm Hackathon",
      organization: "SRMIST & Unstop",
      image: "/certificates/media__1779635465249.jpg",
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Certificates</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Professional certifications and achievements showcasing my continuous learning and technical expertise.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificatesData.map((cert, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={cert.id}
              onClick={() => setSelectedImage(cert.image)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[4/3] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg tracking-widest bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Click to View
                  </span>
                </div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 relative z-0 shadow-sm rounded-md" 
                />
              </div>
              <div className="p-6 text-center border-t border-gray-50 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
                  {cert.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal via Portal */}
      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            >
              {/* Close Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/20 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors border border-white/30 z-[10000] shadow-lg"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Image Container */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-6xl w-full h-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Certificate Full View" 
                  className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Certificates;
