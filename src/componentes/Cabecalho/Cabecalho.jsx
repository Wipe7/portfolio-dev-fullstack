// src/componentes/Cabecalho/Cabecalho.jsx
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import MenuMobile from "./MenuMobile";

function Cabecalho({ paginaAtual, alternarPagina }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);
  const [scrollAtivo, setScrollAtivo] = useState(false);

  const alternarMenu = () => setMenuAberto(!menuAberto);
  
  const alternarTema = () => {
    const novoModo = !modoEscuro;
    setModoEscuro(novoModo);
    document.documentElement.classList.toggle('dark');
    
    localStorage.setItem("tema", novoModo ? "escuro" : "claro");
  };
  useEffect(() => {
    // Verifica preferência salva de tema
    const temaPreferido = localStorage.getItem("tema");
    if (temaPreferido === "escuro") {
      setModoEscuro(true);
      document.documentElement.classList.add("dark");
    } else {
      setModoEscuro(false);
      document.documentElement.classList.remove("dark");
    }

    // Controla transparência do cabeçalho com scroll
    const manipuladorScroll = () => {
      if (window.scrollY > 50) {
        setScrollAtivo(true);
      } else {
        setScrollAtivo(false);
      }
    };

    window.addEventListener("scroll", manipuladorScroll);
    return () => window.removeEventListener("scroll", manipuladorScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollAtivo
          ? "bg-gradient-to-r from-white/90 to-indigo-50/90 dark:from-slate-900/90 dark:to-indigo-950/90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={() => alternarPagina('inicio')} 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
        >
          William Peixoto 
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            onClick={() => alternarPagina('inicio')} 
            className={`transition-colors ${paginaAtual === 'Inicio' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
          >
            Início
          </a>
          
          {paginaAtual === 'inicio' && (
            <>
              <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Sobre
              </a>
              <a href="#habilidades" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Habilidades
              </a>
            </>
          )}
          
          <a 
            href="#" 
            onClick={() => alternarPagina('projetos')} 
            className={`transition-colors ${paginaAtual === 'projetos' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
          >
            Projetos
          </a>
          
          <a 
            href="#" 
            onClick={() => alternarPagina('contato')} 
            className={`transition-colors ${paginaAtual === 'contato' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
          >
            Contato
          </a>
          
          <button
            onClick={alternarTema}
            className="p-2 rounded-full bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow hover:shadow-md transition-all"
            aria-label="Alternar tema"
          >
            {modoEscuro ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Botão Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={alternarTema}
            className="p-2 mr-2 rounded-full bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow hover:shadow-md transition-all"
            aria-label="Alternar tema"
          >
            {modoEscuro ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={alternarMenu}
            className="p-2 rounded-full bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow hover:shadow-md transition-all"
            aria-label="Menu"
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <MenuMobile 
        aberto={menuAberto} 
        fecharMenu={() => setMenuAberto(false)} 
        paginaAtual={paginaAtual}
        alternarPagina={(pagina) => {
          alternarPagina(pagina);
          setMenuAberto(false);
        }}
      />
    </header>
  );
}

export default Cabecalho;