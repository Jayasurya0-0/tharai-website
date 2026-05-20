import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Grid, List, Search, Heart, ShoppingBag } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const products = [
  { id: 1, name: "Kumbakonam Classic", category: "Traditional", size: "10x10", color: "#A44A3F", price: "Starting ₹180 /sqft", img: "/src/assets/images/Tile/IMG (1).jpeg" },
  { id: 2, name: "Chettinad Floral", category: "Classic", size: "8x8", color: "#C89B3C", price: "Starting ₹220 /sqft", img: "/src/assets/images/Tile/IMG (1).jpg" },
  { id: 3, name: "Indigo Lattice", category: "Modern", size: "12x12", color: "#3E4E6D", price: "Starting ₹250 /sqft", img: "/src/assets/images/Tile/IMG (1).png" },
  { id: 4, name: "Terracotta Earth", category: "Minimal", size: "10x10", color: "#C56B52", price: "Starting ₹190 /sqft", img: "/src/assets/images/Tile/IMG (1).webp" },
  { id: 5, name: "Oxide Moss", category: "Heritage", size: "8x8", color: "#5F6B50", price: "Starting ₹210 /sqft", img: "/src/assets/images/Tile/IMG (2).jpg" },
  { id: 6, name: "Royal Mandala", category: "Intricate", size: "12x12", color: "#1B1B1B", price: "Starting ₹320 /sqft", img: "/src/assets/images/Tile/IMG (2).png" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Traditional", "Modern", "Heritage", "Minimal", "Classic"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory || p.name.includes(activeCategory));

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12 min-h-screen bg-ivory">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center space-y-4">
        <h1 className="text-6xl md:text-7xl font-serif">The Collection</h1>
        <p className="text-charcoal/50 max-w-2xl mx-auto font-light">
          From the deep reds of Chettinad earth to the muted greens of colonial mansions. 
          Discover patterns that have defined Indian architecture for centuries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-10">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal/40 flex items-center">
              <Filter size={14} className="mr-2" /> Categories
            </h3>
            <div className="flex flex-wrap lg:flex-column gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full transition-all border",
                    activeCategory === cat 
                      ? "bg-charcoal text-ivory border-charcoal" 
                      : "bg-white text-charcoal/60 border-charcoal/5 hover:border-charcoal/20"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal/40">Finish</h3>
             <div className="space-y-2">
                {['Matte', 'Satin', 'Aged Oxidized'].map(f => (
                    <label key={f} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded border border-charcoal/20 group-hover:border-terracotta transition-colors" />
                        <span className="text-sm font-light text-charcoal/70">{f}</span>
                    </label>
                ))}
             </div>
          </div>
          
          <div className="bg-sand/30 p-8 rounded-[24px] space-y-4">
            <h4 className="font-serif text-lg">Custom Sizing?</h4>
            <p className="text-xs text-charcoal/60 leading-relaxed font-light">
              Don't see the size you need? We create custom molds for project-specific requirements.
            </p>
            <button className="text-terracotta text-xs uppercase tracking-widest font-bold border-b border-terracotta/20 pb-1">Enquire Now</button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-charcoal/40 uppercase tracking-widest">{filteredProducts.length} Results Found</p>
            <div className="flex items-center space-x-4">
                <Search size={18} className="text-charcoal/40" />
                <div className="h-4 w-[1px] bg-charcoal/10" />
                <Grid size={18} className="text-charcoal" />
                <List size={18} className="text-charcoal/20" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={product.id}
                  className="group"
                >
                  <div className="relative aspect-square rounded-[24px] overflow-hidden bg-white shadow-sm border border-charcoal/5 mb-4 card-hover transition-all duration-500">
                    <img 
                      src={product.img} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={product.name}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 space-y-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-terracotta hover:text-white transition-colors">
                            <Heart size={16} />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-charcoal hover:text-white transition-colors">
                            <ShoppingBag size={16} />
                        </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                        <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                            {product.size}
                        </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-serif">{product.name}</h3>
                        <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: product.color }} />
                    </div>
                    <p className="text-charcoal/40 text-sm font-light uppercase tracking-widest">{product.category}</p>
                    <p className="text-terracotta font-medium mt-2">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
