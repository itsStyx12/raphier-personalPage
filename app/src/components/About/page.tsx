"use client";

import { motion } from 'motion/react';
import { Sparkles, Star, Tv } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Star, label: 'Followers', value: '150K+' },
    { icon: Tv, label: 'Streams', value: '500+' },
    { icon: Sparkles, label: 'Videos', value: '200+' },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            MEET YOUR
            <span className="block text-emerald-600 mt-2">VIRTUAL IDOL</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Hi! I&apos;m Miku Kawaii, your favorite virtual entertainer! I love playing games, singing, and chatting with my amazing community. Every stream is a new adventure, and I can&apos;t wait to share it with you! 🎮🎵
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether it&apos;s epic gaming moments, karaoke sessions, or just hanging out, there&apos;s always something fun happening here. Join me and let&apos;s make unforgettable memories together!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100"
                >
                  <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl text-emerald-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills/Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {['Gaming', 'Singing', 'Art', 'Chatting', 'Anime'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white border-2 border-emerald-200 text-emerald-700 rounded-full text-sm tracking-wide hover:bg-emerald-50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-400 rounded-3xl blur-xl opacity-20" />
              
              <div className="relative bg-gradient-to-br from-emerald-100 to-green-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1705290640944-16e5ee669c2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW0lMjBzZXR1cHxlbnwxfHx8fDE3NjYwNTcwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Streaming Setup"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border-2 border-emerald-200"
              >
                <Sparkles className="w-8 h-8 text-emerald-600" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-sm">🎮 LIVE NOW</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
