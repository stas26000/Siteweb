
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Environment() {
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

  const features = [
    {
      icon: "ri-map-pin-line",
      title: "LIEU SECRET",
      description: "Localisation jamais révélée. Transport organisé par nos soins."
    },
    {
      icon: "ri-phone-line",
      title: "ZERO COMMUNICATION",
      description: "Aucun contact extérieur. Téléphones confisqués à l'arrivée"
    },
    {
      icon: "ri-home-line",
      title: "LOGEMENT MILITAIRE",
      description: "Dortoirs spartans, lits de camp, conditions de caserne"
    },
    {
      icon: "ri-restaurant-line",
      title: "TOUT INCLUS",
      description: "Nourriture, équipements, vêtements, instructeurs fournis"
    },
    {
      icon: "ri-group-line",
      title: "COHORTE LIMITÉE",
      description: "Entre 10 et 30 hommes maximum par session"
    },
    {
      icon: "ri-shield-line",
      title: "SÉCURITÉ TOTALE",
      description: "Encadrement 24/7, équipe médicale, protocoles d'urgence"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Military%20mountain%20camp%20at%20night%20with%20barracks%20and%20training%20facilities%2C%20rugged%20terrain%20with%20snow-capped%20peaks%2C%20dark%20atmosphere%20with%20red%20lighting%2C%20survival%20training%20compound%2C%20tactical%20base%20camp%2C%20harsh%20environment%2C%20minimal%20lighting%2C%20fortress-like%20structure%2C%20isolated%20location&width=1920&height=1080&seq=environment-bg&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-red-500 mb-4 tracking-wider">
              ENVIRONNEMENT
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="font-rajdhani text-xl text-zinc-300 font-medium">
              Conditions spartanes. Isolement total. Transformation garantie.
            </p>
          </div>

          {/* Main Images - More Realistic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative group overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Raw%20brutal%20military%20training%20facility%2C%20muddy%20ground%2C%20harsh%20weather%20conditions%2C%20men%20sweating%20and%20struggling%2C%20dirty%20equipment%2C%20real%20combat%20training%20environment%2C%20exhausted%20warriors%2C%20gritty%20realistic%20atmosphere%2C%20no%20glamour%2C%20pure%20survival%20training%2C%20blood%20sweat%20and%20tears&width=800&height=600&seq=env-1-real&orientation=landscape"
                alt="Base d'entraînement"
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-rajdhani text-xl font-bold text-white">BASE D'ENTRAÎNEMENT</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Dirty%20military%20barracks%20dormitory%2C%20exhausted%20soldiers%20sleeping%20on%20basic%20bunk%20beds%2C%20muddy%20boots%2C%20sweaty%20uniforms%2C%20harsh%20spartan%20conditions%2C%20no%20comfort%2C%20survival%20camp%20interior%2C%20real%20military%20sleeping%20quarters%2C%20gritty%20realistic%20environment%2C%20worn%20equipment&width=800&height=600&seq=env-2-real&orientation=landscape"
                alt="Logement militaire"
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-rajdhani text-xl font-bold text-white">LOGEMENT MILITAIRE</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Muscular%20dirty%20men%20surviving%20extreme%20wilderness%20conditions%2C%20sweaty%20exhausted%20warriors%20covered%20in%20mud%20and%20dirt%2C%20real%20survival%20training%2C%20no%20clean%20equipment%2C%20harsh%20mountain%20environment%2C%20men%20pushing%20physical%20limits%2C%20gritty%20realistic%20survival%2C%20blood%20sweat%20determination%2C%20raw%20masculine%20strength&width=800&height=600&seq=env-3-real&orientation=landscape"
                alt="Hommes forts en survie"
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-rajdhani text-xl font-bold text-white">HOMMES FORTS</h3>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-zinc-900 border border-zinc-800 p-6 h-full hover:border-red-600 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <i className={`${feature.icon} text-red-500 text-2xl w-8 h-8 flex items-center justify-center`}></i>
                    </div>
                    <div>
                      <h3 className="font-orbitron text-lg font-bold text-white mb-2 tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-300 font-rajdhani font-medium">
                        {feature.description}
                      </p>
                    </div>
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
