import { motion, useScroll, useTransform } from 'framer-motion';
import AboutInteractive from '../components/about/AboutInteractive';

const About = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      
      {/* Global Page Background Effects */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: yBg }}
      >
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Moving Blur Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0, -50, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0, 40, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[100px]"
        />
      </motion.div>

      <div className="relative z-10">
        {/* New Single Interactive Layout */}
        <AboutInteractive />
      </div>

    </div>
  );
};

export default About;
