import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import poste from '../assets/poste.png';
const About = () => {
  const features = [{
    icon: Code,
    title: 'Code Propre',
    description: 'J\'écris du code maintenable et évolutif en suivant les meilleures pratiques.'
  }, {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Toujours à l\'affût des dernières technologies pour créer des solutions modernes.'
  }, {
    icon: Users,
    title: 'Collaboration',
    description: 'Excellent travail d\'équipe et communication avec les clients et collègues.'
  }, {
    icon: Zap,
    title: 'Performance',
    description: 'Optimisation constante pour des applications rapides et efficaces.'
  }];
  return <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              À propos de moi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné avec plus de 2 ans d'expérience dans la création d'applications web modernes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform rotate-3"></div>
              <img alt="Développeur travaillant sur son ordinateur" className="relative w-full h-96 object-cover rounded-2xl shadow-2xl" src={poste} />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Mon parcours</h3>
              <p className="text-gray-300 leading-relaxed">Diplômé en informatique a l'Institut Supérieur de Technologie, j'ai commencé ma carrière en tant que développeur junior et je suis en plein évolution vers des rôles de développeur full stack. </p>
              <p className="text-gray-300 leading-relaxed">
                Ma passion pour l'apprentissage continu me pousse à explorer constamment de nouvelles technologies 
                et méthodologies pour offrir les meilleures solutions à mes clients.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => <motion.div key={feature.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300">
                  <feature.icon className="text-purple-400 mb-2" size={24} />
                  <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-xs">{feature.description}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;