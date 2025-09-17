import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const Projects = () => {
  const handleProjectAction = (action, projectName) => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne t'inquiète pas ! Je travaille encore dessus ! 🚀"
    });
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec panier, paiements et gestion des commandes. Interface moderne et responsive.',
      image: '/src/assets/poste.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Full Stack'
      
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches collaborative avec notifications en temps réel et tableaux Kanban.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
      category: 'Frontend'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Tableau de bord analytique avec graphiques interactifs et rapports personnalisables pour entreprises.',
      image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1200&auto=format&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'Data Viz'
    },
    {
      title: 'Social Media App',
      description: 'Réseau social avec messagerie instantanée, partage de contenu et système de recommandations.',
      image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200&auto=format&fit=crop',
      technologies: ['Next.js', 'GraphQL', 'Prisma', 'AWS'],
      category: 'Full Stack'
    },
    {
      title: 'Portfolio Website',
      description: 'Site portfolio responsive avec animations fluides et optimisation SEO pour un developpeur .',
      image: '/src/assets/portfolio.png',
      technologies: ['Next.js', 'Tailwind', 'React'],
      category: 'Frontend'
    },
   
  ];

  const categories = ['Tous', 'Full Stack', 'Frontend', 'Backend', 'Data Viz'];
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
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      onClick={() => handleProjectAction('demo', project.title)}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                    >
                      <Eye size={16} className="mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleProjectAction('code', project.title)}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                    {project.category}
                  </span>
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

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleProjectAction('demo', project.title)}
                    className="flex-1 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Voir le projet
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleProjectAction('code', project.title)}
                    className="text-gray-400 hover:text-white hover:bg-slate-700/50"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;