import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import portfolioImg from '../assets/portfolio.png';
import poste from '../assets/poste.png';

const Projects = () => {
  const handleProjectAction = (action, projectName, url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projects = [
    {
      title: 'Site Portfolio',
      description: 'Site portfolio responsive avec animations fluides et optimisation SEO pour un developpeur .',
      image: portfolioImg,
      demoUrl: 'https://portfolio-mlj.vercel.app/',
      codeUrl: 'https://github.com/Jerry-M-L/portfolio-mlj',
      technologies: ['Next.js', 'Tailwind', 'React'],
      category: 'Frontend',
      status: 'termine'
    },
   
    {
      title: 'Marché de Crédits Carbone',
      description: 'Plateforme de valorisation et d\'échange de crédits carbone avec suivi en temps réel des émissions et blockchain pour la traçabilité.',
      image: 'https://media.istockphoto.com/id/2159480414/photo/businessman-holding-a-us-dollar-banknote-and-another-person-held-up-a-sign-with-the-co2-icon.jpg?s=612x612&w=0&k=20&c=aIyH79eE_wcJq2Zf-9aChwsiFT5lY8j-axSDFdRsERw=',
      demoUrl: '/',
      codeUrl: '/',
      technologies: ['React', 'Node.js', 'Blockchain', 'Web3', 'PostgreSQL'],
      category: 'Full Stack',
      status: 'en-cours'
      
    },
    {
      title: 'Application de Gestion de Tâches',
      description: 'Application de gestion de tâches collaborative avec notifications en temps réel et tableaux Kanban.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop',
      demoUrl: '#',
      codeUrl: '#',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
      category: 'Frontend',
      status: 'planification'
    },

    
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case 'termine':
        return {
          label: 'Terminé',
          icon: CheckCircle,
          className: 'bg-green-500/20 text-green-400 border-green-500/30',
          iconColor: 'text-green-400'
        };
      case 'en-cours':
        return {
          label: 'En cours',
          icon: Clock,
          className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
          iconColor: 'text-yellow-400'
        };
      case 'planification':
        return {
          label: 'En planification',
          icon: AlertCircle,
          className: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
          iconColor: 'text-blue-400'
        };
      default:
        return {
          label: 'Inconnu',
          icon: AlertCircle,
          className: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
          iconColor: 'text-gray-400'
        };
    }
  };

  const categories = ['Tous', 'Full Stack', 'Frontend', 'Backend'];
  const [activeCategory, setActiveCategory] = React.useState('Tous');

  const filteredProjects = activeCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Découvrez une sélection de mes réalisations récentes, alliant créativité et expertise technique.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-purple-500/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  alt={`Capture d'écran du projet ${project.title}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={project.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions - Only show for completed projects */}
                {project.status === 'termine' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <Button
                        asChild
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Eye size={16} className="mr-2" />
                        Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                      >
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-col gap-2 items-end">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                      {project.category}
                    </span>
                    {(() => {
                      const statusConfig = getStatusConfig(project.status);
                      const StatusIcon = statusConfig.icon;
                      return (
                        <span className={`px-3 py-1 text-xs rounded-full border flex items-center gap-1 ${statusConfig.className}`}>
                          <StatusIcon size={12} className={statusConfig.iconColor} />
                          {statusConfig.label}
                        </span>
                      );
                    })()}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Only show for completed projects */}
                {project.status === 'termine' && (
                  <div className="flex space-x-3 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Voir le projet
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white hover:bg-slate-700/50"
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      </a>
                    </Button>
                  </div>
                )}
                
                {/* Status message for non-completed projects */}
                {project.status !== 'termine' && (
                  <div className="pt-2">
                    <p className="text-sm text-gray-400 italic">
                      {project.status === 'en-cours' 
                        ? '🚧 Projet en cours de développement...'
                        : '📋 Projet en phase de planification'
                      }
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;