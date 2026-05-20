import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 bg-ivory min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center space-y-4">
                    <span className="text-mustard font-medium tracking-[0.3em] uppercase text-xs">Reach Out</span>
                    <h1 className="text-6xl md:text-7xl font-serif">Connect with us.</h1>
                    <p className="text-charcoal/50 max-w-2xl mx-auto font-light">
                        Whether it's a heritage restoration or a modern luxury project, 
                        we are here to help you bring the soul of Athangudi to your space.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center shrink-0 text-terracotta">
                                    <MapPin size={24} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal/40">Studio Address</h3>
                                    <p className="text-lg font-serif">
                                        Heritage Workshop, Plot 42-A, <br />
                                        Athangudi Village, Sivaganga, <br />
                                        Tamil Nadu - 630101
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-indigo/10 rounded-2xl flex items-center justify-center shrink-0 text-indigo">
                                    <Mail size={24} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal/40">Email Inquiries</h3>
                                    <p className="text-lg font-sans font-light">studio@tharai.in</p>
                                    <p className="text-xs text-charcoal/40 italic">Average response time: 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-mustard/10 rounded-2xl flex items-center justify-center shrink-0 text-mustard">
                                    <Phone size={24} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal/40">Speak Directly</h3>
                                    <p className="text-lg font-sans font-light">+91 98765 43210</p>
                                    <p className="text-xs text-charcoal/40 uppercase tracking-widest">Mon - Sat: 9 AM - 6 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive "Map" Placeholder */}
                        <div className="aspect-video bg-sand relative rounded-[32px] overflow-hidden shadow-inner border border-charcoal/5 group cursor-crosshair">
                            <div className="absolute inset-0 opacity-20 grayscale">
                                <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Map texture" />
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                                <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white animate-pulse shadow-lg ring-8 ring-terracotta/20">
                                    <MapPin size={20} />
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                    View in Google Maps
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-8 pt-6">
                             <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/30">Connect</span>
                             <div className="flex space-x-6">
                                <a href="#" className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-charcoal hover:text-ivory transition-all"><Instagram size={18} /></a>
                                <a href="#" className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-charcoal hover:text-ivory transition-all"><Twitter size={18} /></a>
                                <a href="#" className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-charcoal hover:text-ivory transition-all"><Facebook size={18} /></a>
                             </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="bg-white rounded-[48px] p-10 md:p-16 shadow-lg border border-charcoal/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-bl-full pointer-events-none" />
                        
                        <div className="space-y-10">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-serif">Project Inquiry</h2>
                                <p className="text-sm text-charcoal/40 font-light">Tell us about your space. Our design consultants will reach out with a curated proposal.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold ml-1 text-charcoal/40">Your Name</label>
                                        <input type="text" className="w-full bg-ivory/30 border border-charcoal/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-terracotta transition-all" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold ml-1 text-charcoal/40">Email Address</label>
                                        <input type="email" className="w-full bg-ivory/30 border border-charcoal/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-terracotta transition-all" placeholder="Enter Email" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold ml-1 text-charcoal/40">Project Type</label>
                                    <select className="w-full bg-ivory/30 border border-charcoal/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-terracotta transition-all appearance-none cursor-pointer">
                                        <option>Residential Restoration</option>
                                        <option>Modern Architecture</option>
                                        <option>Hospitality / Boutique Hotel</option>
                                        <option>Commercial / Retail</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold ml-1 text-charcoal/40">Estimated Area (sqft)</label>
                                    <input type="number" className="w-full bg-ivory/30 border border-charcoal/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-terracotta transition-all" placeholder="e.g. 1500" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold ml-1 text-charcoal/40">Project Brief</label>
                                    <textarea rows={4} className="w-full bg-ivory/30 border border-charcoal/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-terracotta transition-all resize-none" placeholder="Describe your vision..."></textarea>
                                </div>

                                <div className="pt-4 flex flex-col md:flex-row gap-4 items-center">
                                    <motion.button 
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full md:w-auto bg-charcoal text-ivory px-12 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-terracotta transition-all flex items-center justify-center shadow-xl shadow-black/10"
                                    >
                                        Send Message <Send size={16} className="ml-2" />
                                    </motion.button>
                                    <a href="https://wa.me/919876543210" className="w-full md:w-auto flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-bold text-oxide hover:text-charcoal transition-colors">
                                        <MessageSquare size={16} /> <span>WhatsApp Studio</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
