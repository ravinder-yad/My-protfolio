import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const HomeCertificates = () => {
  const certificates = [
    {
      title: "Full Stack Development",
      issuer: "Udemy",
      date: "Aug 2023",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "React Native Mastery",
      issuer: "Coursera",
      date: "Dec 2023",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Certificates" subtitle="My achievements and continuous learning" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-blue-300 font-bold text-sm tracking-wider uppercase mb-2 block">{cert.issuer} • {cert.date}</span>
                  <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/certificates" className="inline-block text-primary font-bold hover:underline underline-offset-4 transition-all">
            View All Certificates →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCertificates;
