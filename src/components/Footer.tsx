import React from 'react';
import { Link } from 'react-scroll';
import { 
  Coins, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-4">
              <Coins className="mr-2 h-7 w-7" />
              <h3 className="text-xl font-bold">DREX</h3>
            </div>
            <p className="mb-6 text-gray-300">
              A moeda digital oficial do Banco Central do Brasil. Segura, ágil e inovadora.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-secondary p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary p-2 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary p-2 rounded-full transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-10 after:bg-secondary">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {['about', 'features', 'public', 'innovation', 'faq'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200 hover:pl-1 cursor-pointer flex items-center"
                  >
                    {item === 'about' && 'Sobre o DREX'}
                    {item === 'features' && 'Características'}
                    {item === 'public' && 'Público-Alvo'}
                    {item === 'innovation' && 'Inovação'}
                    {item === 'faq' && 'FAQ'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-10 after:bg-secondary">
              Informações Legais
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200 hover:pl-1 flex items-center">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200 hover:pl-1 flex items-center">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200 hover:pl-1 flex items-center">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200 hover:pl-1 flex items-center">
                  Regulamentação
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-10 after:bg-secondary">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span className="text-gray-300">contato@drex.gov.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span className="text-gray-300">0800-XXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span className="text-gray-300">Brasília, DF - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} DREX - Banco Central do Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};