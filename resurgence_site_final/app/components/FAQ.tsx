
'use client';

import { useState, useEffect, useRef } from 'react';

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "Puis-je contacter ma famille pendant le programme ?",
      answer: "NON. Aucun contact extérieur n'est autorisé. C'est une règle absolue et non-négociable. Ton téléphone sera confisqué dès l'arrivée. Cette coupure totale est essentielle à ta transformation."
    },
    {
      question: "Et si je veux abandonner en cours de route ?",
      answer: "IMPOSSIBLE. L'abandon n'existe pas à RÉSURGENCE. Une fois engagé, tu vas jusqu'au bout. C'est exactement cette mentalité de quitter qui t'a mené où tu es aujourd'hui. Ici, on brise cette habitude."
    },
    {
      question: "Faut-il avoir une expérience militaire pour participer ?",
      answer: "NON. Nous acceptons tous les niveaux. Notre programme est conçu pour transformer n'importe qui en guerrier. L'important n'est pas d'où tu viens, mais où tu veux aller."
    },
    {
      question: "Dois-je apporter du matériel ou des affaires ?",
      answer: "RIEN. Tout est fourni : nourriture, vêtements, équipements, logement. Tu arrives avec rien et tu repars avec tout. C'est inclus dans le programme."
    },
    {
      question: "Les prix sont-ils négociables ?",
      answer: "JAMAIS. Les prix sont fixes et non-négociables. Si tu cherches à négocier, tu n'as pas compris la valeur de ce qu'on t'offre. Excellence et compromis ne vont pas ensemble."
    },
    {
      question: "Que se passe-t-il en cas d'urgence familiale ?",
      answer: "Nous gérons tout. Une équipe est dédiée aux urgences réelles. Mais comprends bien : 99% de ce que tu penses être urgent ne l'est pas. C'est ton ancienne vie qui essaie de te récupérer."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-red-500 mb-4 tracking-wider">
              FAQ
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="font-rajdhani text-xl text-zinc-300 font-medium">
              Questions brutes. Réponses directes. Pas de langue de bois.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-red-600 transition-all duration-300">
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-zinc-800 transition-colors duration-300 cursor-pointer"
                  >
                    <h3 className="font-rajdhani text-lg font-bold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <i className={`ri-arrow-down-line text-red-500 text-xl w-6 h-6 flex items-center justify-center transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''}`}></i>
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-6">
                      <div className="border-l-4 border-red-600 pl-6">
                        <p className="font-rajdhani text-lg text-zinc-300 font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-16">
            <div className="bg-red-600/20 border border-red-600 p-6">
              <p className="font-rajdhani text-lg text-white font-medium">
                <span className="text-red-400 font-bold">Dernière chose :</span> Si tu as encore des doutes, 
                tu n'es pas prêt. RÉSURGENCE n'est pas pour les hésitants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
