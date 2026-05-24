import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SectionTitle from '../common/SectionTitle';

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
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="About Me" subtitle="A brief introduction to who I am" />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-16 items-center">
          
          {/* Left: Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              {/* Fallback pattern if no image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center">
                 <div className="text-center text-blue-300 font-bold text-2xl px-6">
                   [ Place Your Image Here ]<br/>
                   <span className="text-sm">public/about-image.jpg</span>
                 </div>
              </div>
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20"
            >
              <div className="text-4xl font-extrabold text-primary mb-1">
                <Counter from={0} to={2} duration={2000} suffix="+" />
              </div>
              <div className="text-sm text-textGray font-bold uppercase tracking-wider">Years<br/>Learning</div>
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
              <h3 className="text-3xl font-bold text-textMain mb-4">I build experiences, not just websites.</h3>
              <p className="text-lg text-textGray leading-relaxed mb-6">
                I am a passionate Full Stack Developer with a strong focus on creating beautiful, responsive, and highly interactive user interfaces. I believe that a great website should feel like a living product rather than a static document.
              </p>
              <p className="text-lg text-textGray leading-relaxed">
                My journey in tech involves continuous learning and applying modern technologies like React and Tailwind to craft seamless digital experiences.
              </p>
            </div>

            {/* Bento Grid Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  <Counter from={0} to={10} duration={2000} suffix="+" />
                </div>
                <div className="text-textMain font-bold">Projects Built</div>
                <div className="text-sm text-textGray mt-1">From landing pages to full-stack apps</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                  <Counter from={0} to={100} duration={2500} suffix="%" />
                </div>
                <div className="text-textMain font-bold">Responsive UI</div>
                <div className="text-sm text-textGray mt-1">Pixel perfect on every device</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
