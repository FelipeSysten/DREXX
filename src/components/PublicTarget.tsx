import React from 'react';
import { motion } from 'framer-motion';
import { User, Store, Building2, Code2 } from 'lucide-react';

interface TargetCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const TargetCard: React.FC<TargetCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="text-primary text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export const PublicTarget: React.FC = () => {
  const targets = [
    {
      icon: <User className="w-10 h-10" />,
      title: 'Cidadãos',
      description: 'Transações mais rápidas, seguras e com menor custo. Acesso simplificado a serviços financeiros e maior controle sobre seu dinheiro.'
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: 'Empresas',
      description: 'Redução de custos operacionais, maior eficiência em pagamentos e recebimentos, e novas possibilidades de negócios com contratos inteligentes.'
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Instituições Financeiras',
      description: 'Infraestrutura moderna para desenvolver novos produtos e serviços, reduzindo custos de compliance e aumentando eficiência operacional.'
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'Desenvolvedores',
      description: 'Plataforma aberta para inovar com aplicações financeiras, criando soluções que aproveitam os recursos do DREX e atendem às necessidades do mercado.'
    }
  ];

  return (
    <section id="public" className="section bg-light">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Para Quem é o DREX</h2>
          <p>Uma solução financeira digital para todos os segmentos da sociedade brasileira.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, index) => (
            <TargetCard
              key={index}
              icon={target.icon}
              title={target.title}
              description={target.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};