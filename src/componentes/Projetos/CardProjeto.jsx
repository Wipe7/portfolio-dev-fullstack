// src/componentes/Projetos/CardProjeto.jsx
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function CardProjeto({ projeto, delay }) {
  const { titulo, descricao, imagem, tecnologias, linkDemo, linkGithub } = projeto;

  return (
    <motion.div
      variants={{
        oculto: { opacity: 0, y: 20 },
        visivel: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5,
            delay,
          } 
        }
      }}
      className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-lg overflow-hidden shadow-lg border border-indigo-100 dark:border-slate-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={imagem} 
          alt={titulo} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{titulo}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 h-12 overflow-hidden">{descricao}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-slate-700 dark:text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <a 
            href={linkDemo} 
            className="flex items-center text-sm font-medium gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
          <a 
            href={linkGithub} 
            className="flex items-center text-sm font-medium gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            <span>Código</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default CardProjeto;