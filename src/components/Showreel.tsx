'use client';

import { motion } from 'framer-motion';

export default function Showreel() {
  return (
    <section id="showreel" className="min-h-screen flex items-center justify-center py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-7xl font-light mb-12 tracking-tight text-gray-900">
            Шоурилс
          </h2>
          <div className="relative aspect-video bg-gray-100 rounded-none overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/images/profile.jpg"
            >
              <source src="/videos/showreel.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 