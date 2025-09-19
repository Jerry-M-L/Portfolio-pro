import React from 'react';
import { useTranslation } from 'react-i18next';
import poste from '../assets/poste.png';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('about.description')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">{t('about.journey')}</h3>
            <p className="text-gray-300 mb-4">{t('about.journeyText1')}</p>
           
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">{t('about.values.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  {t('about.values.cleanCode')}
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  {t('about.values.learning')}
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  {t('about.values.collaboration')}
                </li>
                <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  {t('about.values.innovation')}
                </li>
              </ul>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform rotate-1"></div>
                <img alt="Illustration de poste de travail" className="relative w-full h-64 object-cover rounded-2xl shadow-xl -mt-2 mb-0" src={poste} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
