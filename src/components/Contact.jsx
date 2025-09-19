import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Link, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:jerrymbendaleca@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  const socialLinksMap = {
    GitHub: 'https://github.com/Jerry-M-L',
    LinkedIn: 'https://www.linkedin.com/in/jerry-mbenda-leca',
    Facebook: 'https://facebook.com/JerryML'
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      value: t('contact.info.emailValue'),
      description: t('contact.info.emailDesc')
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      value: t('contact.info.phoneValue'),
      description: t('contact.info.phoneDesc')
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      value: t('contact.info.locationValue'),
      description: t('contact.info.locationDesc')
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Facebook, label: 'Facebook', color: 'hover:text-sky-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">{t('contact.form.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send size={20} className="mr-2" />
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <info.icon className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                    <p className="text-purple-400 font-medium">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.social.title')}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const href = socialLinksMap[social.label];
                  return (
                    <motion.a
                      key={social.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-600/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:border-purple-500/30`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                {t('contact.social.description')}
              </p>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">{t('contact.availability.title')}</span>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                {t('contact.availability.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;