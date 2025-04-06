import { motion } from 'framer-motion';
import { Activity, Cpu, Globe2, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-secondary overflow-hidden pt-16">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`h-${i}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="absolute w-full h-px bg-primary"
              style={{ top: `${i * 5}%` }}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`v-${i}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="absolute h-full w-px bg-primary"
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`float-${i}`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut"
            }}
            className="absolute w-32 h-32 bg-accent/10 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-20 sm:pt-32">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-inter mb-4">
              Precision Engineering Solutions
            </span>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-tight">
              Engineering Innovation
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {" "}with Precision
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-inter text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Delivering cutting-edge engineering solutions through advanced simulation,
            precise surveying, and comprehensive structural analysis.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,83,179,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-white font-inter px-8 py-3 rounded-lg text-lg relative overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <motion.div
                className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ mixBlendMode: "overlay" }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white font-inter px-8 py-3 rounded-lg text-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Request a Demo
            </motion.button>
          </motion.div>

          {/* Service Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20"
          >
            {[
              {
                icon: Cpu,
                title: "Engineering Simulation",
                desc: "CFD, FEA, and Advanced Analysis",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Globe2,
                title: "Surveying Solutions",
                desc: "DGPS, GPR, and 3D Scanning",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Activity,
                title: "Structural Analysis",
                desc: "Deformation and Flow Studies",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 text-accent mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-poppins font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-400 font-inter">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={24} />
      </motion.div>

      {/* Dynamic Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
      />
    </div>
  );
}