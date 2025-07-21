
'use client';

export default function Footer() {
  return (
    <footer className="relative bg-zinc-900 border-t border-zinc-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-orbitron text-3xl font-black text-red-500 mb-4 tracking-wider">
              RÉSURGENCE
            </h3>
            <p className="font-rajdhani text-lg text-zinc-300 font-medium leading-relaxed">
              Transformation radicale pour hommes déterminés. 
              Camp d'entraînement extrême en montagne.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron text-xl font-bold text-white mb-6 tracking-wide">
              CONTACT
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="ri-mail-line text-red-500 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                <span className="font-rajdhani text-zinc-300">contact@resurgence.com</span>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-red-500 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                <span className="font-rajdhani text-zinc-300">+33 1 XX XX XX XX</span>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line text-red-500 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                <span className="font-rajdhani text-zinc-300">Localisation révélée après sélection</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-orbitron text-xl font-bold text-white mb-6 tracking-wide">
              RÉSEAUX
            </h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-zinc-800 hover:bg-red-600 p-3 transition-colors duration-300 cursor-pointer">
                <i className="ri-instagram-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="bg-zinc-800 hover:bg-red-600 p-3 transition-colors duration-300 cursor-pointer">
                <i className="ri-tiktok-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="bg-zinc-800 hover:bg-red-600 p-3 transition-colors duration-300 cursor-pointer">
                <i className="ri-youtube-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
            <p className="font-rajdhani text-sm text-zinc-400">
              Suis nos actualités et témoignages d'anciens participants
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Legal Links */}
            <div className="flex flex-wrap space-x-6 mb-4 md:mb-0">
              <a href="#" className="font-rajdhani text-zinc-400 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                Mentions légales
              </a>
              <a href="#" className="font-rajdhani text-zinc-400 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                Conditions générales
              </a>
              <a href="#" className="font-rajdhani text-zinc-400 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                Politique de confidentialité
              </a>
            </div>

            {/* Copyright */}
            <div className="text-zinc-400 font-rajdhani text-sm">
              © 2024 RÉSURGENCE. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-red-600 text-center py-4">
        <p className="font-rajdhani text-white text-lg font-bold tracking-wide">
          REVIENS EN LÉGENDE OU RESTE DANS L'OUBLI.
        </p>
      </div>
    </footer>
  );
}
