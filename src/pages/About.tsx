import { motion } from 'motion/react';
import { History, Shield, Heart, Map, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const About = () => {
    return (
        <div className="pt-32 pb-0 bg-ivory">
            {/* Split Story Header */}
            <section className="px-6 lg:px-12 mb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-terracotta font-medium tracking-[0.3em] uppercase text-xs">Our Heritage</span>
                            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9]">
                                A 200 year <br />
                                <span className="italic font-light">Dialogue with Earth.</span>
                            </h1>
                        </div>
                        <p className="text-charcoal/70 text-xl font-light leading-relaxed">
                            Athangudi is a small village in the Sivaganga district of Tamil Nadu. 
                            Legend says the craft began when local artisans in the 19th century 
                            attempted to recreate expensive European porcelain tiles using local materials.
                        </p>
                        <p className="text-charcoal/50 leading-relaxed font-light">
                            The resulting cement tiles proved more durable, artistic, and thermal-friendly 
                            than their inspirations, becoming the signature flooring of the grand Chettinad Mansions. 
                            Today, THARAI preserves this legacy by working with the fourth generation of these very same artisan families.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-[48px] overflow-hidden shadow-2xl hero-mask">
                             <img 
                                src="/images/tharaitilecraftsmanship1779180613274.png" 
                                className="w-full h-full object-cover" 
                                alt="Heritage Craftsmanship"
                                referrerPolicy="no-referrer"
                             />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mustard rounded-full flex items-center justify-center text-center p-4 shadow-xl">
                            <span className="text-charcoal font-serif text-sm leading-tight italic">Passed down through 4 generations</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process - Horizontal Scroll Feel */}
            <section className="py-32 bg-charcoal text-ivory rounded-t-[64px]">
                 <div className="max-w-7xl mx-auto px-6 lg:px-12">
                     <div className="mb-24 text-center space-y-4">
                        <h2 className="text-5xl md:text-6xl font-serif">The Art of Patience.</h2>
                        <p className="text-ivory/40 uppercase tracking-widest text-xs">The Seven Steps of Creation</p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { step: "01", title: "Pattern Mold", desc: "A custom brass frame is placed on a glass sheet, determining the intricate geometry.", icon: Map },
                            { step: "02", title: "Pigment Pour", desc: "Local sand and oxide pigments mixed by hand are poured into the mold segments.", icon: Heart },
                            { step: "03", title: "Cement Base", desc: "A dry mix of cement and sand is applied to absorb the moisture from the pigment layer.", icon: Shield },
                            { step: "04", title: "Manual Press", desc: "The tile is pressed by hand and then with a mechanical press to ensure density.", icon: Clock },
                            { step: "05", title: "Curing In Water", desc: "Tiles are submerged in water for 3 days to achieve their signature rock-hard strength.", icon: History },
                            { step: "06", title: "Sun Drying", desc: "Final drying occurs under the Chettinad sun for 21 days for a natural matte finish.", icon: Map },
                        ].map((item, i) => (
                            <div key={i} className="group space-y-6 p-8 border border-white/5 rounded-[32px] hover:bg-white/5 card-hover transition-all">
                                <div className="flex justify-between items-start">
                                    <span className="text-mustard font-serif text-3xl italic">{item.step}</span>
                                    <item.icon size={24} className="text-white/20 group-hover:text-mustard transition-colors" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-serif">{item.title}</h3>
                                    <p className="text-ivory/40 font-light text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                 </div>
            </section>

            {/* Earthy Palette Quote */}
            <section className="py-40 px-6 bg-charcoal">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-24 h-px bg-mustard mx-auto"
                    />
                    <h3 className="text-4xl md:text-6xl font-serif italic font-light leading-snug">
                        "We don't create colors; we extract them from the very earth we walk upon."
                    </h3>
                    <p className="text-sm uppercase tracking-widest text-white/40">&mdash; Master Artisan, Athangudi</p>
                </div>
            </section>

            {/* Team/Spirit */}
            <section className="py-32 px-6 lg:px-12 bg-ivory">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-5xl font-serif">The Human Touch.</h2>
                        <p className="text-charcoal/60 leading-relaxed font-light">
                            At THARAI, we employ 45 master artisans who collectively hold centuries 
                            of subconscious design experience. We provide fair wages, clean working 
                            conditions, and a platform for their craft to reach global luxury markets.
                        </p>
                        <ul className="space-y-4 pt-6">
                            {[
                                "Solar-powered workshop",
                                "Zero chemical waste",
                                "Sustainably sourced sand",
                                "Artisan skill workshops"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-sm uppercase tracking-widest text-charcoal/70">
                                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-2 gap-6">
                         <div className="aspect-[3/4] rounded-[32px] overflow-hidden mt-12 bg-sand shadow-lg">
                             <img src="/images/tharaitilepattern11779180632584.png" className="w-full h-full object-cover grayscale" alt="Artisan detail" referrerPolicy="no-referrer" />
                         </div>
                         <div className="aspect-[3/4] rounded-[32px] overflow-hidden bg-burnt-clay shadow-lg">
                             <img src="/images/tharaimodernlivingtiles1779180651977.png" className="w-full h-full object-cover" alt="Artisan detail" referrerPolicy="no-referrer" />
                         </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
