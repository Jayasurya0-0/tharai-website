import { motion } from 'motion/react';
import { ExternalLink, Calendar, MapPin, Layers } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    id: 1,
    title: "The Chettinad Revival",
    location: "Karaikudi, TN",
    year: "2024",
    category: "Restoration",
    img: "/src/assets/images/tharai_hero_mansion_1779180591581.png",
    description: "A complete restoration of a 150-year-old mansion using 15,000 custom-made Athangudi tiles."
  },
  {
    id: 2,
    title: "Urban Zen Penthouse",
    location: "Bangalore, KA",
    year: "2023",
    category: "Modern Residential",
    img: "/src/assets/images/Tile/IMG (1).webp",
    description: "Integrating traditional oxide pigments into a brutalist concrete architecture."
  },
  {
    id: 3,
    title: "Coastal Villa Retreat",
    location: "Puducherry",
    year: "2024",
    category: "Hospitality",
    img: "/src/assets/images/Tile/IMG (1).jpg",
    description: "Handcrafted mosaic patterns in indigo and ivory for a Mediterranean-meets-Tamil boutique stay."
  }
];

const RecentWork = () => {
    return (
        <div className="pt-32 pb-20 bg-ivory min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <span className="text-mustard font-medium tracking-[0.3em] uppercase text-xs">Portfolio</span>
                        <h1 className="text-6xl md:text-7xl font-serif">Recent Works.</h1>
                    </div>
                    <p className="text-charcoal/50 max-w-sm font-light text-sm italic">
                        "Architecture is an expression of values." <br />Explore spaces that value heritage.
                    </p>
                </div>

                <div className="space-y-32">
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={cn(
                                "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                            )}
                        >
                            <div className={cn(
                                "lg:col-span-7 relative group",
                                idx % 2 === 1 ? "lg:order-2" : ""
                            )}>
                                <div className="aspect-[16/10] overflow-hidden rounded-[32px] shadow-2xl relative hero-mask">
                                    <img 
                                        src={project.img} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                        alt={project.title}
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-[24px] shadow-xl flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta">
                                        <Layers size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Category</p>
                                        <p className="text-sm font-semibold">{project.category}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={cn(
                                "lg:col-span-5 space-y-8",
                                idx % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:pl-12"
                            )}>
                                <div className="flex items-center space-x-3 text-terracotta text-xs uppercase tracking-[0.2em] font-semibold">
                                    <MapPin size={14} />
                                    <span>{project.location}</span>
                                    <span className="w-4 h-px bg-terracotta/30" />
                                    <Calendar size={14} />
                                    <span>{project.year}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif leading-tight">{project.title}</h2>
                                <p className="text-charcoal/60 leading-relaxed font-light text-lg">
                                    {project.description}
                                </p>
                                <div className="pt-4">
                                    <button className="flex items-center space-x-3 border-b-2 border-charcoal/10 pb-2 hover:border-terracotta transition-all group">
                                        <span className="text-sm uppercase tracking-widest font-bold">Read Case Study</span>
                                        <ExternalLink size={16} className="group-hover:translate-y--1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Counter Stats */}
                <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-charcoal/5">
                    {[
                        { label: "Mansion Restored", value: "48" },
                        { label: "Modern Spaces", value: "320+" },
                        { label: "Artisan Hours", value: "240k" },
                        { label: "States Reached", value: "18" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center space-y-2">
                             <h4 className="text-5xl font-serif text-charcoal">{stat.value}</h4>
                             <p className="text-xs uppercase tracking-widest text-charcoal/40">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentWork;
