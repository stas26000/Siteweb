
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Program() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: "ri-sword-line",
      visualIcon: "⚔️",
      title: "PHYSIQUE",
      description: "Transformation corporelle complète",
      details: [
        "Entraînement militaire intensif",
        "Combat rapproché & self-défense",
        "Endurance extrême",
        "Nutrition optimisée"
      ]
    },
    {
      icon: "ri-speak-line",
      visualIcon: "🗣️",
      title: "ORATOIRE & THÉÂTRE",
      description: "Maîtrise de la communication",
      details: [
        "Prise de parole en public",
        "Techniques théâtrales",
        "Persuasion & influence",
        "Présence charismatique"
      ]
    },
    {
      icon: "ri-fire-line",
      visualIcon: "🔥",
      title: "SURVIE",
      description: "Autonomie totale en milieu hostile",
      details: [
        "Survie en nature",
        "Techniques de camouflage",
        "Orientation & navigation",
        "Résistance mentale"
      ]
    },
    {
      icon: "ri-money-dollar-box-line",
      visualIcon: "💰",
      title: "BUSINESS & ARGENT",
      description: "Indépendance financière",
      details: [
        "Stratégies d'investissement",
        "Création d'entreprise",
        "Négociation avancée",
        "Mindset entrepreneur"
      ]
    },
    {
      icon: "ri-chess-line",
      visualIcon: "♟️",
      title: "LEADERSHIP & STRATÉGIE",
      description: "Commandement et vision",
      details: [
        "Psychologie des masses",
        "Stratégie militaire",
        "Prise de décision",
        "Influence politique"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-red-500 mb-4 tracking-wider">
              PROGRAMME COMMUN
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="font-rajdhani text-xl text-zinc-300 font-medium">
              5 piliers fondamentaux pour une transformation complète
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-zinc-900 border border-zinc-800 p-8 h-full hover:border-red-600 transition-all duration-300 group relative overflow-hidden">
                  {/* Fire/Metal Hover Effect */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-500/10 to-red-700/10 animate-pulse"></div>
                  )}

                  {/* Icon */}
                  <div className="text-center mb-6 relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 border-2 border-red-600 rounded-full mb-4 transition-all duration-300 ${hoveredIndex === index ? 'bg-red-600/30 shadow-lg shadow-red-600/30' : 'bg-red-600/20'}`}>
                      <div className="text-3xl">{pillar.visualIcon}</div>
                    </div>
                    <h3 className="font-orbitron text-xl font-bold text-white tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 font-rajdhani font-medium text-center mb-6 relative z-10">
                    {pillar.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 relative z-10">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="ri-arrow-right-line text-red-500 text-lg w-5 h-5 flex items-center justify-center mr-3 mt-1"></i>
                        <span className="text-zinc-400 font-rajdhani">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-16">
            <div className="max-w-3xl mx-auto">
              <p className="font-rajdhani text-xl text-zinc-300 mb-8 leading-relaxed">
                Chaque pilier est développé progressivement selon ton pack choisi. 
                <span className="text-red-400 font-bold"> L'excellence dans ces 5 domaines </span>
                transformera ta vie à jamais.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-12 h-12 border-2 border-red-600 rotate-45 opacity-50"></div>
                <div className="w-12 h-12 border-2 border-red-600 rotate-45"></div>
                <div className="w-12 h-12 border-2 border-red-600 rotate-45 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
