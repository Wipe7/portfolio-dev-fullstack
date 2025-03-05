// src/componentes/UI/BotaoWhatsapp.jsx
import { Phone } from "lucide-react";

function BotaoWhatsapp() {
  return (
    <a
      href="https://wa.me/5511987654321"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-600 transition-all z-50 flex items-center justify-center transform hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
}

export default BotaoWhatsapp;