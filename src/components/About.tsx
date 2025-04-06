import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Target, Zap, Wrench } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: Globe,
      title: 'Pan-India Presence',
      description: 'Operating across major cities with dedicated regional teams'
    },
    {
      icon: Target,
      title: 'Precision-Driven',
      description: 'Maintaining accuracy standards within micron-level tolerances'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times with our optimized workflow'
    },
    {
      icon: Wrench,
      title: 'Industry-Grade Tools',
      description: 'Using latest technology and certified equipment'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto font-inter"
          >
            GPS3D is a multi-domain tech company based in India, offering a portfolio of high-precision solutions including DGPS surveys, 3D scanning, CFD & FEA analysis, vibration studies, and CMM inspection. We blend field expertise with simulation to power industries with accurate insights and faster outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-accent/50 transition-colors group"
            >
              <div className="mb-4 text-accent">
                <feature.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-poppins">{feature.title}</h3>
              <p className="text-gray-400 font-inter">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
}