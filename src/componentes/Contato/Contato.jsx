// src/componentes/Contato/Contato.jsx
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [mensagemEnvio, setMensagemEnvio] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensagemEnvio(null);
    
    // Simulação de envio
    setTimeout(() => {
      console.log('Dados enviados:', formData);
      setMensagemEnvio({
        tipo: 'sucesso',
        texto: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
      });
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
      setEnviando(false);
    }, 1500);
  };

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

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="oculto"
          animate={controles}
          variants={{
            oculto: { opacity: 0 },
            visivel: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={{
              oculto: { opacity: 0, y: -20 },
              visivel: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            Entre em Contato
          </motion.h2>
          
          <motion.p
            variants={{
              oculto: { opacity: 0, y: -20 },
              visivel: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400"
          >
            Tem um projeto em mente ou deseja conversar sobre oportunidades de trabalho? 
            Ficarei feliz em responder suas perguntas!
          </motion.p>
          
          <div className="grid md:grid-cols-5 gap-8">
            <motion.div 
              variants={{
                oculto: { opacity: 0, x: -30 },
                visivel: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="md:col-span-2"
            >
              <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700">
                <h3 className="text-xl font-medium mb-6 text-indigo-600 dark:text-indigo-400">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="text-indigo-600 dark:text-indigo-400" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:joao@exemplo.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        wpeixototeixeira@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Linkedin className="text-indigo-600 dark:text-indigo-400" size={20} />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/william-peixoto-b9216699/" className="text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/william-peixoto
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Github className="text-indigo-600 dark:text-indigo-400" size={20} />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href="https://github.com/Wipe7" className="text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        github.com/Wipe7
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-4">Disponível para:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Projetos freelance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Oportunidades remotas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Consultorias</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={{
                oculto: { opacity: 0, x: 30 },
                visivel: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
              }}
              className="md:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700">
                <h3 className="text-xl font-medium mb-6 text-indigo-600 dark:text-indigo-400">Envie uma mensagem</h3>
                
                {mensagemEnvio && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    mensagemEnvio.tipo === 'sucesso' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {mensagemEnvio.texto}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2 text-gray-600 dark:text-gray-400">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-600 dark:text-gray-400">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block mb-2 text-gray-600 dark:text-gray-400">Assunto</label>
                  <input
                    type="text"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Como posso ajudar?"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 text-gray-600 dark:text-gray-400">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Descreva seu projeto ou deixe sua mensagem..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                  {!enviando && <ExternalLink size={18} />}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contato;