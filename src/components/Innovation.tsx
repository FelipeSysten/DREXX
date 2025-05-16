import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface InnovationPointProps {
  title: string;
  description: string;
  index: number;
}

const InnovationPoint: React.FC<InnovationPointProps> = ({ title, description, index }) => {
  return (
    <motion.div
      className="flex items-start mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
    >
      <CheckCircle className="text-secondary flex-shrink-0 mt-1 mr-4 w-6 h-6" />
      <div>
        <h4 className="text-lg font-semibold mb-2 text-primary-dark">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export const Innovation: React.FC = () => {
  const innovations = [
    {
      title: 'Pagamentos Programáveis',
      description: 'Automação de pagamentos baseados em condições pré-definidas, como desembolsos periódicos ou condicionados a entregas.'
    },
    {
      title: 'Tokenização de Ativos',
      description: 'Representação digital de ativos físicos ou financeiros, facilitando sua negociação e transferência com segurança e eficiência.'
    },
    {
      title: 'Interoperabilidade Global',
      description: 'Potencial para integração com outras CBDCs internacionais, facilitando transações transfronteiriças e comércio internacional.'
    }
  ];

  return (
    <section id="innovation" className="section bg-white">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Inovação Financeira</h2>
          <p>O DREX traz um novo paradigma para o sistema financeiro brasileiro.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.pexels.com/photos/7851943/pexels-photo-7851943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Inovação DREX" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <div className="lg:w-1/2">
            <motion.h3
              className="text-2xl font-bold mb-6 text-primary-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transformando o Cenário Financeiro
            </motion.h3>
            
            <motion.p
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              O DREX representa uma evolução significativa na infraestrutura financeira do Brasil, 
              combinando a confiabilidade da moeda oficial com os benefícios da tecnologia blockchain.
            </motion.p>

            <div className="space-y-4">
              {innovations.map((item, index) => (
                <InnovationPoint
                  key={index}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};