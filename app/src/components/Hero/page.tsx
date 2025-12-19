"use client";

import { motion } from 'motion/react';
import { Sparkles, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-400">
      {/* Animated Background Elements - Valorant Style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white/20 rotate-45"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 border-2 border-white/10 rounded-full"
        />

        {/* Diagonal Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: '100vw', opacity: [0, 0.3, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.5,
                ease: 'linear',
              }}
              className="absolute h-0.5 bg-white/30 w-64"
              style={{ top: `${20 + i * 15}%`, transform: 'rotate(-45deg)' }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Avatar Image */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30" />
              <Image
                src="https://images.unsplash.com/photo-1618413712329-45c9ebbe8e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHZ0dWJlciUyMGF2YXRhcnxlbnwxfHx8fDE3NjYxNDM1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="VTuber Avatar"
                fill
                className="relative rounded-full border-4 border-white shadow-2xl object-cover"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 border-2 border-dashed border-white/40 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-white/90 text-sm sm:text-base tracking-widest uppercase">Virtual Entertainer</span>
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            MIKU
            <span className="block text-3xl sm:text-5xl lg:text-6xl mt-2 text-emerald-100">KAWAII</span>
          </h1>

          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Welcome to my virtual world! Join me on adventures, gaming streams, and fun content every week! 🎮✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-emerald-600 rounded-full flex items-center gap-2 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              <span className="tracking-wider">WATCH STREAM</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full tracking-wider hover:bg-white/10 transition-colors"
            >
              JOIN COMMUNITY
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
