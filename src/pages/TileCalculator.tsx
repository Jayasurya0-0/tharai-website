import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, Info, RefreshCw, Box, AlertTriangle, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const TileCalculator = () => {
    const [length, setLength] = useState<string>("");
    const [width, setWidth] = useState<string>("");
    const [tileSize, setTileSize] = useState<number>(10); // in inches
    const [wastage, setWastage] = useState<number>(15); // percentage

    const calculations = useMemo(() => {
        const l = parseFloat(length) || 0;
        const w = parseFloat(width) || 0;
        
        if (l === 0 || w === 0) return null;

        const areaSqFt = l * w;
        const tileAreaSqFt = (tileSize * tileSize) / 144;
        const baseQuantity = Math.ceil(areaSqFt / tileAreaSqFt);
        const wastageQuantity = Math.ceil(baseQuantity * (wastage / 100));
        const totalQuantity = baseQuantity + wastageQuantity;
        const boxes = Math.ceil(totalQuantity / 12); // assuming 12 tiles per box

        return {
            area: areaSqFt.toFixed(2),
            base: baseQuantity,
            wastage: wastageQuantity,
            total: totalQuantity,
            boxes: boxes
        };
    }, [length, width, tileSize, wastage]);

    const reset = () => {
        setLength("");
        setWidth("");
        setTileSize(10);
        setWastage(15);
    };

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 min-h-screen bg-ivory">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center space-y-4">
                    <span className="text-terracotta font-medium tracking-[0.3em] uppercase text-xs">Planning Tool</span>
                    <h1 className="text-6xl md:text-7xl font-serif">Tile Calculator.</h1>
                    <p className="text-charcoal/50 max-w-2xl mx-auto font-light">
                        Accurately estimate the number of Athangudi tiles required for your project. 
                        We recommend a 15% wastage allowance due to the handmade nature of these tiles.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Input Panel */}
                    <div className="lg:col-span-5 bg-white rounded-[32px] p-10 border border-charcoal/5 shadow-sm space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-charcoal/40 flex items-center">
                                <Calculator size={14} className="mr-2" /> Room Dimensions (Feet)
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-charcoal/60 px-1">Length</label>
                                    <input 
                                        type="number" 
                                        value={length}
                                        onChange={(e) => setLength(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full bg-ivory/50 border border-charcoal/5 rounded-2xl px-6 py-4 text-xl focus:outline-none focus:border-terracotta transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-charcoal/60 px-1">Width</label>
                                    <input 
                                        type="number" 
                                        value={width}
                                        onChange={(e) => setWidth(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full bg-ivory/50 border border-charcoal/5 rounded-2xl px-6 py-4 text-xl focus:outline-none focus:border-terracotta transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-charcoal/40">Tile Specification</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {[8, 10, 12].map(size => (
                                    <button 
                                        key={size}
                                        onClick={() => setTileSize(size)}
                                        className={cn(
                                            "py-4 rounded-xl text-xs uppercase tracking-widest transition-all border",
                                            tileSize === size 
                                                ? "bg-charcoal text-ivory border-charcoal font-bold" 
                                                : "bg-ivory/30 border-charcoal/5 text-charcoal/60"
                                        )}
                                    >
                                        {size}x{size}
                                    </button>
                                ))}
                            </div>
                            <p className="text-[10px] text-charcoal/40 tracking-wider text-center italic">Standard size is 10x10 inches</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-charcoal/40">Wastage %</h3>
                                <span className={cn("text-xs font-bold", wastage > 15 ? "text-terracotta" : "text-charcoal/60")}>{wastage}%</span>
                            </div>
                            <input 
                                type="range" 
                                min="5" 
                                max="30" 
                                step="1"
                                value={wastage}
                                onChange={(e) => setWastage(parseInt(e.target.value))}
                                className="w-full h-1 bg-sand/30 rounded-full appearance-none cursor-pointer accent-terracotta"
                            />
                            <div className="flex justify-between text-[8px] uppercase tracking-widest text-charcoal/30">
                                <span>Economic (5%)</span>
                                <span>Recommended (15%)</span>
                                <span>Safe (30%)</span>
                            </div>
                        </div>

                        <button 
                            onClick={reset}
                            className="w-full flex items-center justify-center space-x-2 text-charcoal/40 hover:text-terracotta transition-colors text-xs uppercase tracking-widest pt-4"
                        >
                            <RefreshCw size={14} /> <span>Reset Inputs</span>
                        </button>
                    </div>

                    {/* Results Panel */}
                    <div className="lg:col-span-7 space-y-8">
                        {calculations ? (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-charcoal text-ivory rounded-[32px] p-12 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                                    <Calculator size={120} className="text-white" />
                                </div>
                                <div className="relative z-10 space-y-12">
                                    <div className="grid grid-cols-2 gap-12">
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-widest opacity-40">Total Area</p>
                                            <h4 className="text-4xl font-serif text-mustard">{calculations.area} <span className="text-lg opacity-60">sqft</span></h4>
                                        </div>
                                        <div className="space-y-1 text-right">
                                            <p className="text-[10px] uppercase tracking-widest opacity-40">Tile Units</p>
                                            <h4 className="text-4xl font-serif">{calculations.total} <span className="text-lg opacity-60">pcs</span></h4>
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/10" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-white/5 rounded-2xl p-6 space-y-4">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-2">
                                                    <Box size={16} className="text-mustard" />
                                                    <span className="text-xs uppercase tracking-widest font-bold">Boxes Required</span>
                                                </div>
                                                <span className="text-2xl font-serif text-mustard">{calculations.boxes}</span>
                                            </div>
                                            <p className="text-[10px] opacity-40 leading-relaxed italic">Calculated based on 12 tiles per box (standard weight-safe packaging)</p>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl p-6 space-y-4">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-2 text-terracotta">
                                                    <AlertTriangle size={16} />
                                                    <span className="text-xs uppercase tracking-widest font-bold">Wastage Units</span>
                                                </div>
                                                <span className="text-2xl font-serif text-terracotta">+{calculations.wastage}</span>
                                            </div>
                                            <p className="text-[10px] opacity-40 leading-relaxed font-light">Includes units for corners, breakages and pattern matching.</p>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <button className="w-full bg-ivory text-charcoal py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-mustard transition-all shadow-xl shadow-black/30 flex items-center justify-center">
                                            Get Quote For This Quantity <ArrowRight size={18} className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-sand/10 border-2 border-dashed border-charcoal/5 rounded-[32px] h-full min-h-[400px] flex flex-col items-center justify-center p-12 text-center space-y-6">
                                <Calculator size={48} className="text-charcoal/10" />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-serif text-charcoal/40">Enter Dimensions</h3>
                                    <p className="text-xs text-charcoal/30 max-w-[200px] mx-auto font-light leading-relaxed">
                                        Results will appear here once you enter length and width.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* FAQ Link Card */}
                        <div className="bg-white rounded-3xl p-8 border border-charcoal/5 flex items-center justify-between group cursor-pointer hover:bg-terracotta/5 transition-all">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center text-charcoal shadow-sm">
                                    <Info size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold">Installation Guide</h4>
                                    <p className="text-xs text-charcoal/40 font-light">Learn the Chettinad 'Wet Laying' method.</p>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-ivory transition-all translate-x-4 group-hover:translate-x-0">
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileCalculator;
