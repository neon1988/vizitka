'use client';

import { FaPhone, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function Contact() {
  const phoneNumber = "+79196505340";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Здесь будет логика отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-normal mb-6 tracking-tight text-gray-900">Свяжитесь со мной</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Готов обсудить ваше мероприятие и ответить на все вопросы
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex items-center space-x-6 group p-6 bg-white hover:bg-gray-100 transition-colors"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-white transition-colors">
                    <FaPhone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 text-gray-900">Телефон</h3>
                    <p className="text-gray-700">{phoneNumber}</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-6">
                  <a 
                    href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 hover:bg-white transition-colors"
                  >
                    <FaWhatsapp className="w-6 h-6 text-gray-900" />
                  </a>
                  <a 
                    href={`https://t.me/${phoneNumber.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 hover:bg-white transition-colors"
                  >
                    <FaTelegram className="w-6 h-6 text-gray-900" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-0 focus:outline-none text-gray-900"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-0 focus:outline-none text-gray-900"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-0 focus:outline-none resize-none text-gray-900"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-4 text-lg font-normal hover:bg-gray-900 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
} 