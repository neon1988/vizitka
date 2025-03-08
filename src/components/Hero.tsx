'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl font-normal tracking-tight mb-6 text-gray-900">
              Ведущий
              <br />
              мероприятий
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Создаю незабываемые впечатления и яркие эмоции на вашем празднике
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center"
          >
            <a 
              href="#about"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-900 transition-colors duration-300"
            >
              <FaArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
} 