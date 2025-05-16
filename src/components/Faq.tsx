import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, index, isOpen, toggleOpen }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div
        className="px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-primary-dark">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-primary h-5 w-5 flex-shrink-0" />
        ) : (
          <ChevronDown className="text-primary h-5 w-5 flex-shrink-0" />
        )}
      </div>
      
      {isOpen && (
        <motion.div
          className="px-6 py-4 border-t border-gray-100"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export const Faq: React.FC = () => {
  const faqItems = [
    {
      question: 'O que é exatamente o DREX?',
      answer: 'O DREX é a Moeda Digital do Banco Central do Brasil (CBDC), uma versão digital do Real brasileiro que utiliza tecnologia blockchain para oferecer transações mais rápidas, seguras e com menor custo, além de possibilitar contratos inteligentes e serviços financeiros programáveis.'
    },
    {
      question: 'Como o DREX difere de criptomoedas como Bitcoin?',
      answer: 'Diferente de criptomoedas privadas, o DREX é emitido e garantido pelo Banco Central do Brasil, tendo o mesmo valor e estabilidade do Real físico. Ele não está sujeito à volatilidade característica de criptomoedas e possui respaldo legal como moeda oficial.'
    },
    {
      question: 'Quando o DREX estará disponível para uso?',
      answer: 'O Banco Central do Brasil está conduzindo testes e pilotos para garantir a segurança e eficiência do sistema. O lançamento oficial ocorrerá após a conclusão bem-sucedida dessas fases, com implementação gradual para diferentes segmentos do mercado.'
    },
    {
      question: 'Como farei para usar o DREX?',
      answer: 'O DREX será acessível através de instituições financeiras autorizadas pelo Banco Central, incluindo bancos, fintechs e cooperativas. Você poderá utilizar aplicativos e plataformas digitais dessas instituições para gerenciar e usar sua carteira de DREX.'
    },
    {
      question: 'O DREX substituirá o dinheiro físico e o PIX?',
      answer: 'Não. O DREX coexistirá com o dinheiro físico e meios de pagamento eletrônicos como o PIX, expandindo as opções disponíveis para os cidadãos. A intenção é complementar o ecossistema financeiro, não substituir os meios atuais.'
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Perguntas Frequentes</h2>
          <p>Esclareça suas dúvidas sobre o DREX.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
              isOpen={openItems.includes(index)}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};