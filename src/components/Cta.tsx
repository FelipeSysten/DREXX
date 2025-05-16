import React from 'react';
import { motion } from 'framer-motion';

export const Cta: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prepare-se para o Futuro Financeiro</h2>
          <p className="text-xl mb-8 opacity-90">Fique por dentro das novidades e atualizações sobre o DREX.</p>
          <motion.a
            href="#"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Saiba Mais
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};