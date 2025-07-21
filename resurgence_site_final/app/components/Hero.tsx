
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Dark%20mountain%20landscape%20at%20dawn%20with%20silhouettes%20of%20warriors%20training%20in%20harsh%20terrain%2C%20fire%20burning%20in%20the%20distance%2C%20dramatic%20stormy%20sky%2C%20military%20camp%20atmosphere%2C%20cinematic%20lighting%2C%20rugged%20rocky%20terrain%2C%20intense%20masculine%20energy%2C%20survival%20training%20environment%2C%20shadows%20and%20red%20embers%2C%20epic%20dramatic%20composition&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Smoke and Fire Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-red-700/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Logo */}
          <div className="mb-8">
            <h1 className="font-orbitron text-6xl md:text-8xl font-black text-white tracking-wider mb-2">
              RÉSURGENCE
            </h1>
            <div className="w-32 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Date Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-red-600/20 border border-red-600 px-6 py-3 backdrop-blur-sm">
              <i className="ri-calendar-line text-red-500 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
              <span className="font-rajdhani text-lg font-bold text-white">
                📅 Départ : avril 2026
              </span>
            </div>
          </div>

          {/* Main Quote */}
          <div className="mb-12">
            <p className="font-rajdhani text-2xl md:text-4xl font-bold text-white leading-tight tracking-wide">
              DISPARAÎTRE EN HOMME.
            </p>
            <p className="font-rajdhani text-2xl md:text-4xl font-bold text-red-500 leading-tight tracking-wide mt-2">
              REVENIR EN LÉGENDE.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <button className="group relative bg-red-600 hover:bg-red-700 text-white font-rajdhani font-bold text-xl px-12 py-4 transition-all duration-300 transform hover:scale-105 overflow-hidden whitespace-nowrap cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative flex items-center justify-center">
                <i className="ri-sword-line w-6 h-6 flex items-center justify-center mr-3 text-2xl"></i>
                DEMANDER MA PLACE
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i className="ri-arrow-down-line text-white text-3xl w-8 h-8 flex items-center justify-center"></i>
          </div>
        </div>
      
      <div className="absolute bottom-10 w-full text-center text-white">
        <p className="text-lg md:text-xl font-bold bg-black bg-opacity-60 inline-block px-4 py-2 rounded">
          📅 Prochaine session : Janvier 2026 — Clôture des candidatures : 31 octobre 2025
        </p>
      </div>
    </div>
    </div>
  );

}