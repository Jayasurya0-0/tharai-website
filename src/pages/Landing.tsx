
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Handmade Heritage.",
    subtitle: "Chettinad Heritage ; Reimagined",
    desc: "Sustainable, earthen, and artistic Athangudi tiles that tell a story of 200 years.",
    img: "/src/assets/images/tharai_hero_mansion_1779180591581.png"
  },
  {
    title: "Artistic Earth.",
    subtitle: "Natural Pigments ; Hand Pressed",
    desc: "Every tile is a unique piece of art, crafted with local sand and mineral oxides.",
    img: "/src/assets/images/tharai_courtyard_tiles_1779180880610.png"
  },
  {
    title: "Modern Legacy.",
    subtitle: "Traditional Craft ; Modern Spaces",
    desc: "Bringing Timeless South Indian design to contemporary luxury interiors.",
    img: "/src/assets/images/tharai_dining_tiles_1779180899363.png"
  }
];

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <motion.img
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: 'easeOut' }}
              src={slides[currentSlide].img}
              className="w-full h-full object-cover"
              alt="THARAI Heritage"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <span className="text-ivory/80 uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block">
                {slides[currentSlide].subtitle}
              </span>
              <h1 className="text-6xl md:text-9xl text-ivory font-serif leading-[0.85] tracking-tighter">
                {slides[currentSlide].title.split('.')[0]}<span className="italic font-light">.</span>
              </h1>
              <p className="text-ivory/90 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mt-10">
                {slides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <Link
              to="/products"
              className="bg-terracotta text-ivory px-12 py-5 rounded-full text-[10px] uppercase tracking-widest hover:bg-burnt-clay transition-all duration-300 shadow-2xl shadow-terracotta/40 flex items-center group"
            >
              Explore Collection
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-12 py-5 text-ivory border border-white/30 rounded-full text-[10px] uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 left-6 lg:left-12 flex space-x-4 z-20">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-10 right-12 hidden lg:flex items-center space-x-6 z-20">
            {slides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={cn(
                    "h-1 transition-all duration-500 rounded-full",
                    currentSlide === idx ? "w-12 bg-mustard" : "w-6 bg-white/30 hover:bg-white/60"
                  )}
                />
            ))}
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 lg:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-terracotta font-medium tracking-[0.3em] uppercase text-xs">Authentic Craft</span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                An artistic legacy baked in the <span className="italic">South Indian sun.</span>
              </h2>
            </div>
            <p className="text-charcoal/70 text-lg leading-relaxed font-light">
              Athangudi tiles are not just flooring; they are an emotion. 
              Each tile is individually handmade using local sand, oxide pigments, 
              and a proprietary cement recipe that has been passed down through generations of artisans.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-charcoal/10 pt-12">
              <div className="space-y-2">
                <span className="text-4xl font-serif text-mustard">200+</span>
                <p className="text-sm uppercase tracking-widest text-charcoal/50">Year Legacy</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-serif text-oxide">100%</span>
                <p className="text-sm uppercase tracking-widest text-charcoal/50">Handmade</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center text-charcoal font-medium group uppercase tracking-widest text-sm">
              Discover the process
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform text-terracotta" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="/src/assets/images/tharai_tile_craftsmanship_1779180613274.png"
                className="w-full h-full object-cover"
                alt="Athangudi Tile Craftsmanship"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-sand rounded-[24px] p-8 hidden md:block shadow-xl">
              <Quote className="text-terracotta mb-4" size={40} />
              <p className="font-serif italic text-lg leading-snug">
                "Small details make perfection, and perfection is no small detail."
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-4 text-charcoal/40">&mdash; Heritage Artisan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-indigo font-medium tracking-[0.3em] uppercase text-xs">The Collection</span>
              <h2 className="text-5xl md:text-6xl font-serif">Signature series.</h2>
            </div>
            <Link to="/products" className="text-sm uppercase tracking-widest border-b border-charcoal/20 pb-2 hover:border-terracotta transition-colors">
              View All Patterns
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Classic Earth",
                desc: "Original terracotta and ochre palettes.",
                img: "/src/assets/images/tharai_tile_pattern_1_1779180632584.png",
                color: "bg-terracotta/5"
              },
              {
                title: "Teak & Indigo",
                desc: "Modern contrasts with traditional roots.",
                img: "/src/assets/images/regenerated_image_1779190234687.png",
                color: "bg-indigo/5"
              },
              {
                title: "Oxide Sage",
                desc: "Muted greens inspired by Chettinad architecture.",
                img: "/src/assets/images/regenerated_image_1779190316535.jpg",
                color: "bg-oxide/5"
              }
            ].map((item, idx) => (
              <motion.div
                whileHover={{ y: -15 }}
                key={idx}
                className={cn("group rounded-[24px] p-8 overflow-hidden transition-all duration-500", item.color)}
              >
                <div className="aspect-square mb-8 overflow-hidden rounded-[16px] shadow-lg">
                   <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-charcoal/50 font-light mb-6 text-sm">{item.desc}</p>
                <button className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-ivory transition-all duration-300">
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-[48px] bg-charcoal relative overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute inset-0 z-0 opacity-20">
                <img src="/src/assets/images/tharai_hero_mansion_1779180591581.png" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 space-y-10">
                <h2 className="text-5xl md:text-7xl text-ivory font-serif leading-tight">
                    Transform your space <br className="hidden md:block"/> into a <span className="italic text-mustard">living museum.</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/experience" className="bg-ivory text-charcoal px-12 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-mustard hover:text-ivory transition-all w-full sm:w-auto">
                        Interactive AR Experience
                    </Link>
                    <Link to="/contact" className="text-ivory px-12 py-5 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto">
                        Inquiry for Projects
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
