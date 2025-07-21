
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Packs() {
  const [isVisible, setIsVisible] = useState(false);
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

  const packs = [
    {
      icon: "🥉",
      title: "L'ASCENSION",
      duration: "6 MOIS",
      price: "12 000€",
      description: "Physique, combat, communication, survie primitive",
      features: [
        "Entraînement physique intensif",
        "Combat rapproché et self-défense",
        "Techniques de communication",
        "Survie en milieu naturel",
        "Développement mental"
      ],
      color: "from-amber-600 to-amber-800"
    },
    {
      icon: "🥈",
      title: "LA FORGE",
      duration: "12 MOIS",
      price: "20 000€",
      description: "Théâtre, grappling, business, camouflage",
      features: [
        "Tout le programme Ascension",
        "Art oratoire et théâtre",
        "Grappling et arts martiaux",
        "Stratégies business",
        "Techniques de camouflage",
        "Leadership tactique"
      ],
      color: "from-gray-400 to-gray-600",
      popular: true
    },
    {
      icon: "🥇",
      title: "L'HYDRE",
      duration: "24 MOIS",
      price: "35 000€",
      description: "Simulation tour du monde tactique, stratégie politique, nouvelle identité",
      features: [
        "Programmes complets précédents",
        "Simulation tour du monde tactique (forêt, jungle, montagne)",
        "Entraînement militaire opérationnel (armes, gestion du stress)",
        "Leadership politique : stratégie, systèmes, manipulation de groupe",
        "Finances autonomes : créer, investir, survivre à tout",
        "Épreuve finale d'endurance extrême et simulation de crise réelle"
      ],
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <section id="packs" ref={sectionRef} className="relative py-32 bg-zinc-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-red-500 mb-4 tracking-wider">
              LES PACKS
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="font-rajdhani text-xl text-zinc-300 font-medium">
              Choisis ton niveau de transformation
            </p>
          </div>

          {/* Packs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <div
                key={index}
                className={`relative group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-red-600 text-white px-4 py-1 font-rajdhani font-bold text-sm whitespace-nowrap">
                      RECOMMANDÉ
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative bg-black border-2 ${pack.popular ? 'border-red-600' : 'border-zinc-800'} p-8 h-full group-hover:border-red-500 transition-all duration-300`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pack.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{pack.icon}</div>
                      <h3 className="font-orbitron text-2xl font-black text-white mb-2 tracking-wide">
                        {pack.title}
                      </h3>
                      <div className="font-rajdhani text-red-400 text-lg font-bold">
                        {pack.duration}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="font-orbitron text-4xl font-black text-red-500">
                        {pack.price}
                      </div>
                      <div className="text-zinc-400 text-sm font-rajdhani">
                        30% avant + 70% au début
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-300 text-center mb-8 font-rajdhani font-medium">
                      {pack.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="ri-check-line text-red-500 text-xl w-6 h-6 flex items-center justify-center mr-3 mt-1"></i>
                          <span className="text-zinc-300 font-rajdhani">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-rajdhani font-bold py-4 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                      CANDIDATER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
