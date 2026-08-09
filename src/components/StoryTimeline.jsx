import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PhoneCall, HeartHandshake, Eye, Sparkles, Calendar, Compass } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { loveData } from '../data/loveData';

const timelineEvents = [
  {
    title: 'FIRST CONVERSATION',
    date: loveData.firstMeetingDate || 'The Beginning',
    icon: MessageSquare,
    text: 'Our story started with a simple conversation... I never knew that little conversation would become something this important.',
    accent: 'from-blush-400 to-roseAccent',
  },
  {
    title: 'FIRST CALL',
    date: 'Late Night Talks',
    icon: PhoneCall,
    text: 'That first call somehow made you feel a little closer.',
    accent: 'from-gold-400 to-amber-500',
  },
  {
    title: 'FIRST "I LOVE YOU"',
    date: 'A Golden Moment',
    icon: Sparkles,
    text: 'Three words that changed everything.',
    accent: 'from-roseAccent to-red-500',
  },
  {
    title: 'FIRST MEETING',
    date: 'Unforgettable Day',
    icon: Eye,
    text: 'After all those conversations, finally seeing you in front of me felt unreal.',
    accent: 'from-amber-300 to-gold-500',
  },
  {
    title: 'FIRST HUG',
    date: 'Safe in Your Arms',
    icon: HeartHandshake,
    text: 'One hug. A thousand feelings. A memory I still carry.',
    accent: 'from-rose-400 to-wine-600',
  },
  {
    title: '4 YEARS',
    date: '48 Months of Us',
    icon: Calendar,
    text: 'Somehow, four years passed... and I still choose you.',
    accent: 'from-gold-300 to-gold-600',
  },
  {
    title: '2 YEARS OF LONG DISTANCE',
    date: 'Across the Distance',
    icon: Compass,
    text: 'Distance changed the way we love, but it never changed how much I love you.',
    accent: 'from-roseAccent-glow to-wine-500',
  },
];

export default function StoryTimeline() {
  return (
    <section id="story" className="relative py-20 px-4 sm:px-6 md:px-12 bg-obsidian overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-wine-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          chapter="CHAPTER 02"
          title="Our Story ❤️"
          subtitle="Some people become memories. You became my life."
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12 md:mt-16">
          {/* Glowing Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-gold-400/40 via-roseAccent/50 to-gold-400/40 shadow-[0_0_12px_rgba(212,175,55,0.3)]" />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  } group`}
                >
                  {/* Timeline Node Center Marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-wine-950 border-2 border-gold-500 flex items-center justify-center shadow-[0_0_16px_rgba(212,175,55,0.4)] z-20 group-hover:scale-110 group-hover:border-roseAccent transition-transform duration-300">
                    <Icon className="w-5 h-5 text-gold-300 group-hover:text-roseAccent transition-colors duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 border border-gold-500/20 shadow-xl relative overflow-hidden">
                      {/* Top Accent Gradient Bar */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`}
                      />

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 font-medium">
                          {item.date}
                        </span>
                        <span className="text-[10px] font-mono text-blush-400/50">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gold-100 font-semibold tracking-wide mb-2">
                        {item.title}
                      </h3>

                      <p className="text-blush-200/90 text-sm sm:text-base leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
