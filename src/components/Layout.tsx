import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/products' },
    { name: 'Experience', path: '/experience' },
    { name: 'Recent Work', path: '/recent-work' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Craft Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-700 py-6 px-6 lg:px-12',
        scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-ivory/60 backdrop-blur-sm border-b border-charcoal/5'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-48 flex-shrink-0">
          <Link to="/" className="flex items-center group">
            <img 
              src="/src/assets/images/tharai_official_logo_full_1779186983216.png" 
              alt="THARAI" 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] uppercase tracking-[0.2em] font-bold hover:text-terracotta transition-all relative group whitespace-nowrap',
                location.pathname === link.path ? 'text-terracotta' : 'text-charcoal'
              )}
            >
              {link.name}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-500 group-hover:w-full',
                  location.pathname === link.path && 'w-full'
                )}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center w-48 justify-end flex-shrink-0 space-x-6">
            <Link to="/cart" className="hidden md:flex items-center group">
                <ShoppingBag size={18} className="group-hover:text-terracotta transition-colors" />
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-charcoal"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-ivory z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif hover:text-terracotta transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-terracotta flex items-center space-x-4 pt-4 border-t border-charcoal/5 w-48 justify-center"
            >
                <ShoppingBag size={24} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const footerLinks = [
    { num: '01', name: 'Collection', path: '/products' },
    { num: '02', name: 'Experience', path: '/experience' },
    { num: '03', name: 'Work', path: '/recent-work' },
    { num: '04', name: 'Library', path: '/catalogue' },
    { num: '05', name: 'Calculator', path: '/calculator' },
    { num: '06', name: 'Story', path: '/about' },
    { num: '07', name: 'Studio', path: '/contact' },
    { num: '08', name: 'Legal', path: '#' },
  ];

  return (
    <footer className="bg-ivory border-t border-sand px-6 lg:px-12 py-12 z-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
        {footerLinks.map((link) => (
          <Link key={link.num} to={link.path} className="group py-4">
             <span className="text-[10px] uppercase tracking-widest text-charcoal/20 block mb-3 font-black group-hover:text-terracotta transition-colors transition-duration-500">
               {link.num}
             </span>
             <span className="font-serif text-sm block group-hover:text-terracotta group-hover:translate-x-1 transition-all duration-500">
               {link.name}
             </span>
          </Link>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.2em] text-charcoal/30 uppercase font-bold">
        <p>&copy; 2026 THARAI Heritage Tiles. Handmade with Soil of Chettinad.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-charcoal transition-colors">Instagram</a>
          <a href="#" className="hover:text-charcoal transition-colors">Behance</a>
          <a href="#" className="hover:text-charcoal transition-colors">Catalogues</a>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory font-sans text-charcoal selection:bg-terracotta selection:text-ivory">
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 tile-pattern pointer-events-none opacity-10 z-0" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Side Text (Artistic Flair) */}
      <div className="fixed right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col space-y-8 items-center z-40">
          <div className="w-px h-24 bg-sand" />
          <span className="text-[9px] [writing-mode:vertical-lr] uppercase tracking-[0.4em] font-bold text-charcoal/30">
            Handmade in Tamil Nadu &bull; Est. 1850
          </span>
          <div className="w-2 h-2 rounded-full bg-mustard shadow-lg shadow-mustard/20" />
      </div>

      <Footer />
    </div>
  );
};
