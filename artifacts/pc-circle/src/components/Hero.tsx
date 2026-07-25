import { motion } from "framer-motion";
import { STORE_DATA } from "@/data/storeData";
import { ChevronRight, Cpu } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-black text-white">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_50%,rgba(177,22,22,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_100%,rgba(255,221,0,0.05),transparent)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center rounded-sm bg-primary px-3 py-1.5 text-xs font-bold text-white w-fit tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 animate-pulse"></span>
            New Gear Has Arrived
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] uppercase">
            <span className="block text-white">Power Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Setup</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            Shop the ultimate collection of hardware, from high-end GPUs to premium gaming laptops. Built for enthusiasts in Amman.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link href="#shop" className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-extrabold text-white uppercase tracking-wider hover:bg-[#8f1212] transition-colors border-2 border-primary active:scale-95" data-testid="button-hero-shop">
              Shop Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#deals" className="inline-flex items-center justify-center rounded-sm bg-transparent border-2 border-border px-8 py-4 text-base font-extrabold text-white uppercase tracking-wider hover:border-secondary hover:text-secondary transition-colors active:scale-95" data-testid="button-hero-deals">
              View Deals
            </Link>
          </div>
        </motion.div>

        {/* Right: Abstract Tech Shape */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex relative h-[600px] w-full items-center justify-center perspective-[1200px]"
        >
          {/* Deep Red/Yellow Aura */}
          <div className="absolute w-[450px] h-[450px] bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] top-10 left-10"></div>
          
          {/* Abstract Component Stack */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[420px] transform rotate-[-10deg] rotate-x-[20deg] rotate-y-[-15deg] transform-style-3d"
          >
            {/* GPU / Component representation */}
            <div className="relative w-full aspect-[4/3] bg-[#0d0d0d] rounded-xl border border-[#333] shadow-[0_30px_60px_rgba(177,22,22,0.3)] overflow-hidden">
              {/* Cooling fins texture */}
              <div className="absolute inset-x-2 top-2 bottom-1/2 flex gap-1 px-4 py-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-full w-2 bg-[#1a1a1a] shadow-inner"></div>
                ))}
              </div>
              
              {/* Core / Logo area */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-32 h-32 rounded-full border-[6px] border-[#222] bg-[#111] flex items-center justify-center shadow-[0_0_30px_rgba(255,221,0,0.2)]">
                <Cpu className="w-12 h-12 text-secondary animate-pulse" />
              </div>
              
              {/* Accent lines */}
              <div className="absolute bottom-4 left-4 right-4 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <div className="absolute top-4 right-4 text-xs font-bold text-primary tracking-widest">RTX 40-SERIES</div>
            </div>
            
            {/* Base plate */}
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-primary/5 rounded-xl border border-primary/20 -z-10 blur-sm transform translate-z-[-50px]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
