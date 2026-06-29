import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../../application/hooks/useScrollAnimation';
import { Card } from '../ui/Card';
import { ExternalLink, Volume2, VolumeX, Play, Pause, Smartphone, Globe } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Undangan Pernikahan Digital',
    description: 'Microsite undangan pernikahan interaktif dengan transisi menarik dan desain estetik untuk momen spesial.',
    videoUrl: '/portofolio/porto1.mp4',
    link: 'https://www.tiktok.com/@halomomenttech/video/7634564558006390037',
    type: 'TikTok Video',
    isMobile: true
  },
  {
    id: 2,
    title: 'Kado Digital Anniversary',
    description: 'Ungkapan rasa sayang melalui galeri kenangan digital, pesan romantis, dan pemutar musik latar.',
    videoUrl: '/portofolio/porto2.mp4',
    link: 'https://www.tiktok.com/@halomomenttech/video/7635698404542123285',
    type: 'TikTok Video',
    isMobile: true
  },
  {
    id: 3,
    title: 'Ucapan Ulang Tahun',
    description: 'Microsite interaktif untuk merayakan ulang tahun teman atau pasangan dengan cara yang unik.',
    videoUrl: '/portofolio/porto3.mp4',
    link: 'https://www.tiktok.com/@halomomenttech/video/7631590559777312020',
    type: 'TikTok Video',
    isMobile: true
  },
  {
    id: 4,
    title: 'Ucapan Hari Raya Idul Fitri',
    description: 'Microsite ucapan Idul Fitri interaktif dengan transisi menarik dan desain estetik untuk momen spesial.',
    videoUrl: '/portofolio/porto4.mp4',
    link: 'https://sawitweb.vercel.app',
    type: 'Live Website',
    isMobile: false
  },
  {
    id: 5,
    title: 'Ucapan Hari Raya Idul Fitri',
    description: 'Ucapan digital interaktif menyambut Hari Raya Idul Fitri lengkap dengan kartu ucapan dan musik bertema lebaran.',
    videoUrl: '/portofolio/porto5.mp4',
    link: 'https://idulfitri.temc.web.id',
    type: 'Live Website',
    isMobile: false
  },
  {
    id: 6,
    title: 'Catatan Memori Video',
    description: 'Catatan memori digital dengan desain interaktif untuk mengabadikan momen spesial.',
    videoUrl: '/portofolio/porto6.mp4',
    link: 'https://www.tiktok.com/@halomomenttech/video/7656725932471831829',
    type: 'TikTok Video',
    isMobile: false
  }
];

const PortfolioCard = ({ item }) => {
  const videoRef = useRef(null);
  const bgVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      if (bgVideoRef.current) {
        bgVideoRef.current.muted = true; // Background video should always be muted
      }
      setIsMuted(newMuteState);
    }
  };

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(err => console.log(err));
        if (bgVideoRef.current) {
          bgVideoRef.current.play().catch(err => console.log(err));
        }
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        if (bgVideoRef.current) {
          bgVideoRef.current.pause();
        }
        setIsPlaying(false);
      }
    }
  };

  return (
    <Card className="h-full w-full group overflow-hidden flex flex-col border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] hover:shadow-xl transition-all duration-300 rounded-2xl">
      {/* Video Preview Container */}
      <div 
        className="relative overflow-hidden bg-black flex items-center justify-center cursor-pointer h-72 w-full"
        onClick={togglePlay}
      >
        {/* Blurred background video to fit portrait/landscape video mix without black sidebars */}
        <video
          ref={bgVideoRef}
          src={item.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 pointer-events-none"
        />

        {/* Sharp foreground video */}
        <video
          ref={videoRef}
          src={item.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="relative z-10 max-w-full max-h-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
        />
        
        {/* Control Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-20">
          <span className="text-[10px] md:text-xs font-medium text-white/90 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
            {item.isMobile ? 'Tampilan Mobile' : 'Tampilan Desktop'}
          </span>
          <div className="flex gap-2">
            <button
              onClick={toggleMute}
              className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm cursor-pointer"
              title={isMuted ? "Aktifkan Suara" : "Senyapkan"}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <button
              onClick={togglePlay}
              className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm cursor-pointer"
              title={isPlaying ? "Jeda" : "Putar"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[var(--color-accent-primary)] uppercase tracking-wider">
              {item.type}
            </span>
            {item.isMobile ? (
              <Smartphone size={15} className="text-[var(--color-text-secondary)] opacity-60" />
            ) : (
              <Globe size={15} className="text-[var(--color-text-secondary)] opacity-60" />
            )}
          </div>
          <h3 className="text-lg font-bold mb-2 text-[var(--color-text-primary)] leading-snug">
            {item.title}
          </h3>
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
            {item.description}
          </p>
        </div>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-hover)] text-white font-semibold transition-all duration-300 shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 text-sm cursor-pointer"
        >
          Lihat Project <ExternalLink size={14} />
        </a>
      </div>
    </Card>
  );
};

export const Portfolio = () => {
  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-[var(--color-accent-primary)] font-semibold mb-2 block uppercase text-sm tracking-wider">
            Contoh Produk
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold text-[var(--color-text-primary)]">
            Apa yang Bisa Kami Buat
          </motion.h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <motion.div 
              key={item.id} 
              variants={fadeUp}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex"
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
