// src/componentes/Cabecalho/MenuMobile.jsx
function MenuMobile({ aberto, fecharMenu, paginaAtual, alternarPagina }) {
    if (!aberto) return null;
  
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950 z-40 flex flex-col items-center justify-center">
        <nav className="flex flex-col items-center space-y-8 text-xl">
          <a 
            href="#" 
            onClick={() => alternarPagina('inicio')}
            className={`transition-colors ${paginaAtual === 'inicio' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
          >
            Início
          </a>
          
          {paginaAtual === 'inicio' && (
            <>
              <a href="#sobre" onClick={fecharMenu} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Sobre
              </a>
              <a href="#habilidades" onClick={fecharMenu} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
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
        </nav>
      </div>
    );
  }
  
  export default MenuMobile;