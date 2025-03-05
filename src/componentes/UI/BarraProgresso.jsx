// src/componentes/UI/BarraProgresso.jsx
import { motion } from "framer-motion";

function BarraProgresso({ nome, nivel }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{nome}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{nivel}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${nivel}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default BarraProgresso;