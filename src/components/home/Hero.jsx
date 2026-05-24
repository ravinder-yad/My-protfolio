import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb } from 'react-icons/si';
import { homeData } from '../../data/homeData';

const TypewriterText = ({ texts }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause at end
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-2xl md:text-3xl font-mono text-textGray">
      {currentText}
      <span className="animate-ping text-primary font-bold">|</span>
    </span>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { hero, buttons, socialLinks } = homeData;

  const socialIconsList = [
    { icon: <FaGithub />, url: socialLinks.github },
    { icon: <FaLinkedinIn />, url: socialLinks.linkedin },
    { icon: <FaInstagram />, url: socialLinks.instagram },
    { icon: <FaEnvelope />, url: socialLinks.email },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-white">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: yBg }}
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Gradient Blobs */}
        <motion.div 
          animate={{ 
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 0.2, type: 'spring' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 0.2, type: 'spring' }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[100px]"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left mt-12 lg:mt-0 flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: -20, letterSpacing: '0em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-primary font-bold mb-4 uppercase"
            >
              {hero.greeting}
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-textMain tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 filter drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                {hero.name.split(' ')[0]}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                {hero.name.split(' ')[1]}
              </span>
            </h1>

            <div className="h-12 mb-6">
              <TypewriterText texts={hero.roles} />
            </div>

            <p className="text-lg md:text-xl text-textGray mb-10 max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-10 w-full sm:w-auto">
              <Link to={buttons.primary.route}>
                <motion.button 
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.8)] transition-all"
                >
                  {buttons.primary.text}
                </motion.button>
              </Link>
              
              <Link to={buttons.secondary.route}>
                <motion.button 
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-textMain font-bold rounded-full hover:border-primary hover:text-primary shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)] transition-all"
                >
                  {buttons.secondary.text}
                </motion.button>
              </Link>
            </div>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center space-x-6"
            >
              {socialIconsList.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-2xl text-textGray hover:text-primary transition-colors filter hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Hologram (Mobile: Shows Above Text due to flex-col-reverse and manual re-ordering, wait flex-col-reverse puts right column on top!) */}
          <div className="flex-1 relative flex justify-center items-center h-[350px] md:h-[500px] w-full">
            {/* The Glow Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-blue-500/20 rounded-full border-dashed"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] border border-indigo-400/10 rounded-full border-dotted"
            ></motion.div>

            {/* Profile Image Container */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 md:w-80 md:h-80 rounded-full bg-white shadow-[0_20px_50px_rgba(37,99,235,0.1)] border-4 border-white overflow-hidden flex justify-center items-end"
            >
              {/* Fallback avatar if no image */}
              <div className="w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center">
                <span className="text-4xl text-blue-300 font-bold">RY</span>
              </div>
            </motion.div>

            {/* Hologram Floating Icons */}
            <FloatingIcon icon={<FaReact className="text-[#61DAFB]" />} angle={0} radius={160} desktopRadius={180} duration={8} />
            <FloatingIcon icon={<SiJavascript className="text-[#F7DF1E]" />} angle={60} radius={180} desktopRadius={210} duration={12} reverse />
            <FloatingIcon icon={<SiTailwindcss className="text-[#06B6D4]" />} angle={120} radius={170} desktopRadius={190} duration={10} />
            <FloatingIcon icon={<FaNodeJs className="text-[#339933]" />} angle={180} radius={190} desktopRadius={220} duration={14} reverse />
            <FloatingIcon icon={<SiMongodb className="text-[#47A248]" />} angle={240} radius={150} desktopRadius={170} duration={9} />
            <FloatingIcon icon={<FaGithub className="text-[#181717]" />} angle={300} radius={180} desktopRadius={200} duration={11} reverse />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-textGray mb-2 uppercase">SCROLL ↓</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 md:h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>

    </section>
  );
};

// Helper component for holographic orbiting icons
const FloatingIcon = ({ icon, angle, radius, desktopRadius, duration, reverse = false }) => {
  const [currentRadius, setCurrentRadius] = useState(radius);

  useEffect(() => {
    const handleResize = () => {
      setCurrentRadius(window.innerWidth >= 768 ? desktopRadius : radius);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radius, desktopRadius]);

  return (
    <motion.div
      className="absolute w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white flex items-center justify-center text-xl md:text-2xl z-20"
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration: duration * 2,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        transformOrigin: `${-currentRadius * Math.cos((angle * Math.PI) / 180)}px ${-currentRadius * Math.sin((angle * Math.PI) / 180)}px`,
        left: `calc(50% + ${currentRadius * Math.cos((angle * Math.PI) / 180)}px - 20px)`,
        top: `calc(50% + ${currentRadius * Math.sin((angle * Math.PI) / 180)}px - 20px)`,
      }}
    >
      <motion.div
        animate={{ rotate: reverse ? 360 : -360 }} // Counter-rotate so icon stays upright
        transition={{ duration: duration * 2, repeat: Infinity, ease: "linear" }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

export default Hero;
