import { motion } from "framer-motion";
import { STORE_DATA } from "@/data/storeData";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-slate-950 text-slate-50 dark">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950 z-0"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0 opacity-50"></div>

      <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            New Arrivals Available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            {STORE_DATA.tagline}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
            Shop the latest laptops, desktops, and components — built for gamers, creators, and professionals.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link href="#shop" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95" data-testid="button-hero-shop">
              Shop Now
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="#deals" className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95" data-testid="button-hero-deals">
              Browse Deals
            </Link>
          </div>
        </motion.div>

        {/* Right: Abstract Shape / Laptop representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex relative h-[500px] w-full items-center justify-center perspective-1000"
        >
          {/* Glowing Aura */}
          <div className="absolute w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px]"></div>
          
          {/* Abstract 3D-like Laptop Shape Built with CSS */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-md transform rotate-[-5deg] rotate-x-12"
          >
            {/* Screen */}
            <div className="w-full aspect-[16/10] bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-1 border border-slate-800 rounded-lg bg-slate-950 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
              </div>
            </div>
            {/* Base */}
            <div className="w-[110%] h-6 bg-slate-800 rounded-b-xl -ml-[5%] shadow-2xl relative border-t border-slate-700">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-slate-700 rounded-b-md"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
