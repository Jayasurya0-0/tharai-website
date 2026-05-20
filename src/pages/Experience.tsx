import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Eye, Camera, Check, Settings, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Experience = () => {
    const [selectedTile, setSelectedTile] = useState(1);
    const [isUploaded, setIsUploaded] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const tiles = [
        { id: 1, name: "Heritage Terracotta", img: "/images/tharaitilepattern11779180632584.png" },
        { id: 2, name: "Chettinad Blue", img: "/images/tile/img1.jpeg" },
        { id: 3, name: "Oxide Green", img: "/images/tile/img1.jpg" },
        { id: 4, name: "Monsoon Grey", img: "/images/tile/img3.png" },
    ];

    const handleUpload = () => {
        setIsUploaded(true);
    };

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 min-h-screen bg-ivory">
            <div className="max-w-7xl mx-auto mb-16 text-center space-y-4">
                <span className="text-terracotta font-medium tracking-[0.3em] uppercase text-xs">Interactive Studio</span>
                <h1 className="text-6xl md:text-7xl font-serif">The Experience.</h1>
                <p className="text-charcoal/50 max-w-2xl mx-auto font-light">
                    Visualize the legacy. Upload a photo of your space and preview how 
                    Athangudi tiles can transform your interior into a work of art.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Visualizer Canvas */}
                <div className="lg:col-span-8 relative aspect-video bg-sand/20 rounded-[32px] overflow-hidden border border-charcoal/5 group">
                    <div className="absolute inset-0">
                        {isUploaded ? (
                             <img 
                             src="/images/tharaimodernlivingtiles1779180651977.png" 
                             className="w-full h-full object-cover" 
                             alt="Interior Preview"
                             referrerPolicy="no-referrer"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center space-y-6">
                                <div className="w-20 h-20 bg-ivory shadow-lg rounded-full flex items-center justify-center text-terracotta animate-bounce">
                                    <Camera size={32} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-serif">Room Not Provided</h3>
                                    <p className="text-sm text-charcoal/40 font-light">Upload an image or use our sample luxury room to begin.</p>
                                </div>
                                <div className="flex gap-4">
                                    <button 
                                        onClick={() => fileInputRef.current?.click()}
                                        className="bg-charcoal text-ivory px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-black transition-all flex items-center"
                                    >
                                        <Upload size={14} className="mr-2" /> Upload Photo
                                    </button>
                                    <button 
                                        onClick={handleUpload}
                                        className="bg-white text-charcoal px-8 py-4 rounded-full text-xs uppercase tracking-widest border border-charcoal/10 hover:border-charcoal/30 flex items-center"
                                    >
                                        <Eye size={14} className="mr-2" /> Use Sample
                                    </button>
                                </div>
                                <input type="file" ref={fileInputRef} className="hidden" onChange={handleUpload} />
                            </div>
                        )}
                    </div>
                    
                    {/* AR-style controls overlay */}
                    <AnimatePresence>
                        {isUploaded && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none"
                            >
                                <div className="glass-card p-4 rounded-[20px] pointer-events-auto space-y-2 max-w-[200px]">
                                    <div className="flex items-center space-x-2 text-white">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-[10px] uppercase tracking-widest font-bold">Studio Active</span>
                                    </div>
                                    <p className="text-white/60 text-[10px] leading-tight">AI-assisted perspective correction applied for realistic lighting.</p>
                                </div>
                                <div className="flex space-x-2 pointer-events-auto">
                                    <button className="w-10 h-10 glass-card text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                                        <Settings size={16} />
                                    </button>
                                    <button className="w-10 h-10 glass-card text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                                        <Info size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Progress Indicator */}
                    {isUploaded && (
                         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-card rounded-full px-6 py-2 text-white text-[10px] uppercase tracking-[0.2em] font-medium flex items-center space-x-3 pointer-events-none">
                            <span className="text-white/40">Visualizing</span>
                            <span>{tiles.find(t => t.id === selectedTile)?.name}</span>
                        </div>
                    )}
                </div>

                {/* Controls Panel */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-white rounded-[32px] p-8 border border-charcoal/5 shadow-sm space-y-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-charcoal/40 mb-6">Select Pattern</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {tiles.map((tile) => (
                                    <button
                                        key={tile.id}
                                        onClick={() => setSelectedTile(tile.id)}
                                        className={cn(
                                            "relative aspect-square rounded-[16px] overflow-hidden border-2 transition-all p-1",
                                            selectedTile === tile.id ? "border-terracotta" : "border-transparent"
                                        )}
                                    >
                                        <img src={tile.img} className="w-full h-full object-cover rounded-[12px]" alt={tile.name} referrerPolicy="no-referrer" />
                                        {selectedTile === tile.id && (
                                            <div className="absolute top-3 right-3 bg-terracotta text-ivory p-1 rounded-full">
                                                <Check size={10} />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-charcoal/40">Customization</h3>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                                        <span className="text-charcoal/60">Pattern Scale</span>
                                        <span>75%</span>
                                    </div>
                                    <div className="w-full h-1 bg-sand/30 rounded-full relative">
                                        <div className="absolute top-0 left-0 h-full w-3/4 bg-terracotta rounded-full" />
                                        <div className="absolute top-1/2 -translate-y-1/2 left-3/4 w-3 h-3 bg-white border-2 border-terracotta rounded-full shadow-md" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                                        <span className="text-charcoal/60">Pigment Intensity</span>
                                        <span>High</span>
                                    </div>
                                    <div className="flex gap-1 justify-between">
                                        {[1,2,3,4,5].map(i => (
                                            <div key={i} className={cn("h-1 flex-grow rounded-full", i <= 4 ? "bg-burnt-clay" : "bg-sand/30")}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-charcoal text-ivory py-5 rounded-full text-sm uppercase tracking-widest hover:bg-terracotta transition-all duration-500 shadow-xl shadow-charcoal/10">
                            Download Specification
                        </button>
                    </div>

                    <div className="bg-terracotta/5 border border-terracotta/10 p-6 rounded-[24px] flex items-start space-x-4">
                        <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center shrink-0 text-terracotta">
                            <Info size={18} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">Artifact Sample</h4>
                            <p className="text-xs text-charcoal/60 leading-relaxed font-light">
                                Love this combination? Order a set of 4 Physical Samples (10x10) for ₹599.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
