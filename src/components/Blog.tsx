import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const posts = [
    {
      title: 'Advanced CFD Analysis Techniques',
      excerpt: 'Exploring modern computational fluid dynamics methods for aerospace applications.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      date: 'Mar 15, 2024',
      author: 'Dr. Sarah Chen'
    },
    {
      title: 'The Future of 3D Scanning',
      excerpt: 'How LiDAR technology is revolutionizing infrastructure inspection.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80&w=800',
      date: 'Mar 10, 2024',
      author: 'James Wilson'
    },
    {
      title: 'Structural Health Monitoring',
      excerpt: 'Real-time monitoring systems for critical infrastructure maintenance.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      date: 'Mar 5, 2024',
      author: 'Dr. Michael Park'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary relative">
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
            Latest Updates
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins"
          >
            Industry Insights
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-poppins">{post.title}</h3>
                <p className="text-gray-400 mb-4 font-inter">{post.excerpt}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-accent group-hover:text-white transition-colors"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
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