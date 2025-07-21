'use client';

import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Packs from './components/Packs';
import Environment from './components/Environment';
import Rules from './components/Rules';
import Program from './components/Program';
import Application from './components/Application';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Manifesto />
      <Packs />
      <Environment />
      <Rules />
      <Program />
      <Application />
      <FAQ />
      <Footer />
    </div>
  );
}