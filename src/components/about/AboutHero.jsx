import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl flex flex-col items-center"
          >
            <motion.span 
              initial={{ opacity: 0, y: -10, letterSpacing: '0em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary font-bold uppercase mb-4 block"
            >
              ABOUT ME
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-textMain mb-8 leading-tight">
              Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 filter drop-shadow-[0_0_10px_rgba(37,99,235,0.2)]">Full Stack</span> Developer <br className="hidden md:block" />
              Building Modern Web Experiences ⚡
            </h1>
            
            <p className="text-lg md:text-xl text-textGray leading-relaxed mb-6">
              My journey into tech started with a simple curiosity, which quickly evolved into a deep passion for coding and UI design. I don't just write code—I craft living, breathing digital products.
            </p>
            <p className="text-lg md:text-xl text-textGray leading-relaxed">
              I specialize in bridging the gap between exceptional design and flawless functionality, treating every line of code like poetry.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
