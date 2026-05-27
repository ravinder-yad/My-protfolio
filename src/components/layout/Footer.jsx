import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ravinder-yad', label: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/ravindra-fullstack', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/ravinder_khoshya/', label: 'Instagram' },
    { icon: <FaEnvelope />, url: 'mailto:ravinderyadav092007@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 pt-20 pb-10 overflow-hidden z-20">
      
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-60 h-60 bg-indigo-400/5 rounded-full blur-[60px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & About Column */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center text-2xl font-black tracking-tighter group transition-transform duration-300 hover:scale-[1.03] self-start">
              <span className="text-blue-600 dark:text-blue-400 transform group-hover:-translate-x-1 transition-transform duration-300">&lt;</span>
              <span className="text-slate-900 dark:text-white mx-0.5 font-extrabold tracking-normal">RY</span>
              <span className="text-indigo-600 dark:text-indigo-400 transform group-hover:translate-x-1 transition-transform duration-300">/&gt;</span>
            </Link>
            
            <p className="text-gray-500 dark:text-slate-400 font-medium text-sm leading-relaxed max-w-xs">
              Designing and building responsive, premium web experiences with scalable MERN Stack technologies and clean code practices.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 dark:border-slate-800 text-gray-500 dark:text-slate-400 hover:text-blue-600 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:bg-blue-50/20 dark:hover:bg-blue-900/10 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 dark:text-white border-l-4 border-blue-600 pl-3">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm transition-colors duration-200 flex items-center group"
                  >
                    <span className="h-1 w-0 bg-blue-600 rounded-full mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-3">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-500 dark:text-slate-400">
                <FiMapPin className="text-indigo-600 dark:text-indigo-400 mt-1 shrink-0 text-base" />
                <span className="font-semibold">Mundawar, Alwar, Rajasthan, India</span>
              </li>
              <li>
                <a 
                  href="mailto:ravinderyadav092007@gmail.com" 
                  className="flex items-center space-x-3 text-sm text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200"
                >
                  <FaEnvelope className="text-indigo-600 dark:text-indigo-400 shrink-0 text-base" />
                  <span>ravinderyadav092007@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918949477114" 
                  className="flex items-center space-x-3 text-sm text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200"
                >
                  <FiPhone className="text-indigo-600 dark:text-indigo-400 shrink-0 text-base" />
                  <span>+91 89494 77114</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Availability Column */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 dark:text-white border-l-4 border-purple-600 pl-3">
              Work Status
            </h3>
            <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Available For Hire</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400 font-medium leading-relaxed mb-4">
                Open for full-time junior frontend/MERN stack roles, internships, and freelance projects. Let's build something amazing together!
              </p>
              <Link 
                to="/contact"
                className="inline-flex w-full justify-center py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-blue-500/10 hover:shadow-lg"
              >
                Hire Me Now
              </Link>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 dark:text-slate-500 text-xs font-medium text-center sm:text-left">
            &copy; {new Date().getFullYear()} Ravinder Kumar. All rights reserved.
          </p>

          <p className="text-gray-400 dark:text-slate-500 text-xs font-semibold flex items-center justify-center gap-1.5">
            Built with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>

          {/* Scroll To Top */}
          <button 
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-850 hover:bg-blue-600 hover:text-white text-gray-600 dark:text-slate-400 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-600"
          >
            <FiArrowUp className="text-lg" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
