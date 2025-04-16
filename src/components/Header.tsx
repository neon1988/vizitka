'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="text-2xl font-light text-gray-900">
              Олег Лаврентьев
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/#about" className="text-gray-900 hover:text-gray-600 transition-colors">
                Обо мне
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/#vizitka" className="text-gray-900 hover:text-gray-600 transition-colors">
                Визитка
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/#showreel" className="text-gray-900 hover:text-gray-600 transition-colors">
                Шоурилс
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/#interview" className="text-gray-900 hover:text-gray-600 transition-colors">
                Интервью
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/#contact" className="text-gray-900 hover:text-gray-600 transition-colors">
                Контакты
              </Link>
            </motion.div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
} 