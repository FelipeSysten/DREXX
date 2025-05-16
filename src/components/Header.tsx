import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Coins } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Sobre', to: 'about' },
    { name: 'Características', to: 'features' },
    { name: 'Público-Alvo', to: 'public' },
    { name: 'Inovação', to: 'innovation' },
    { name: 'FAQ', to: 'faq' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Coins className="text-white mr-2" size={32} />
            <span className="text-white text-2xl font-bold">DREX</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white font-medium hover:text-secondary cursor-pointer relative after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:bottom-[-5px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary-dark absolute left-0 right-0 top-full animate-slide-down shadow-lg">
            <div className="px-4 py-2">
              <ul className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white text-lg font-medium block py-2 hover:text-secondary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};