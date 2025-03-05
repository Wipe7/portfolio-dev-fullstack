// src/App.jsx
import { useState } from "react";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Inicio from "./componentes/Inicio/Inicio";
import SobreMim from "./componentes/SobreMim/SobreMim";
import Habilidades from "./componentes/SobreMim/Habilidades";
import Projetos from "./componentes/Projetos/Projetos";
import Contato from "./componentes/Contato/Contato";
import BotaoWhatsapp from "./componentes/UI/BotaoWhatsapp";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("inicio");

  const alternarPagina = (pagina) => {
    console.log("Alternando para página:", pagina); // Log para debug
    setPaginaAtual(pagina);
    console.log("Estado atualizado para", pagina);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Cabecalho paginaAtual={paginaAtual} alternarPagina={alternarPagina} />
      
      {paginaAtual === "inicio" && (
        <>
          <Inicio alternarPagina={alternarPagina} />
          <SobreMim />
          <Habilidades />
        </>
      )}
      
      {paginaAtual === "projetos" && <Projetos />}
      
      {paginaAtual === "contato" && <Contato />}
      
      <BotaoWhatsapp />
    </div>
    
  );
}

export default App;