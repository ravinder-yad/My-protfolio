import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ravinder-yad' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/ravindra-fullstack' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/ravinder_khoshya/' },
    { icon: <FaEnvelope />, url: 'mailto:ravinderyadav092007@gmail.com' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'h-[70px] md:h-[75px] xl:h-[80px] bg-white dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/20 shadow-sm' 
            : 'h-[80px] md:h-[85px] xl:h-[90px] bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-10 h-full flex justify-between items-center relative">
          
          {/* Logo */}
          <Link to="/" className="group relative flex items-center h-full">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-textMain dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 transform group-hover:rotate-3">
              &lt;RY /&gt;
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-6 flex-1 justify-center">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[15px] font-medium tracking-wide transition-all duration-300 group overflow-hidden ${
                    isActive ? 'text-primary' : 'text-textMain dark:text-white hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <motion.span 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: i * 0.1 }}
                    >
                      {link.name}
                    </motion.span>
                    
                    {/* Hover Underline */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100 shadow-[0_0_8px_rgba(37,99,235,0.6)]' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Section: Socials, Theme, Button */}
          <div className="hidden xl:flex items-center space-x-5">
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-slate-700 text-textGray dark:text-slate-400 hover:text-primary hover:border-primary hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-slate-700 text-textMain dark:text-white hover:bg-gray-50 dark:bg-slate-800 transition-all duration-500 hover:rotate-180"
            >
              {theme === 'light' ? <FiMoon className="text-lg" /> : <FiSun className="text-lg text-yellow-500" />}
            </button>

            {/* Hire Me Button */}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[15px] font-bold rounded-full shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-[3px] hover:scale-[1.03]"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(true)} 
              className="text-3xl text-textMain dark:text-white focus:outline-none hover:text-primary transition-colors"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-white dark:bg-slate-900/95 backdrop-blur-2xl flex flex-col justify-between"
          >
            {/* Mobile Header */}
            <div className="h-[70px] flex items-center justify-between px-6 border-b border-gray-100 dark:border-slate-800">
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                &lt;RY /&gt;
              </span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 text-textMain dark:text-white text-2xl hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <FiX />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 overflow-y-auto py-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl sm:text-4xl font-extrabold uppercase tracking-widest transition-colors ${
                        isActive ? 'text-primary' : 'text-textMain dark:text-white hover:text-primary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer (Socials & CTA) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-8 border-t border-gray-100 dark:border-slate-800 flex flex-col items-center space-y-6 bg-gray-50 dark:bg-slate-800"
            >
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-2xl text-textGray dark:text-slate-400 hover:text-primary hover:scale-110 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <a 
                href="/resume/Ravinder_Kumar_Resume.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center py-4 bg-textMain text-white font-bold tracking-widest uppercase rounded-2xl shadow-xl hover:bg-primary transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
