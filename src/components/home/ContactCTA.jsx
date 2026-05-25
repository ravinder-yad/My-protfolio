import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Background circles for premium feel */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white dark:bg-slate-900 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white dark:bg-slate-900 opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Let's build something beautiful together.
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10">
              I'm currently available for freelance work and internship opportunities.
              If you have a project that needs some creative touch, I'd love to hear about it.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-10 py-4 bg-white dark:bg-slate-900 text-primary font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
