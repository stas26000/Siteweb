
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Rules() {
  const [isVisible, setIsVisible] = useState(false);
  const [pulseLock, setPulseLock] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Déclencher l'effet de pulsation après l'apparition
          setTimeout(() => setPulseLock(true), 1000);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const rules = [
    {
      icon: "ri-close-circle-line",
      title: "AUCUN ABANDON",
      description: "Une fois engagé, impossible de quitter avant la fin du programme. Engagement irréversible."
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "PAIEMENT ANTICIPÉ",
      description: "30% avant le début + 70% le jour J. Facilités bancaires disponibles."
    },
    {
      icon: "ri-calendar-line",
      title: "ENGAGEMENT TOTAL",
      description: "Disponibilité complète durant toute la durée. Aucune exception, aucun congé."
    },
    {
      icon: "ri-user-unfollow-line",
      title: "CHANGEMENT IRRÉVERSIBLE",
      description: "Tu ne reviendras pas la même personne. Transformation physique et mentale garantie."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-zinc-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-red-500 mb-4 tracking-wider">
              RÈGLES & ENGAGEMENT
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="font-rajdhani text-xl text-zinc-300 font-medium">
              Conditions non-négociables. Engagement total requis.
            </p>
          </div>

          {/* Warning Banner with Lock Effect */}
          <div className={`bg-red-600/20 border border-red-600 p-6 mb-12 text-center relative ${pulseLock ? 'animate-pulse' : ''}`}>
            <div className="flex items-center justify-center mb-4">
              <div className={`mr-3 ${pulseLock ? 'animate-pulse' : ''}`}>
                <i className="ri-lock-line text-red-500 text-3xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="font-orbitron text-xl font-bold text-red-500">
                🔒 ENGAGEMENT IRRÉVERSIBLE
              </h3>
            </div>
            <p className="font-rajdhani text-lg text-white font-medium">
              Une fois la candidature acceptée et le paiement effectué, aucun retour en arrière n'est possible. 
              Cette décision changera définitivement ta vie.
            </p>
            
            {/* Subtle shake effect */}
            <div className={`absolute inset-0 pointer-events-none ${pulseLock ? 'animate-pulse' : ''}`}>
              <div className="absolute inset-0 border-2 border-red-500/20 animate-ping"></div>
            </div>
          </div>

          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rules.map((rule, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-black border border-zinc-800 p-8 h-full hover:border-red-600 transition-all duration-300 group">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <i className={`${rule.icon} text-red-500 text-4xl w-12 h-12 flex items-center justify-center`}></i>
                    </div>
                    <div>
                      <h3 className="font-orbitron text-xl font-bold text-white mb-4 tracking-wide">
                        {rule.title}
                      </h3>
                      <p className="text-zinc-300 font-rajdhani font-medium text-lg leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="font-rajdhani text-xl text-zinc-300 mb-8">
              Prêt à prendre l'engagement le plus important de ta vie ?
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-rajdhani font-bold text-xl px-12 py-4 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center mr-3 text-2xl"></i>
              JE M'ENGAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
