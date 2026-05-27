import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import { portfolioData, projectsData } from '../../data/resumeData';

const Counter = ({ from, to, duration, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(from + (to - from) * percentage));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutPreview = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-800 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionTitle title="About Me" subtitle="A brief introduction to who I am" />
        
        <div className="flex flex-col lg:flex-row gap-16 mt-16 items-center">
          
          {/* Left: Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group border-[8px] border-white dark:border-slate-800 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="/images/profile.png" 
                alt="Ravinder Kumar" 
                className="w-full h-full object-cover object-top p-4 transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 z-20"
            >
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 leading-none">
                <Counter from={0} to={1} duration={2000} suffix="+" />
              </div>
              <div className="text-xs text-gray-500 dark:text-slate-400 font-bold uppercase tracking-widest leading-tight">Year of<br/>Experience</div>
            </motion.div>
          </motion.div>

          {/* Right: Bento Grid & Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Hi, I'm {personalInfo.name}.<br/>
                <span className="text-blue-600">{personalInfo.title}</span>
              </h3>
              
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden mb-6">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                <p className="text-lg text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>
            </div>

            {/* Bento Grid Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  <Counter from={0} to={projectsData.length} duration={2000} suffix="+" />
                </div>
                <div className="text-gray-900 dark:text-white font-bold text-lg">Projects Built</div>
                <div className="text-sm text-gray-500 dark:text-slate-400 font-medium mt-1">Full-stack & UI clones</div>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                  <Counter from={0} to={100} duration={2500} suffix="%" />
                </div>
                <div className="text-gray-900 dark:text-white font-bold text-lg">Responsive UI</div>
                <div className="text-sm text-gray-500 dark:text-slate-400 font-medium mt-1">Pixel perfect on any device</div>
              </div>
            </div>

            <div className="mt-4">
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30"
              >
                More About Me <FiArrowRight />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
