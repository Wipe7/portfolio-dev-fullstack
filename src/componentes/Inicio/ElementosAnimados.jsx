// src/componentes/Inicio/ElementosAnimados.jsx
function ElementosAnimados() {
    return (
      <>
        {/* Elementos de fundo animados */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Elementos de "código" decorativos */}
        <div className="absolute top-20 left-10 text-4xl text-indigo-200 dark:text-indigo-800 opacity-60 font-mono">&lt;html&gt;</div>
        <div className="absolute top-40 left-20 text-3xl text-indigo-200 dark:text-indigo-800 opacity-60 font-mono">&lt;body&gt;</div>
        <div className="absolute bottom-40 right-20 text-3xl text-indigo-200 dark:text-indigo-800 opacity-60 font-mono">&lt;/body&gt;</div>
        <div className="absolute bottom-20 right-10 text-4xl text-indigo-200 dark:text-indigo-800 opacity-60 font-mono">&lt;/html&gt;</div>
      </>
    );
  }
  
  export default ElementosAnimados;