import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full bg-black overflow-hidden border-b border-border min-h-[500px] flex items-center">
      {/* Background gradients and visual effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(177,22,22,0.25)_0%,_rgba(0,0,0,1)_60%)]" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-block px-3 py-1 bg-card border border-border rounded-sm">
              <span className="text-secondary text-xs font-bold tracking-widest uppercase">Best Gaming & PC Store in Jordan</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              POWER YOUR <br/>
              <span className="text-primary block mt-2">SETUP</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md font-medium">
              Dominate the game with premium hardware. 
              The ultimate destination for builders, creators, and hardcore gamers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/shop" className="group flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 px-8 uppercase tracking-wider hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                SHOP NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/deals" className="group flex items-center justify-center gap-2 bg-transparent border-2 border-border text-white font-bold py-4 px-8 uppercase tracking-wider hover:border-white transition-all hover:bg-white/5 active:scale-[0.98]">
                VIEW DEALS
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-end relative"
          >
            {/* Glowing PC Visual abstraction */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative z-10 w-full h-full border border-border/50 bg-card/40 backdrop-blur-sm shadow-2xl overflow-hidden flex items-center justify-center p-8 transform rotate-3 hover:rotate-0 transition-all duration-700">
                <div className="w-full h-full border border-primary/30 relative">
                   <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-primary shadow-[0_0_15px_rgba(177,22,22,0.8)]" />
                   <div className="absolute bottom-1/4 right-0 w-1 h-1/3 bg-secondary shadow-[0_0_15px_rgba(255,221,0,0.8)]" />
                   <div className="w-full h-full flex flex-col gap-4 p-6 opacity-60">
                     <div className="w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent border border-white/5" />
                     <div className="flex gap-4 h-1/2">
                        <div className="w-1/3 h-full bg-white/5 border border-white/10" />
                        <div className="w-2/3 h-full bg-white/5 border border-white/10" />
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
