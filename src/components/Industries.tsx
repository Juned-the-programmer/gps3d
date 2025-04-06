import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plane, Car, Factory, Building, Satellite, HardHat } from 'lucide-react';
import Survey from '../assests/Survey.jpeg';

export default function Industries() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const industries = [
    {
      icon: Building,
      title: 'Infrastructure & Construction',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Plane,
      title: 'Aerospace & Defense',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Car,
      title: 'Automotive',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Satellite,
      title: 'Survey & Land Records',
      image: Survey
    },
    {
      icon: HardHat,
      title: 'Civil & Structural Audits',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-secondary relative overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-inter mb-4"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins"
          >
            Empowering Multiple Sectors
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <industry.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold text-white font-poppins">{industry.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
}