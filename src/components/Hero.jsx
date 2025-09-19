import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import profil from '../assets/profil.png';
const Hero = () => {
  const { t } = useTranslation();
  const socialLinks = {
    GitHub: 'https://github.com/Jerry-M-L',
    LinkedIn: 'https://www.linkedin.com/in/jerry-mbenda-leca',
    Email: 'mailto:jerrymbendaleca@gmail.com'
  };
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-8">
          {/* Profile Image */}
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 200
        }} className="mx-auto w-48 h-48 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2  rounded-full flex items-center justify-center">
              <img alt="Photo de profil du développeur" className="w-full h-full rounded-full object-cover" src={profil} />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-6">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-2xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
              <br />
              <span className="text-white">{t('hero.subtitle')}</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </motion.p>

            {/* Social Links */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8
          }} className="flex justify-center space-x-6">
              {[{
              icon: Github,
              label: 'GitHub'
            }, {
              icon: Linkedin,
              label: 'LinkedIn'
            }, {
              icon: Mail,
              label: 'Email'
            }].map((social) => {
            const href = socialLinks[social.label];
            const isMailto = href && href.startsWith('mailto:');
            return <motion.a key={social.label} whileHover={{
              scale: 1.2,
              rotate: 5
            }} whileTap={{
              scale: 0.9
            }} href={href} target={isMailto ? undefined : "_blank"} rel={isMailto ? undefined : "noopener noreferrer"} className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
                  <social.icon size={24} className="text-white" />
                </motion.a>;
          })}
            </motion.div>

            {/* CTA Button */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1
          }}>
              <Button onClick={scrollToAbout} size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                {t('hero.cta')}
                <ArrowDown className="ml-2 animate-bounce" size={20} />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>;
};
export default Hero;