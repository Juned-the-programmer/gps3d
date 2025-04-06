import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wind, Box, Activity, Cpu, Globe2, Ruler, Repeat2, Building2, LucideIcon } from 'lucide-react';
import DroneSvg from '../assests/Drone-svg.svg';
import React from 'react';

interface Service {
  icon?: LucideIcon;
  customIcon?: string;
  title: string;
  description: string;
  gradient: string;
}

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services: Service[] = [
    {
      icon: Wind,
      title: 'CFD Simulation',
      description: 'Analyze airflow, pressure, and temperature to improve product design',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Box,
      title: 'FEA Analysis',
      description: 'Structural, stress and fatigue modeling for real-world conditions',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Activity,
      title: 'Vibration Analysis',
      description: 'UAV flight vibration profiling and in-flight diagnostics',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe2,
      title: 'DGPS Surveys',
      description: 'High-accuracy geolocation surveys using RTK and PPK GPS',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Cpu,
      title: '3D Laser Scanning',
      description: 'Object and terrain digitization using LiDAR-based technology',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Ruler,
      title: 'CMM Inspection',
      description: 'Dimensional accuracy checks for manufactured parts',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      customIcon: DroneSvg,
      title: 'Drone Mapping',
      description: 'Aerial photogrammetry, elevation models, and contour mapping',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Repeat2,
      title: 'Reverse Engineering',
      description: 'Extract CAD-ready models from physical objects',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Building2,
      title: 'Structural Audits',
      description: 'Scanning-based stability and integrity assessments',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/95 relative">
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
            Our Services
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins"
          >
            Comprehensive Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 overflow-hidden hover:border-accent/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                {service.customIcon ? (
                  <img src={service.customIcon} alt={service.title} className="w-8 h-8 text-accent mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                ) : service.icon ? (
                  <div className="w-12 h-12 text-accent mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(service.icon)}
                  </div>
                ) : null}
                <h3 className="text-xl font-semibold text-white mb-3 font-poppins">{service.title}</h3>
                <p className="text-gray-400 font-inter">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
}