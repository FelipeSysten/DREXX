import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white"
    >
      {/* Background overlay with pattern or texture */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            DREX: O Futuro Financeiro do Brasil
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-light/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            A moeda digital oficial do Banco Central do Brasil. Segura, ágil e inovadora - conectando o Brasil ao futuro das finanças digitais.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
            >
              Conheça o DREX
            </Link>
            <Link
              to="innovation"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-outline"
            >
              Ver Inovações
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};