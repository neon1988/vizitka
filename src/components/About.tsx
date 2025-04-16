'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaTrophy, FaRegSmile, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function About() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1]);

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

  const galleryImages = [
    '/images/photo_2025-04-16_19-00-36.jpg',
    '/images/photo_2025-04-16_19-00-34.jpg',
    '/images/photo_2025-04-16_19-00-31.jpg',
    '/images/photo_2025-04-16_19-00-29.jpg',
    '/images/photo_2025-04-16_18-59-42.jpg',
    '/images/photo_2025-04-16_18-59-38.jpg',
    '/images/photo_2025-04-16_18-59-35.jpg',
    '/images/photo_2025-04-16_18-59-32.jpg'
  ];

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section ref={containerRef} id="about" className="min-h-screen flex items-center justify-center py-32 bg-white relative overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-24 relative"
          >
            <motion.h2 
              className="text-7xl font-light mb-8 tracking-tight text-gray-900 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Меня зовут Олег Лаврентьев
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Я профессиональный ведущий мероприятий с опытом более 15 лет
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div 
              variants={itemVariants} 
              className="space-y-16"
            >
              <div className="prose prose-xl">
                <motion.p 
                  className="text-2xl text-gray-900 leading-relaxed font-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Работаю с лучшими агентствами мира. Веду мероприятия для людей и компаний, 
                  которые ценят хороший юмор, имеют прекрасный вкус и стиль.
                </motion.p>
                
                <motion.p 
                  className="text-2xl text-gray-900 leading-relaxed font-light mt-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Мой подход - это идеальный баланс между элегантностью и весельем, традициями и 
                  современностью. Каждое мероприятие для меня - это возможность создать 
                  незабываемые моменты.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 gap-12">
                <motion.div 
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-8 group cursor-pointer"
                >
                  <motion.div 
                    className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaTrophy className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-light mb-2 text-gray-900">500+ мероприятий</h3>
                    <p className="text-xl text-gray-700 font-light">Успешно проведенных событий</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-8 group cursor-pointer"
                >
                  <motion.div 
                    className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaMapMarkerAlt className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-light mb-2 text-gray-900">Вся Россия</h3>
                    <p className="text-xl text-gray-700 font-light">Работаю по всей стране</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-8 group cursor-pointer"
                >
                  <motion.div 
                    className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaRegSmile className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-light mb-2 text-gray-900">98% довольных клиентов</h3>
                    <p className="text-xl text-gray-700 font-light">Гарантия качества</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] bg-gray-50 rounded-none overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(0)}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Олег Лаврентьев - Ведущий мероприятий"
                  fill
                  className="object-cover object-center transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={src}
                      alt={`Фото мероприятия ${index + 1}`}
                      fill
                      className="object-cover object-center transition-all duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"
                      whileHover={{ opacity: 0.1 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage === 0 ? '/images/profile.jpg' : galleryImages[selectedImage - 1]}
                alt="Просмотр фотографии"
                fill
                className="object-contain"
                priority
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={handlePrevious}
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 