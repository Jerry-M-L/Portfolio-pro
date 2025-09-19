import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 text-white hover:bg-slate-700/50 border border-purple-500/20 rounded-lg transition-all duration-300 hover:border-purple-500/40"
      title={i18n.language === 'fr' ? 'Switch to English' : 'Passer au français'}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {i18n.language === 'fr' ? 'EN' : 'FR'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;
