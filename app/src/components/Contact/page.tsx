"use client";

import { motion } from 'motion/react';
import { Twitter, Twitch, MessageCircle, Mail, Sparkles } from 'lucide-react';

export default function Contact() {
  const socials = [
    {
      name: 'Twitter',
      icon: Twitter,
      handle: '@MikuKawaii',
      link: '#',
      color: 'from-blue-500 to-blue-400',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
    },
    {
      name: 'Twitch',
      icon: Twitch,
      handle: 'MikuKawaii',
      link: '#',
      color: 'from-purple-500 to-purple-400',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      handle: 'Join Server',
      link: '#',
      color: 'from-indigo-500 to-indigo-400',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100',
    },
    {
      name: 'Email',
      icon: Mail,
      handle: 'contact@miku.vt',
      link: '#',
      color: 'from-emerald-500 to-green-400',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
        />
      </div>

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
            <span className="text-emerald-600 text-sm tracking-widest uppercase">Let&apos;s Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            JOIN THE
            <span className="block text-emerald-600 mt-2">COMMUNITY</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Follow me on social media and join our amazing community! Let&apos;s stay connected! 💚✨
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

              {/* Card */}
              <div className={`relative ${social.bgColor} ${social.hoverColor} rounded-2xl p-6 border-2 border-gray-100 group-hover:border-transparent transition-all duration-300 shadow-lg`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{social.name}</h3>
                    <p className="text-sm text-gray-600">{social.handle}</p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${social.color} opacity-10 rotate-45`} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-400 rounded-3xl blur-2xl opacity-20" />
          
          <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-400 rounded-3xl p-12 text-center shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute top-8 right-8 opacity-20"
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-8 left-8 opacity-20"
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>

            <h3 className="text-3xl sm:text-4xl text-white mb-4">
              Ready to Join the Adventure?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe and turn on notifications so you never miss a stream! Let&apos;s make amazing memories together! 🎮🌟
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-emerald-600 rounded-full tracking-wider shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                SUBSCRIBE NOW
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full tracking-wider hover:bg-white/10 transition-colors"
              >
                SUPPORT ME
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

}
