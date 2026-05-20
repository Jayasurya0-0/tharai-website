import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ChevronDown, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Kumbakonam Classic",
            tag: "TRADITIONAL",
            color: "Terracotta/Ochre",
            size: "10x10 inches",
            price: 180,
            quantity: 450,
            img: "/src/assets/images/tharai_tile_pattern_1_1779180632584.png"
        },
        {
            id: 2,
            name: "Chettinad Floral",
            tag: "HERITAGE",
            color: "Madder Red",
            size: "8x8 inches",
            price: 220,
            quantity: 320,
            img: "https://images.unsplash.com/photo-1615529182904-14819c35db31?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Indigo Lattice",
            tag: "MODERN",
            color: "Indigo/Ivory",
            size: "12x12 inches",
            price: 250,
            quantity: 120,
            img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop"
        }
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(prev => prev.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 2500; // Flat heritage handling fee
    const tax = subtotal * 0.12; // 12% GST
    const total = subtotal + shipping + tax;

    return (
        <div className="pt-32 pb-20 px-6 lg:px-12 bg-ivory min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex items-center justify-between">
                    <div className="space-y-1">
                        <Link to="/products" className="text-[10px] uppercase tracking-widest text-charcoal/40 hover:text-terracotta flex items-center transition-colors mb-4">
                            <ArrowLeft size={12} className="mr-2" /> Back to Collection
                        </Link>
                        <h1 className="text-5xl font-serif flex items-baseline">
                            Your Selection <span className="text-lg font-sans text-charcoal/30 ml-4 font-light tracking-widest uppercase">({cartItems.length} Series)</span>
                        </h1>
                    </div>
                    <button 
                        onClick={() => setCartItems([])}
                        className="text-[10px] uppercase tracking-widest text-terracotta font-bold hover:opacity-70 transition-opacity border-b border-terracotta/20 pb-1"
                    >
                        Reset Selection
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Items List */}
                    <div className="lg:col-span-8 space-y-8">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div 
                                    key={item.id}
                                    className="group bg-white p-6 md:p-8 rounded-[32px] border border-charcoal/5 flex flex-col md:flex-row items-center gap-6 md:gap-8 card-hover"
                                >
                                    {/* Image */}
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-sand/20 shrink-0">
                                        <img src={item.img} className="w-full h-full object-cover" alt={item.name} referrerPolicy="no-referrer" />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-grow space-y-4 text-center md:text-left w-full">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                                            <div className="space-y-1">
                                                <span className="text-[9px] uppercase tracking-widest font-bold text-terracotta bg-terracotta/5 px-2 py-0.5 rounded-full">
                                                    {item.tag}
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-serif text-charcoal pt-1">{item.name}</h3>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg md:text-xl font-serif text-charcoal">₹{(item.price * item.quantity).toLocaleString()}</p>
                                                <p className="text-[10px] text-charcoal/40 uppercase tracking-widest leading-none">₹{item.price} /sqft</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-charcoal/5">
                                            <div className="flex items-center justify-center md:justify-start space-x-4 text-[9px] uppercase tracking-[0.1em] font-bold text-charcoal/50">
                                                <div className="flex items-center cursor-pointer hover:text-charcoal transition-colors">
                                                    <span>Color: {item.color}</span>
                                                    <ChevronDown size={10} className="ml-1" />
                                                </div>
                                                <div className="flex items-center cursor-pointer hover:text-charcoal transition-colors">
                                                    <span>Size: {item.size}</span>
                                                    <ChevronDown size={10} className="ml-1" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center md:justify-end space-x-4">
                                                <div className="flex items-center bg-ivory rounded-full px-3 py-1 border border-charcoal/5">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, -10)}
                                                        className="w-8 h-8 flex items-center justify-center hover:text-terracotta transition-colors"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="w-12 text-center font-serif text-base">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, 10)}
                                                        className="w-8 h-8 flex items-center justify-center hover:text-terracotta transition-colors"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => removeItem(item.id)}
                                                    className="w-9 h-9 rounded-full border border-charcoal/5 flex items-center justify-center text-charcoal/30 hover:text-terracotta hover:bg-terracotta/5 transition-all"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                                <div className="w-24 h-24 bg-sand/20 rounded-full flex items-center justify-center text-charcoal/20">
                                    <Trash2 size={40} />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-serif">Selection is empty.</h2>
                                    <p className="text-charcoal/40 font-light max-w-xs mx-auto">Your design journey begins by selecting patterns that resonate with your soul.</p>
                                </div>
                                <Link to="/products" className="bg-charcoal text-ivory px-12 py-5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-terracotta transition-all shadow-xl shadow-black/10">
                                    Explore Library
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Summary Panel */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-[40px] p-10 border border-charcoal/5 sticky top-32 shadow-xl shadow-charcoal/5">
                            <h2 className="text-3xl font-serif mb-10">Summary.</h2>
                            
                            <div className="space-y-6 mb-10">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-charcoal/40 font-light uppercase tracking-widest text-[10px]">Sub-total</span>
                                    <span className="font-serif text-lg">₹{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-charcoal/40 font-light uppercase tracking-widest text-[10px]">Estimated Logistics</span>
                                    <span className="font-serif text-lg">₹{shipping.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-charcoal/40 font-light uppercase tracking-widest text-[10px]">GST (12%)</span>
                                    <span className="font-serif text-lg">₹{tax.toLocaleString()}</span>
                                </div>
                                
                                <div className="h-px bg-charcoal/5 my-4" />
                                
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-widest font-black text-terracotta">Final Quotation</span>
                                        <h4 className="text-4xl font-serif">₹{total.toLocaleString()}</h4>
                                    </div>
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-charcoal/30 text-right">
                                        Incl. all taxes
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Enter architectural code" 
                                        className="w-full bg-ivory border border-charcoal/5 rounded-full px-6 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-terracotta transition-all pr-24"
                                    />
                                    <button className="absolute right-2 top-2 bottom-2 bg-charcoal text-ivory px-6 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-terracotta transition-all">
                                        Apply
                                    </button>
                                </div>

                                <button className="w-full bg-terracotta text-ivory py-6 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-burnt-clay transition-all shadow-2xl shadow-terracotta/20 group">
                                    Proceed to Site Survey <ArrowRight size={14} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                <button className="w-full bg-charcoal text-ivory py-6 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-indigo transition-all">
                                    Project Consultant Checkout
                                </button>
                            </div>

                            <div className="mt-10 flex items-center justify-center space-x-3 text-oxide/60">
                                <ShieldCheck size={18} />
                                <span className="text-[9px] uppercase tracking-widest font-bold">100% Secure Heritage Craft Invoicing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
