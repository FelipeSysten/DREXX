import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Sobre o DREX</h2>
          <p>A moeda digital oficial do Banco Central do Brasil, desenvolvida para modernizar o sistema financeiro nacional.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-6 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              O DREX é a Moeda Digital do Banco Central do Brasil (CBDC - Central Bank Digital Currency), 
              representando a evolução do Real para a era digital. Diferente das criptomoedas privadas, 
              o DREX é emitido e garantido pelo Estado brasileiro, trazendo a segurança da moeda oficial 
              com os benefícios da tecnologia blockchain.
            </p>
            <p>
              Com o DREX, o Brasil se posiciona na vanguarda da inovação financeira global, 
              criando uma infraestrutura que permitirá transações mais rápidas, seguras e com menor 
              custo para cidadãos e empresas, além de expandir as possibilidades de serviços 
              financeiros programáveis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};