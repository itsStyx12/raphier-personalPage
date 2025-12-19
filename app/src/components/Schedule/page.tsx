"use client";

import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    {
      day: 'Monday',
      time: '8:00 PM - 11:00 PM',
      activity: 'Gaming Stream',
      game: 'Valorant Ranked',
      color: 'from-emerald-500 to-green-400',
    },
    {
      day: 'Wednesday',
      time: '7:00 PM - 10:00 PM',
      activity: 'Karaoke Night',
      game: 'Singing & Chatting',
      color: 'from-green-500 to-emerald-400',
    },
    {
      day: 'Friday',
      time: '9:00 PM - 12:00 AM',
      activity: 'Variety Stream',
      game: 'Community Games',
      color: 'from-emerald-600 to-green-500',
    },
    {
      day: 'Sunday',
      time: '6:00 PM - 9:00 PM',
      activity: 'Chill Stream',
      game: 'Art & Chat',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section id="schedule" className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-emerald-500 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-green-500 rounded-full" />
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
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm tracking-widest uppercase">Weekly Schedule</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            STREAM
            <span className="block text-emerald-600 mt-2">TIMETABLE</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mark your calendars! Here's when you can catch me live 🗓️✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 group-hover:border-emerald-200 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                      <h3 className="text-2xl text-gray-900">{item.day}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                  </div>
                  <Sparkles className="w-6 h-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-lg text-sm tracking-wide`}>
                    {item.activity}
                  </div>
                  <p className="text-gray-700">{item.game}</p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${item.color} opacity-10 rotate-45`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 max-w-2xl">
            <p className="text-emerald-800">
              <span className="inline-block mr-2">⏰</span>
              All times are in JST (Japan Standard Time). Schedule may change - follow me on social media for updates!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
