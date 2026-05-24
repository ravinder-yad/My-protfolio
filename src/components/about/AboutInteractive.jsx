import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';

const AboutInteractive = () => {
  const [activeTab, setActiveTab] = useState('Skills');
  const tabs = ['Skills', 'Experience', 'Credentials'];

  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          
          {/* Left Column: Fixed Text & Stats */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-textMain leading-tight mb-8"
            >
              Turning ideas into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative inline-block">
                real-world digital solutions.
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-1 left-0 w-full h-1.5 bg-blue-500/30 origin-left rounded-full"
                ></motion.div>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-textGray leading-relaxed"
            >
              <p>
                I'm <strong className="text-textMain border-b-2 border-primary pb-0.5">Ravindra Yadav</strong>, a passionate Full Stack Web Developer who enjoys building clean, scalable, and user-focused web applications that solve real-world problems.
              </p>
              <p>
                I focus on bridging intuitive frontend experiences with robust backend systems to deliver reliable, high-performing, and user-friendly digital products.
              </p>
            </motion.div>

            {/* Stats Bento Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 w-48 bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(37,99,235,0.08)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)] transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold tracking-wider uppercase border border-gray-200 rounded-full text-textGray group-hover:border-primary group-hover:text-primary transition-colors cursor-pointer">
                View
              </div>
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                10+
              </h2>
              <p className="text-xs font-bold text-textMain uppercase tracking-widest leading-relaxed">
                Projects<br/>Completed
              </p>
            </motion.div>
          </div>

          {/* Right Column: Interactive Tabbed Panel */}
          <div className="w-full lg:w-7/12 flex flex-col">
            
            {/* Tabs Navigation */}
            <div className="flex flex-wrap items-center gap-2 mb-8 bg-white/40 backdrop-blur-md p-2 rounded-2xl border border-gray-100 shadow-sm self-start">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 relative ${activeTab === tab ? 'text-white shadow-md' : 'text-textGray hover:text-textMain'}`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            {/* Scrollable Content Pane */}
            <div className="flex-1 bg-white/70 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden relative min-h-[500px]">
              
              {/* Inner scrollable area */}
              <div className="absolute inset-0 overflow-y-auto p-8 md:p-12 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
                <AnimatePresence mode="wait">
                  
                  {/* SKILLS TAB */}
                  {activeTab === 'Skills' && (
                    <motion.div
                      key="Skills"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-12"
                    >
                      <div>
                        <h2 className="text-3xl font-extrabold text-textMain mb-3">Skills & Technologies</h2>
                        <p className="text-textGray italic">Technologies and tools I use to build modern, scalable, and reliable web applications.</p>
                      </div>

                      {/* Frontend */}
                      <div className="relative pl-6 border-l-4 border-blue-500">
                        <h3 className="text-xl font-bold text-textMain mb-2">Frontend Development</h3>
                        <p className="text-textGray mb-6">I create clean, responsive, and interactive user interfaces with strong focus on UX.</p>
                        <div className="flex flex-wrap gap-4">
                          <IconTag icon={<FaHtml5 />} name="HTML5" />
                          <IconTag icon={<FaCss3Alt />} name="CSS3" />
                          <IconTag icon={<SiJavascript />} name="JS" />
                          <IconTag icon={<FaReact />} name="React" />
                          <IconTag icon={<SiTailwindcss />} name="Tailwind" />
                        </div>
                      </div>

                      {/* Backend */}
                      <div className="relative pl-6 border-l-4 border-indigo-500">
                        <h3 className="text-xl font-bold text-textMain mb-2">Backend & Database</h3>
                        <p className="text-textGray mb-6">Building robust APIs and managing data securely.</p>
                        <div className="flex flex-wrap gap-4">
                          <IconTag icon={<FaNodeJs />} name="Node.js" />
                          <IconTag icon={<SiExpress />} name="Express" />
                          <IconTag icon={<SiMongodb />} name="MongoDB" />
                          <IconTag icon={<FaDatabase />} name="Database" />
                          <IconTag icon={<FaGithub />} name="GitHub" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* EXPERIENCE TAB */}
                  {activeTab === 'Experience' && (
                    <motion.div
                      key="Experience"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h2 className="text-3xl font-extrabold text-textMain mb-3">Experience Journey</h2>
                        <p className="text-textGray italic mb-10">The timeline of my growth as a developer.</p>
                      </div>

                      <div className="space-y-10 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-200 before:to-transparent">
                        
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                          <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <div className="font-bold text-primary mb-1">2026</div>
                            <h4 className="text-lg font-bold text-textMain mb-2">MERN Stack Learning</h4>
                            <p className="text-sm text-textGray leading-relaxed">Deep diving into advanced backend concepts, database scaling, and full-stack integration.</p>
                          </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                          <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <div className="font-bold text-primary mb-1">2025</div>
                            <h4 className="text-lg font-bold text-textMain mb-2">Building Real Projects</h4>
                            <p className="text-sm text-textGray leading-relaxed">Transitioned to building complex applications focusing on state management and APIs.</p>
                          </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-gray-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                          <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <div className="font-bold text-primary mb-1">2024</div>
                            <h4 className="text-lg font-bold text-textMain mb-2">Started Frontend</h4>
                            <p className="text-sm text-textGray leading-relaxed">Mastered HTML, CSS, JS and fell in love with UI design and Tailwind.</p>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}

                  {/* CREDENTIALS TAB */}
                  {activeTab === 'Credentials' && (
                    <motion.div
                      key="Credentials"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h2 className="text-3xl font-extrabold text-textMain mb-3">Education & Training</h2>
                        <p className="text-textGray italic mb-10">Academic background and continuous learning.</p>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                          <span className="text-xs font-bold bg-blue-50 text-primary px-3 py-1 rounded-full mb-3 inline-block">2024 – 2027</span>
                          <h4 className="text-xl font-bold text-textMain mb-2">Bachelor of Computer Applications (BCA)</h4>
                          <p className="text-textGray text-sm leading-relaxed">Focused on CS fundamentals and application development.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                          <span className="text-xs font-bold bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full mb-3 inline-block">2026</span>
                          <h4 className="text-xl font-bold text-textMain mb-2">Full Stack Development Training</h4>
                          <p className="text-textGray text-sm leading-relaxed">Hands-on MERN stack training.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for small icon tags
const IconTag = ({ icon, name }) => (
  <div className="flex items-center space-x-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-textMain font-bold shadow-sm hover:border-blue-200 hover:text-primary hover:-translate-y-1 transition-all">
    <span className="text-xl">{icon}</span>
    <span className="text-sm">{name}</span>
  </div>
);

export default AboutInteractive;
