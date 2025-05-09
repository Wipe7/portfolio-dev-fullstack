// src/componentes/Projetos/Projetos.jsx
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import CardProjeto from "./CardProjeto";

// Dados dos projetos
const projetos = [
  {
    id: 1,
    titulo: "Perfil de uma Psicóloga",
    descricao: "Landing page responsiva para uma psicóloga, com informações sobre serviços e agendamento online.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["React", "Node.js"],
    linkDemo: "https://ladding-page-psicologa.vercel.app/",
    linkGithub: "https://github.com/Wipe7/ladding-page-psicologa",
  },
  {
    id: 2,
    titulo: "Perfil para um convite de aniversário dev",
    descricao: "Um exercicio de um convite de aniversário com tema de desenvolvedor, a pedido da escola.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["ScSS", "HTML", "JavaScript"],
    linkDemo: "https://aniversariodev-ebac.vercel.app/",
    linkGithub: "https://github.com/Wipe7/aniversariodev",
  },
  {
    id: 3,
    titulo: "Desenvolvimento de um jogo da memória em HTML5 e CSS",
    descricao: "Um jogo da memória que consistem em enfrentar uma IA e conseguir encontrar pares de cartas em menos tempo do que a IA.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkDemo: "https://jogo-memoria-ia.vercel.app/",
    linkGithub: "https://github.com/Wipe7/Jogo-memoria-ia",
  },
  {
    id: 4,
    titulo: "Página de uma academia",
    descricao: "Apenas um esboço de site para uma academia ficticia, com intuito de prática.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    linkDemo: "https://pagina-da-academia.vercel.app/index.html",
    linkGithub: "https://github.com/Wipe7/pagina_da_academia",
  },
]


function Projetos() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const controles = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controles.start("visivel");
    }
  }, [controles, inView]);

  const varianteContainer = {
    oculto: { opacity: 0 },
    visivel: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={varianteContainer}
          initial="oculto"
          animate={controles}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={{
              oculto: { opacity: 0, y: -20 },
              visivel: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            Meus Projetos
          </motion.h2>
          
          <motion.p
            variants={{
              oculto: { opacity: 0, y: -20 },
              visivel: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400"
          >
            Confira abaixo alguns dos meus trabalhos mais recentes. Cada projeto representa 
            um desafio único e uma oportunidade de aprendizado e crescimento profissional.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <CardProjeto 
                key={projeto.id} 
                projeto={projeto} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projetos;