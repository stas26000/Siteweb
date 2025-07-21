
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Manifesto() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('packs');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Video/Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 to-transparent"></div>
        {/* Subtle animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-700/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Video Background Option */}
      {isPlaying && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-play-circle-line text-red-500 text-6xl w-16 h-16 flex items-center justify-center"></i>
              </div>
              <p className="font-rajdhani text-xl text-white">
                [Voix off grave et intense]
              </p>
            </div>
            <button 
              onClick={() => setIsPlaying(false)}
              className="bg-red-600 hover:bg-red-700 text-white font-rajdhani font-bold px-8 py-3 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              FERMER
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-red-500 mb-4 tracking-wider">
              MANIFESTO
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Video Play Button */}
          <div className="mb-12">
            <button 
              onClick={() => setIsPlaying(true)}
              className="group bg-red-600/20 border border-red-600 px-6 py-3 hover:bg-red-600/30 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-play-circle-line text-red-500 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
              <span className="font-rajdhani text-white font-bold">
                ÉCOUTER LE MANIFESTO
              </span>
            </button>
          </div>

          {/* Main Text */}
          <div className="space-y-8">
            <p className="font-rajdhani text-xl md:text-2xl font-medium text-white leading-relaxed">
              <span className="text-red-400 font-bold">Ils t'ont menti...</span> Ce monde n'a rien à t'offrir tant que tu n'es pas devenu quelqu'un d'autre.
            </p>
            
            <p className="font-rajdhani text-xl md:text-2xl font-medium text-white leading-relaxed">
              <span className="text-red-500 font-bold text-3xl">RÉSURGENCE</span> n'est pas un camp. C'est une métamorphose.
            </p>
            
            <p className="font-rajdhani text-xl md:text-2xl font-bold text-white leading-relaxed">
              Tu entres. Tu coupes tout. Tu sors en homme.
            </p>
            
            <p className="font-rajdhani text-xl md:text-2xl font-bold text-red-400 leading-relaxed">
              Ou tu ne sors pas.
            </p>
          </div>

          {/* Quote Decoration */}
          <div className="mt-16 mb-12">
            <div className="flex justify-center space-x-4">
              <div className="w-8 h-8 border-2 border-red-600 rotate-45"></div>
              <div className="w-8 h-8 border-2 border-red-600 rotate-45"></div>
              <div className="w-8 h-8 border-2 border-red-600 rotate-45"></div>
            </div>
          </div>

          {/* Scroll Chevron */}
          <div className="mt-16">
            <button 
              onClick={scrollToNext}
              className="group animate-bounce hover:animate-none transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-down-line text-red-500 text-4xl w-12 h-12 flex items-center justify-center group-hover:text-red-400 transition-colors duration-300"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
