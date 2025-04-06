import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cases = [
    {
      title: 'Aerospace Component Analysis',
      category: 'CFD Simulation',
      image: 'https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80&w=800',
      outcome: 'Reduced development time by 40%'
    },
    {
      title: 'Bridge Structure Assessment',
      category: '3D Scanning',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800',
      outcome: 'Identified critical stress points'
    },
    {
      title: 'Manufacturing Plant Layout',
      category: 'DGPS Survey',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800',
      outcome: 'Optimized space utilization by 25%'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-secondary/95 relative">
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
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins"
          >
            How We've Helped
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 font-poppins">{study.title}</h3>
                <p className="text-gray-400 mb-4 font-inter">{study.outcome}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-accent group-hover:text-white transition-colors"
                >
                  Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
}