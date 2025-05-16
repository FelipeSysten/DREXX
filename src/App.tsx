import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { PublicTarget } from './components/PublicTarget';
import { Innovation } from './components/Innovation';
import { Faq } from './components/Faq';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <PublicTarget />
      <Innovation />
      <Faq />
      <Cta />
      <Footer />
    </Layout>
  );
}

export default App;