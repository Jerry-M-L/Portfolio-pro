import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Développeur passionné avec une expertise en développement full stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Mon parcours</h3>
            <p className="text-gray-300 mb-4">
              Passionné par le développement web depuis plusieurs années, j'ai acquis une solide expérience 
              dans les technologies modernes du web. Mon objectif est de créer des applications perantes 
              et des expériences utilisateur exceptionnelles.
            </p>
            <p className="text-gray-300">
              Je me spécialise dans React, Node.js, et les technologies cloud, avec une approche 
              centrée sur la qualité du code et les bonnes pratiques de développement.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Mes valeurs</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Code propre et maintenable
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Apprentissage continu
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Collaboration efficace
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Innovation et créativité
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
