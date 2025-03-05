// src/componentes/SobreMim/SobreMim.jsx
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function SobreMim() {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
        staggerChildren: 0.2,
      },
    },
  };

  const varianteItem = {
    oculto: { y: 20, opacity: 0 },
    visivel: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={varianteContainer}
          initial="oculto"
          animate={controles}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={varianteItem} className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Sobre Mim
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={varianteItem} className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 transform rotate-6"></div>
                <img
                  src="/api/placeholder/400/400"
                  alt="William Peixoto"
                  className="relative z-10 w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
            
            <motion.div variants={varianteItem} className="md:w-2/3">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Olá! Sou <span className="text-indigo-600 dark:text-indigo-400 font-medium"> William Peixoto </span>, 
                um desenvolvedor Full Stack apaixonado por criar soluções digitais 
                inovadoras e escaláveis.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Com mais de 5 anos de experiência no mercado de tecnologia, 
                tenho trabalhado em projetos diversos, desde aplicativos web 
                corporativos até soluções de e-commerce e plataformas SaaS.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Sou especialista em <span className="font-medium">JavaScript/TypeScript</span>, com foco em 
                <span className="font-medium"> React</span> no frontend e <span className="font-medium">Node.js</span> no 
                backend, além de ter experiência com bancos de dados SQL e NoSQL. 
                Minha abordagem combina código limpo, arquiteturas escaláveis 
                e interfaces intuitivas para entregar o melhor valor aos usuários.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SobreMim;