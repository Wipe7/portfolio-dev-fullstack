// src/componentes/Inicio/Inicio.jsx
import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";
import ElementosAnimados from "./ElementosAnimados";

function Inicio({ alternarPagina }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      const { offsetX, offsetY } = e;
      const { width, height } = section.getBoundingClientRect();
      
      const moveX = (offsetX / width - 0.5) * 20;
      const moveY = (offsetY / height - 0.5) * 20;
      
      section.style.backgroundPosition = `${moveX}px ${moveY}px`;
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 overflow-hidden"
    >
      <ElementosAnimados />
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            William Peixoto
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600 dark:text-gray-300">
            Desenvolvedor Full Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Transformando ideias em soluções digitais com código limpo e design elegante.
            Especialista em React, Node.js e arquiteturas escaláveis.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="#"
              onClick={() => alternarPagina('contato')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              Entre em contato
            </a>
            <a
              href="#"
              onClick={() => alternarPagina('projetos')}
              className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-full transition-all transform hover:-translate-y-1 font-medium"
            >
              Ver projetos
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Wipe7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/william-peixoto-b9216699/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Currículo"
            >
              <FileText size={24} />
            </a>
            <a
              href="mailto:wpeixototeixeira@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-indigo-600 dark:text-indigo-400"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
}

export default Inicio;