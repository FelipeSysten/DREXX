import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Code, Handshake, Globe, Search } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-light rounded-xl shadow-md hover:shadow-lg p-8 text-center transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-primary text-5xl mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-primary-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Segurança Garantida',
      description: 'Tecnologia blockchain com respaldo do Banco Central, oferecendo segurança máxima para suas transações financeiras e dados pessoais.'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Transações Instantâneas',
      description: 'Pagamentos e transferências em tempo real, 24 horas por dia, 7 dias por semana, com confirmação imediata e sem intermediários.'
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Contratos Inteligentes',
      description: 'Suporte a contratos programáveis que executam automaticamente quando condições pré-definidas são atendidas, abrindo novas possibilidades para negócios.'
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: 'Integração Completa',
      description: 'Compatibilidade com o sistema financeiro atual, incluindo PIX e outros meios de pagamento, facilitando a transição e adoção.'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Inclusão Financeira',
      description: 'Acesso a serviços financeiros para todos os brasileiros, incluindo os desbancarizados, promovendo cidadania financeira e desenvolvimento socioeconômico.'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Transparência Total',
      description: 'Rastreabilidade das transações com registro imutável, permitindo maior controle e combate a fraudes e lavagem de dinheiro.'
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Características Principais</h2>
          <p>Conheça os diferenciais da moeda digital que está revolucionando o sistema financeiro brasileiro.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};