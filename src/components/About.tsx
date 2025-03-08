'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaTrophy, FaRegSmile } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-6xl font-normal mb-6 tracking-tight text-gray-900">
              Меня зовут Олег Лаврентьев
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Я профессиональный ведущий мероприятий с опытом более 15 лет
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div variants={itemVariants} className="space-y-12">
              <div className="prose prose-lg">
                <p className="text-xl text-gray-900 leading-relaxed">
                  Работаю с лучшими агентствами мира. Веду мероприятия для людей и компаний, 
                  которые ценят хороший юмор, имеют прекрасный вкус и стиль.
                </p>
                
                <p className="text-xl text-gray-900 leading-relaxed">
                  Мой подход - это идеальный баланс между элегантностью и весельем, традициями и 
                  современностью. Каждое мероприятие для меня - это возможность создать 
                  незабываемые моменты.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-6 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <FaTrophy className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 text-gray-900">500+ мероприятий</h3>
                    <p className="text-gray-700">Успешно проведенных событий</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-6 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <FaMapMarkerAlt className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 text-gray-900">Вся Россия</h3>
                    <p className="text-gray-700">Работаю по всей стране</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-6 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <FaRegSmile className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 text-gray-900">98% довольных клиентов</h3>
                    <p className="text-gray-700">Гарантия качества</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative aspect-[4/5] bg-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50"></div>
              <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-full h-full overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-light text-gray-900">
                  ФОТО
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 