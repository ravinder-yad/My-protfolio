import { motion } from 'framer-motion';

const Certificates = () => {
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
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[4/3] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
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
    </div>
  );
};

export default Certificates;
