"use client";

import { motion } from 'motion/react';
import { Sparkles, Play } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const videos = [
    {
      title: 'Epic Valorant Clutch!',
      thumbnail: 'https://images.unsplash.com/photo-1705290640944-16e5ee669c2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW0lMjBzZXR1cHxlbnwxfHx8fDE3NjYwNTcwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '12:34',
      views: '50K',
    },
    {
      title: 'Karaoke Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1618413712329-45c9ebbe8e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHZ0dWJlciUyMGF2YXRhcnxlbnwxfHx8fDE3NjYxNDM1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '08:45',
      views: '35K',
    },
    {
      title: 'Community Game Night',
      thumbnail: 'https://images.unsplash.com/photo-1764435447972-97ddaf8a701b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyZWVuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYxNDM1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '15:20',
      views: '42K',
    },
    {
      title: 'Q&A Stream',
      thumbnail: 'https://images.unsplash.com/photo-1705290640944-16e5ee669c2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW0lMjBzZXR1cHxlbnwxfHx8fDE3NjYwNTcwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '10:15',
      views: '28K',
    },
    {
      title: 'Art Stream - Drawing',
      thumbnail: 'https://images.unsplash.com/photo-1618413712329-45c9ebbe8e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHZ0dWJlciUyMGF2YXRhcnxlbnwxfHx8fDE3NjYxNDM1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '18:30',
      views: '31K',
    },
    {
      title: 'Funny Moments Compilation',
      thumbnail: 'https://images.unsplash.com/photo-1764435447972-97ddaf8a701b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyZWVuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYxNDM1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '14:22',
      views: '65K',
    },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4">
            <Play className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm tracking-widest uppercase">Video Gallery</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            LATEST
            <span className="block text-emerald-600 mt-2">CONTENT</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Check out my recent streams and highlights! 🎬✨
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:bg-emerald-500 transition-colors">
                      <Play className="w-8 h-8 text-emerald-600 group-hover:text-white ml-1" fill="currentColor" />
                    </div>
                  </motion.div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
                    {video.duration}
                  </div>

                  {/* Views */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500 text-white text-xs rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {video.views} views
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 group-hover:border-emerald-200 transition-colors rounded-b-2xl">
                  <h3 className="text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full tracking-wider shadow-lg hover:shadow-xl transition-shadow"
          >
            VIEW ALL VIDEOS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
