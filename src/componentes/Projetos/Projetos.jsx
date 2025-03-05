// src/componentes/Projetos/Projetos.jsx
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import CardProjeto from "./CardProjeto";

// Dados dos projetos
const projetos = [
  {
    id: 1,
    titulo: "E-commerce Boutique Virtual",
    descricao: "Plataforma completa de e-commerce com painel administrativo, pagamentos online e gestão de estoque.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
    linkDemo: "https://exemplo.com/demo1",
    linkGithub: "https://github.com/seuusuario/projeto1",
  },
  {
    id: 2,
    titulo: "Dashboard Financeiro",
    descricao: "Dashboard interativo para visualização de dados financeiros com gráficos em tempo real e análises estatísticas.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["React", "TypeScript", "GraphQL", "D3.js"],
    linkDemo: "https://exemplo.com/demo2",
    linkGithub: "https://github.com/seuusuario/projeto2",
  },
  {
    id: 3,
    titulo: "App de Tarefas",
    descricao: "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em equipe e fluxos de trabalho.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["Next.js", "Tailwind CSS", "Supabase"],
    linkDemo: "https://exemplo.com/demo3",
    linkGithub: "https://github.com/seuusuario/projeto3",
  },
  {
    id: 4,
    titulo: "Sistema de Agendamento",
    descricao: "Sistema de reservas e agendamento online com calendários interativos e notificações automáticas.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["React", "Node.js", "PostgreSQL", "Redis"],
    linkDemo: "https://exemplo.com/demo4",
    linkGithub: "https://github.com/seuusuario/projeto4",
  },
  {
    id: 5,
    titulo: "CMS Customizado",
    descricao: "Sistema de gerenciamento de conteúdo personalizado com editor WYSIWYG e controle de versões.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["React", "Node.js", "MongoDB", "AWS S3"],
    linkDemo: "https://exemplo.com/demo5",
    linkGithub: "https://github.com/seuusuario/projeto5",
  },
  {
    id: 6,
    titulo: "API de Microserviços",
    descricao: "Arquitetura de microserviços para processamento de pagamentos e gestão de pedidos com alta escalabilidade.",
    imagem: "/api/placeholder/800/600",
    tecnologias: ["Node.js", "Docker", "Kubernetes", "RabbitMQ"],
    linkDemo: "https://exemplo.com/demo6",
    linkGithub: "https://github.com/seuusuario/projeto6",
  },
];

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