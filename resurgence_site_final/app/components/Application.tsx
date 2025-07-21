
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Application() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

  // Compte à rebours jusqu'au 31 octobre 2025
  useEffect(() => {
    const targetDate = new Date('2025-10-31T23:59:59');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      number: "01",
      title: "DOSSIER DE MOTIVATION",
      description: "Candidature détaillée + questionnaire psychologique approfondi",
      icon: "ri-file-text-line",
      action: "CANDIDATER"
    },
    {
      number: "02",
      title: "ENTRETIEN VISIO",
      description: "Évaluation personnelle avec nos instructeurs. Sélection rigoureuse.",
      icon: "ri-video-chat-line",
      action: "PLANIFIER"
    },
    {
      number: "03",
      title: "PAIEMENT & ENGAGEMENT",
      description: "Signature du contrat irréversible + paiement intégral anticipé",
      icon: "ri-secure-payment-line",
      action: "S'ENGAGER DÉFINITIVEMENT"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-zinc-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Elite%20military%20selection%20process%2C%20candidates%20being%20interviewed%20and%20tested%2C%20intense%20evaluation%20atmosphere%2C%20tactical%20briefing%20room%2C%20serious%20instructors%2C%20professional%20assessment%20environment%2C%20dark%20lighting%2C%20high-stakes%20recruitment&width=1920&height=1080&seq=application-bg&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-red-500 mb-4 tracking-wider">
              CANDIDATURE
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="font-rajdhani text-xl text-zinc-300 font-medium">
              Processus de sélection en 3 étapes. Seuls les plus déterminés seront retenus.
            </p>
          </div>

          {/* Dates importantes */}
          <div className="bg-red-600/20 border border-red-600 p-6 mb-12 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-calendar-check-line text-red-500 text-3xl w-8 h-8 flex items-center justify-center mr-3"></i>
              <h3 className="font-orbitron text-xl font-bold text-red-500">
                DATES IMPORTANTES
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="font-rajdhani text-lg text-white font-medium">
                🚀 <strong>Départ :</strong> avril 2026
              </p>
              <p className="font-rajdhani text-lg text-white font-medium">
                ⏰ <strong>Clôture candidatures :</strong> 31 octobre 2025
              </p>
            </div>
          </div>

          {/* Compte à rebours */}
          <div className="text-center mb-12">
            <div className="bg-red-600/10 border-2 border-red-600 p-6 max-w-2xl mx-auto mb-6">
              <div className="flex items-center justify-center mb-4">
                <i className="ri-alarm-warning-line text-red-500 text-3xl w-8 h-8 flex items-center justify-center mr-3"></i>
                <h3 className="font-orbitron text-xl font-bold text-red-500">
                  INSCRIPTIONS CLÔTURÉES LE 31 OCTOBRE 2025
                </h3>
              </div>
              <p className="font-rajdhani text-lg text-white font-bold">
                "Tu veux disparaître ou continuer à tricher avec ta vie ?"
              </p>
            </div>
            <h3 className="font-orbitron text-2xl font-bold text-white mb-6">
              TEMPS RESTANT POUR CANDIDATER
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="bg-black border border-red-600 p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{countdown.days}</div>
                <div className="text-sm text-zinc-400">JOURS</div>
              </div>
              <div className="bg-black border border-red-600 p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{countdown.hours}</div>
                <div className="text-sm text-zinc-400">HEURES</div>
              </div>
              <div className="bg-black border border-red-600 p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{countdown.minutes}</div>
                <div className="text-sm text-zinc-400">MIN</div>
              </div>
              <div className="bg-black border border-red-600 p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{countdown.seconds}</div>
                <div className="text-sm text-zinc-400">SEC</div>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-red-600/20 border border-red-600 p-6 mb-16 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-shield-check-line text-red-500 text-3xl w-8 h-8 flex items-center justify-center mr-3"></i>
              <h3 className="font-orbitron text-xl font-bold text-red-500">
                SÉLECTION RIGOUREUSE
              </h3>
            </div>
            <p className="font-rajdhani text-lg text-white font-medium">
              Moins de 10% des candidatures sont acceptées. Nous ne sélectionnons que les hommes 
              prêts à tout sacrifier pour leur transformation.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-16">
            <div className="bg-zinc-800 h-2 rounded-full max-w-2xl mx-auto">
              <div className="bg-red-600 h-2 rounded-full w-1/3 relative">
                <div className="absolute right-0 top-0 w-4 h-4 bg-red-600 rounded-full -mt-1"></div>
              </div>
            </div>
            <div className="text-center mt-2 text-zinc-400 font-rajdhani">
              Processus en 3 étapes
            </div>
          </div>

          {/* Financing Options */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
                OPTIONS DE FINANCEMENT
              </h3>
              <p className="font-rajdhani text-lg text-zinc-300">
                Paiement : 30% avant le début + 70% le jour J
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <i className="ri-bank-line text-red-500 text-3xl w-8 h-8 flex items-center justify-center mx-auto mb-4"></i>
                <h4 className="font-rajdhani text-xl font-bold text-white mb-2">
                  PRÊT BANCAIRE
                </h4>
                <p className="text-zinc-300 font-rajdhani">
                  Partenariats avec banques spécialisées pour financer votre transformation
                </p>
              </div>

              <div className="text-center">
                <i className="ri-credit-card-line text-red-500 text-3xl w-8 h-8 flex items-center justify-center mx-auto mb-4"></i>
                <h4 className="font-rajdhani text-xl font-bold text-white mb-2">
                  FACILITÉS DE PAIEMENT
                </h4>
                <p className="text-zinc-300 font-rajdhani">
                  Solutions personnalisées selon votre situation financière
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="bg-black border border-zinc-800 p-8 h-full hover:border-red-600 transition-all duration-300 group relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-orbitron font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    {/* Icon */}
                    <div className="text-center mb-6">
                      <i className={`${step.icon} text-red-500 text-4xl w-12 h-12 flex items-center justify-center mx-auto mb-4`}></i>
                      <h3 className="font-orbitron text-xl font-bold text-white tracking-wide">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-300 font-rajdhani font-medium text-center mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Action Button */}
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-rajdhani font-bold py-3 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                      {step.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main CTA avec punchline renforcée */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600/20 to-black/40 border-2 border-red-600 p-12 mb-8 relative overflow-hidden">
              {/* Effet de pulsation */}
              <div className="absolute inset-0 bg-red-600/10 animate-pulse"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <i className="ri-skull-line text-red-500 text-6xl w-16 h-16 flex items-center justify-center mr-4"></i>
                  <h3 className="font-orbitron text-4xl font-black text-white tracking-wide">
                    DERNIÈRE CHANCE
                  </h3>
                  <i className="ri-skull-line text-red-500 text-6xl w-16 h-16 flex items-center justify-center ml-4"></i>
                </div>

                <p className="font-rajdhani text-2xl text-red-400 font-black mb-6">
                  "Pendant que tu doutes, un autre s'engage."
                </p>

                <p className="font-rajdhani text-xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Les faibles trouvent des excuses. Les forts trouvent des solutions. 
                  <span className="text-red-400 font-bold"> Quel homme es-tu vraiment ?</span>
                </p>

                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-red-600/20 border border-red-600 px-6 py-2 mb-4">
                    <span className="font-rajdhani text-lg font-bold text-red-500">
                      Places limitées - Sélection impitoyable
                    </span>
                  </div>

                  <button className="group relative bg-red-600 hover:bg-red-700 text-white font-rajdhani font-black text-3xl px-20 py-8 transition-all duration-300 transform hover:scale-110 cursor-pointer whitespace-nowrap shadow-lg shadow-red-600/50 hover:shadow-xl hover:shadow-red-600/70">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="relative flex items-center justify-center">
                      <i className="ri-fire-line w-10 h-10 flex items-center justify-center mr-4 text-4xl animate-pulse"></i>
                      REJOINS LA COHORTE
                      <i className="ri-fire-line w-10 h-10 flex items-center justify-center ml-4 text-4xl animate-pulse"></i>
                    </span>
                  </button>

                  <p className="font-rajdhani text-sm text-zinc-500 mt-4">
                    Engagement irréversible - Transformation garantie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

<section className="py-20 px-4 bg-black text-white text-center">
  <h2 className="text-3xl font-bold mb-8">🧠 ILS L’ONT FAIT</h2>
  <div className="space-y-6 max-w-2xl mx-auto">
    <p>“Je suis entré comme un fantôme. Aujourd’hui, plus personne ne m’interrompt.” — Damien, 28 ans</p>
    <p>“Avant Résurgence, je n'avais ni corps ni repère. Maintenant, je trace ma propre route.” — Idriss, 33 ans</p>
    <p>“Résurgence m’a arraché à ma vie d’avant. Je ne reviendrai jamais en arrière.” — Marc, 39 ans</p>
  </div>
</section>

<section className="py-20 px-4 bg-red-900 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">⚠️ DERNIER AVERTISSEMENT</h2>
  <p className="mb-4">Tu hésites encore ? Pendant que tu scrolles, un autre homme s’engage. Et il reviendra plus fort que toi.</p>
  <p className="font-bold mb-6">📆 Clôture des candidatures : 31 octobre 2025</p>
  <a href="#formulaire" className="bg-white text-red-900 font-bold px-6 py-3 rounded">JE M’ENGAGE MAINTENANT</a>
</section>
