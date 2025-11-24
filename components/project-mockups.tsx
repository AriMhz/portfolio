"use client"

import { motion } from "framer-motion"
import { BarChart3, ShoppingCart, Users, TrendingUp, UtensilsCrossed, ChefHat, Building2, FileText, ShieldCheck } from "lucide-react"

export function EcommerceMockup() {
    return (
        <div className="w-full h-full bg-slate-900 p-4 flex flex-col gap-3 font-sans select-none">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
                        <ShoppingCart className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-bold text-white">ShopDash</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <div className="text-[10px] text-slate-400">Revenue</div>
                    <div className="text-sm font-bold text-white">$24,500</div>
                    <div className="text-[10px] text-green-400 flex items-center gap-1">
                        <TrendingUp className="w-2 h-2" /> +12%
                    </div>
                </div>
                <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <div className="text-[10px] text-slate-400">Orders</div>
                    <div className="text-sm font-bold text-white">1,250</div>
                    <div className="text-[10px] text-blue-400">+5%</div>
                </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 bg-white/5 rounded-lg p-2 border border-white/5 flex items-end justify-between gap-1">
                {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                    <motion.div
                        key={i}
                        className="w-full bg-blue-500/50 rounded-t-sm hover:bg-blue-500 transition-colors"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                ))}
            </div>
        </div>
    )
}

export function RestaurantMockup() {
    return (
        <div className="w-full h-full bg-[#1a1a1a] relative overflow-hidden font-serif select-none">
            {/* Background Image Effect */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 space-y-3">
                <div className="w-10 h-10 rounded-full border border-amber-500/50 flex items-center justify-center mb-1">
                    <UtensilsCrossed className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-widest">LUMIÈRE</h3>
                <p className="text-[10px] text-amber-200/80 uppercase tracking-widest">Fine Dining Experience</p>

                <motion.button
                    className="px-4 py-1.5 bg-amber-600 text-white text-xs rounded-sm hover:bg-amber-700 transition-colors mt-2"
                    whileHover={{ scale: 1.05 }}
                >
                    Reserve Table
                </motion.button>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                <ChefHat className="w-3 h-3 text-amber-500" />
                <span className="text-[8px] text-white">Michelin Star</span>
            </div>
        </div>
    )
}

export function CooperativeMockup() {
    return (
        <div className="w-full h-full bg-slate-50 flex flex-col font-sans select-none">
            {/* Navbar */}
            <div className="h-10 bg-emerald-800 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold text-white tracking-wide">CO-OP</span>
                </div>
                <div className="flex gap-2">
                    <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
                    <div className="w-8 h-1.5 bg-white/20 rounded-full"></div>
                </div>
            </div>

            {/* Hero */}
            <div className="h-24 bg-emerald-700 flex items-center px-4 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="text-[10px] text-emerald-200 uppercase font-bold mb-1">Member Portal</div>
                    <div className="text-sm font-bold text-white w-2/3 leading-tight">Empowering Our Community Together</div>
                </div>
                <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-emerald-600 rounded-full opacity-50"></div>
            </div>

            {/* Cards */}
            <div className="flex-1 p-3 grid grid-cols-2 gap-2 bg-slate-100">
                <div className="bg-white p-2 rounded shadow-sm border border-slate-200 flex flex-col gap-1">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <div className="text-[8px] text-slate-500 font-bold mt-1">REPORTS</div>
                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-emerald-500"></div>
                    </div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm border border-slate-200 flex flex-col gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <div className="text-[8px] text-slate-500 font-bold mt-1">SECURITY</div>
                    <div className="text-[8px] text-emerald-600 font-bold">Active</div>
                </div>
            </div>
        </div>
    )
}
