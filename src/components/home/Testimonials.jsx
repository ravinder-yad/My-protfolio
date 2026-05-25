import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Product Manager",
      text: "Ravindra is an exceptional frontend developer. His attention to detail and understanding of premium UI design really set him apart. The project was delivered flawlessly.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sneha Gupta",
      role: "Startup Founder",
      text: "Working with Ravindra was a breeze. He not only built our web app but also improved our initial design ideas. Truly a product builder mindset!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textMain dark:text-white mb-4">Client Feedback</h2>
          <p className="text-textGray dark:text-slate-400">What people say about my work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card bg-white dark:bg-slate-900 p-8 rounded-3xl relative"
            >
              <FaQuoteLeft className="text-4xl text-blue-100 absolute top-8 right-8" />
              <p className="text-textMain dark:text-white text-lg italic mb-8 relative z-10">"{item.text}"</p>
              
              <div className="flex items-center">
                <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full mr-4 border-2 border-primary" />
                <div>
                  <h4 className="font-bold text-textMain dark:text-white">{item.name}</h4>
                  <p className="text-sm text-textGray dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
