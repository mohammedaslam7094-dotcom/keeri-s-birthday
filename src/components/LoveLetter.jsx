import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Feather, Play, Pause, RotateCcw } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { loveData } from '../data/loveData';

export default function LoveLetter() {
  const [isTypewriterActive, setIsTypewriterActive] = useState(false);

  const nicknameGreeting = loveData.nickname 
    ? `${loveData.herName || 'My Love'} (${loveData.nickname})`
    : loveData.herName || 'My Love';

  return (
    <section id="letter" className="relative py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-obsidian via-wine-950/40 to-obsidian overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading
          chapter="CHAPTER 05"
          title="A Letter From Me To You 💌"
          subtitle="Every word written straight from the deepest corner of my heart."
        />

        {/* Warm Cream Parchment Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="parchment-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden text-wine-950 shadow-2xl border border-gold-600/30"
        >
          {/* Gilded Top Wax Seal Emblem */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-wine-900 via-roseAccent to-wine-800 border-2 border-gold-400 shadow-xl flex items-center justify-center text-gold-200">
                <Heart className="w-7 h-7 fill-gold-400/30 text-gold-300 animate-pulse" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-gold-600 animate-spin-slow" />
            </div>
          </div>

          {/* Letter Salutation */}
          <div className="border-b border-wine-900/15 pb-6 mb-8 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-wine-950 tracking-tight">
              Happy Birthday, {nicknameGreeting} ❤️🎂
            </h3>
            <p className="font-script text-xl sm:text-2xl text-wine-800 mt-1">
              For my favorite person in the whole universe
            </p>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 text-wine-950/90 text-fluid-body font-sans leading-relaxed">
            <p className="font-serif text-lg sm:text-xl font-medium text-wine-900 italic">
              Innaiku un birthday. 🥹❤️
            </p>

            <p>
              Indha message type pannumbodhe enakku oru smile varudhu. Because I'm thinking about how lucky I am to have you in my life. 🥰
            </p>

            <p>
              Namma love start panni ippo {loveData.relationshipYears || 4} years aagudhu. ❤️
            </p>

            <p>
              {loveData.relationshipYears || 4} years nu sollumbodhu romba perusa theriyudhu. Aana un kooda irundha ovvoru moment-um enakku innum yesterday maadhiri dhaan feel aagudhu.
            </p>

            <p>
              Namma first conversation, first call, first fight, first 'I love you', first meet, first hug — ellame en heart-la innum fresh-a iruku. ❤️
            </p>

            {/* Journey callout box */}
            <div className="my-6 p-5 rounded-xl bg-wine-900/5 border-l-4 border-roseAccent space-y-2 italic font-serif text-wine-900 text-base sm:text-lg">
              <p className="font-semibold not-italic text-sm uppercase tracking-wider text-wine-800 font-sans">
                Namma Journey:
              </p>
              <p>Namma journey perfect-a irundhadhu illa.</p>
              <p>Sandaigal irundhudhu. Misunderstandings irundhudhu. Tears irundhudhu.</p>
              <p>Happy moments irundhudhu. Crazy laughter irundhudhu.</p>
              <p className="font-medium text-roseAccent pt-1 not-italic">
                Aana every time we found our way back to each other. Adhudhaan namma love-oda beauty. ❤️
              </p>
            </div>

            {/* Who you are to me */}
            <div className="space-y-2">
              <p className="font-serif text-lg font-semibold text-wine-900">
                Nee en lover mattum illa.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-wine-900 font-medium list-inside list-disc pl-2">
                <li>Nee en best friend</li>
                <li>En comfort person</li>
                <li>En safe place</li>
                <li>En happiness</li>
                <li>En peace</li>
              </ul>
            </div>

            <p>
              Naan happy-a irundha first-a share panna thonradhu nee dhan. Naan sad-a irundha un kitta pesina konjam light-a feel aagudhu. Enakku enna problem irundhalum, un kitta pesumbodhu everything will be okay nu oru feeling varudhu.
            </p>

            <p>
              Sometimes naan stubborn-a iruppen. Unnecessary-a kovapaduven. Sanda poduven. Aana adhellam temporary. Un mela irukkura love mattum oru naalum temporary illa.
            </p>

            <p className="font-serif italic text-wine-900 text-lg sm:text-xl font-medium">
              Actually, every single day I fall for you a little more. ❤️
            </p>

            {/* Long distance reflection */}
            <div className="my-6 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm uppercase tracking-wider">
                <Feather className="w-4 h-4 text-amber-700" />
                <span>And then there is this distance...</span>
              </div>
              <p>
                Namma long distance relationship-ku ippo {loveData.longDistanceYears || 2} years aagudhu. Romba naala unna nerla paakala. 🥺
              </p>
              <p>
                Daily calls, messages, video calls irundhalum, none of them can replace having you beside me.
              </p>
              <p className="italic text-wine-900">
                Un kooda walk pannanum. Un pakkathula ukkanthu pesanum. Un kaiya pidikkanum. Reason illaama unna paathutu irukkanum. Un kooda sirikkanum. Idhellam romba miss panren.
              </p>
              <p className="font-serif italic text-wine-950 font-medium">
                Sometimes call mudinjadhum phone-a vechutu, <span className="text-roseAccent font-bold">"I wish she was here with me right now"</span> nu yosippen.
              </p>
            </div>

            <p>
              Un hug-ah romba miss panren. Oru naal unna paatha odane tight-a hug panni, indha {loveData.longDistanceYears || 2} years-la miss pannina ellathayum andha one hug-la sollidanum nu aasai.
            </p>

            <p className="font-serif text-lg font-medium text-wine-900">
              Distance namma rendu perayum separate pannirukkalam. But it never separated my heart from you.
            </p>

            {/* Gratitude block */}
            <div className="space-y-2.5 pt-2 border-t border-wine-900/10">
              <p className="font-semibold text-wine-900">Thank you:</p>
              <p className="italic">✨ Thank you for loving me the way you do.</p>
              <p className="italic">✨ Thank you for understanding me when even I don't understand myself.</p>
              <p className="italic">✨ Thank you for listening to all my random stories, complaints, dreams, fears and everything in between.</p>
              <p className="italic">✨ Thank you for staying even during the difficult days.</p>
            </div>

            <p>
              Un life-la naan always oru reason for your smile-a irukkanum nu aasai. Un dreams ellam achieve panradha paakanum. Un success-ku celebrate pannanum. Un bad days-la un pakkathula nikkkanum.
            </p>

            <p>
              Future-la enna nadandhalum, I want to celebrate many, many more birthdays with you. One day this distance will end. And when it does, I want to make up for every moment we had to spend apart.
            </p>

            <p className="font-medium text-wine-900">
              Until that day, I'll keep loving you, missing you, waiting for you, and choosing you — every single day.
            </p>

            {/* Climax of letter */}
            <div className="pt-4 pb-2 text-center space-y-2">
              <p className="font-serif text-xl sm:text-2xl text-wine-950 font-bold">
                Happy Birthday, my love.
              </p>
              <p className="font-serif text-lg sm:text-xl text-wine-900 italic max-w-lg mx-auto">
                "You are not just someone I love. You are someone I want in my today, my tomorrow, and every future I dream about."
              </p>
              <div className="py-2 flex items-center justify-center gap-2 text-roseAccent font-serif text-xl font-bold">
                <span>I love you. Always. Forever. And a little more every day.</span>
                <Heart className="w-5 h-5 fill-roseAccent animate-pulse" />
              </div>
            </div>
          </div>

          {/* Letter Signature */}
          <div className="mt-10 pt-6 border-t border-wine-900/15 flex flex-col items-end">
            <span className="font-script text-3xl sm:text-4xl text-wine-900">
              — Always yours, {loveData.yourName || 'Aslam'} ❤️
            </span>
            <span className="text-xs font-mono text-wine-900/60 uppercase tracking-widest mt-1">
              Forever & Always Yours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
