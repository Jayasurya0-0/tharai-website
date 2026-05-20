import { motion } from 'motion/react';
import { Download, BookOpen, FileText, Share2, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const catalogues = [
    { id: 1, title: "Heritage Collection 2024", year: "2024", pages: "48", type: "Main Catalogue", color: "bg-terracotta" },
    { id: 2, title: "Modern Minimalist Series", year: "2024", pages: "24", type: "Special Edition", color: "bg-indigo" },
    { id: 3, title: "Restoration Guide", year: "2023", pages: "16", type: "Technical Manual", color: "bg-oxide" },
];

const Catalogue = () => {
    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 min-h-screen bg-sand/10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center space-y-6">
                    <span className="text-indigo font-medium tracking-[0.3em] uppercase text-xs">Resources</span>
                    <h1 className="text-6xl md:text-7xl font-serif">Digital Library.</h1>
                    <p className="text-charcoal/50 max-w-2xl mx-auto font-light">
                        Explore our complete range of patterns, technical specifications, 
                        and installation guides. Download our curated catalogues for offline viewing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {catalogues.map((cat) => (
                        <motion.div 
                            whileHover={{ y: -10 }}
                            key={cat.id}
                            className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-charcoal/5 flex flex-col h-full"
                        >
                            <div className={cn("aspect-[4/3] p-10 flex items-center justify-center relative overflow-hidden", cat.color)}>
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-widest">
                                        PDF Download
                                    </div>
                                </div>
                                <div className="text-white transform -rotate-12 shadow-2xl">
                                    <div className="w-40 h-56 bg-white rounded-lg p-6 flex flex-col justify-between text-charcoal shadow-inner border border-black/5">
                                        <div>
                                            <div className="w-10 h-1 h-px bg-terracotta mb-4" />
                                            <h4 className="text-lg font-serif leading-tight">{cat.title}</h4>
                                        </div>
                                        <div className="flex justify-between items-end">
                                             <span className="text-[10px] font-bold">THARAI</span>
                                             <span className="text-[10px] opacity-40">{cat.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 flex-grow space-y-6">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">{cat.type}</p>
                                    <h3 className="text-2xl font-serif">{cat.title}</h3>
                                    <div className="flex items-center space-x-4 text-xs text-charcoal/60 font-light">
                                        <span className="flex items-center"><BookOpen size={14} className="mr-1" /> {cat.pages} Pages</span>
                                        <span className="w-1 h-1 bg-charcoal/20 rounded-full" />
                                        <span className="flex items-center"><FileText size={14} className="mr-1" /> 12.4 MB</span>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4">
                                    <button className="flex-grow bg-charcoal text-ivory py-4 rounded-full text-xs uppercase tracking-widest hover:bg-terracotta transition-all flex items-center justify-center">
                                        <Download size={14} className="mr-2" /> Download
                                    </button>
                                    <button className="w-12 h-12 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-charcoal hover:text-ivory transition-all text-charcoal">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sample Request Section */}
                <div className="mt-32 bg-charcoal text-ivory rounded-[48px] p-12 md:p-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                         <img src="/images/tharaitilepattern11779180632584.png" className="w-full h-full object-cover" alt="Decorative Tile" />
                    </div>
                    <div className="max-w-2xl relative z-10 space-y-10 text-left">
                        <div className="space-y-4">
                            <span className="text-mustard font-medium tracking-[0.3em] uppercase text-[10px]">Professional Services</span>
                            <h2 className="text-4xl md:text-6xl font-serif">Request Physical Samples.</h2>
                            <p className="text-ivory/60 font-light leading-relaxed">
                                Architects and Designers can request our "Signature Series" sample box 
                                containing 8 curated tiles, pigment chips, and detail sheets.
                            </p>
                        </div>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-mustard transition-all"
                            />
                            <input 
                                type="email" 
                                placeholder="Professional Email" 
                                className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-mustard transition-all"
                            />
                            <input 
                                type="text" 
                                placeholder="Architectural Firm" 
                                className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm md:col-span-2 focus:outline-none focus:border-mustard transition-all"
                            />
                            <button className="md:col-span-2 bg-mustard text-charcoal py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white transition-all flex items-center justify-center">
                                Submit Request <ArrowRight size={16} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalogue;
