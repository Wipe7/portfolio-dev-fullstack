// src/componentes/SobreMim/Habilidades.jsx
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import BarraProgresso from "../UI/BarraProgresso";

// Lista de tecnologias com nível de conhecimento
const habilidadesFrontend = [
  { nome: "HTML & CSS", nivel: 95 },
  { nome: "JavaScript", nivel: 90 },
  { nome: "TypeScript", nivel: 85 },
  { nome: "React", nivel: 90 },
  { nome: "Next.js", nivel: 80 },
];

const habilidadesBackend = [
  { nome: "Node.js", nivel: 85 },
  { nome: "Express", nivel: 80 },
  { nome: "MongoDB", nivel: 75 },
  { nome: "PostgreSQL", nivel: 75 },
  { nome: "GraphQL", nivel: 70 },
];

const habilidadesOutras = [
  { nome: "Git & GitHub", nivel: 90 },
  { nome: "Metodologias Ágeis", nivel: 85 },
  { nome: "UI/UX Design", nivel: 75 },
  { nome: "Testes Automatizados", nivel: 70 },
  { nome: "CI/CD", nivel: 65 },
];

function Habilidades() {
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

  const varianteItem = {
    oculto: { y: 20, opacity: 0 },
    visivel: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={varianteContainer}
          initial="oculto"
          animate={controles}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={varianteItem} className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Minhas Habilidades
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={varianteItem} className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700">
              <h3 className="text-xl font-medium mb-4 text-center text-indigo-600 dark:text-indigo-400">Frontend</h3>
              <div className="space-y-4">
                {habilidadesFrontend.map((skill) => (
                  <BarraProgresso key={skill.nome} nome={skill.nome} nivel={skill.nivel} />
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={varianteItem} className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700">
              <h3 className="text-xl font-medium mb-4 text-center text-indigo-600 dark:text-indigo-400">Backend</h3>
              <div className="space-y-4">
                {habilidadesBackend.map((skill) => (
                  <BarraProgresso key={skill.nome} nome={skill.nome} nivel={skill.nivel} />
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={varianteItem} className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700">
              <h3 className="text-xl font-medium mb-4 text-center text-indigo-600 dark:text-indigo-400">Outros</h3>
              <div className="space-y-4">
                {habilidadesOutras.map((skill) => (
                  <BarraProgresso key={skill.nome} nome={skill.nome} nivel={skill.nivel} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Habilidades;