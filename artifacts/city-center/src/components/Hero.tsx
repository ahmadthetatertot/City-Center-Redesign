import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Star, HeadphonesIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-black overflow-hidden flex items-center pt-24 pb-16">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,_rgba(177,22,22,0.4)_0%,_rgba(0,0,0,0)_70%)] rounded-full animate-pulse-slow pointer-events-none" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 flex gap-4 text-xs font-bold uppercase tracking-widest text-[#888]"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 19+ Years Trusted
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> 50,000+ Products Sold
              </span>
            </motion.div>

            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="block text-white">
                BUILD YOUR
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="block gradient-text-hero">
                LEGEND
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[#aaa] text-lg sm:text-xl font-medium max-w-xl mb-12"
            >
              Dominate the game with premium hardware. The ultimate destination for builders, creators, and hardcore gamers in Jordan.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6 mb-16 w-full"
            >
              <div className="flex items-center gap-2 text-sm text-white font-semibold">
                <ShieldCheck className="w-5 h-5 text-primary" /> Official Warranty
              </div>
              <div className="flex items-center gap-2 text-sm text-white font-semibold">
                <Truck className="w-5 h-5 text-primary" /> 1-Hour Amman Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-white font-semibold">
                <Star className="w-5 h-5 text-primary" /> 19+ Years
              </div>
              <div className="flex items-center gap-2 text-sm text-white font-semibold">
                <HeadphonesIcon className="w-5 h-5 text-primary" /> Expert Support
              </div>
            </motion.div>
          </div>

          {/* Right Product Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="glass-panel w-full max-w-md rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-wider shadow-[0_0_15px_rgba(177,22,22,0.4)]">
                  Editor's Choice
                </div>
              </div>

              {/* Abstract Product Representation */}
              <div className="w-full aspect-[4/3] mb-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#050505] rounded-xl border border-white/5" />
                <div className="relative z-10 flex flex-col items-center gap-2 w-3/4 h-3/4 bg-black border border-[#222] rounded-lg shadow-2xl p-4 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full flex justify-between px-2 text-[10px] text-[#444] font-mono">
                    <span>GEFORCE RTX</span>
                    <span>4090</span>
                  </div>
                  <div className="flex-1 w-full bg-gradient-to-b from-white/5 to-transparent rounded flex items-center justify-center relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full border-[6px] border-black shadow-[0_0_15px_rgba(177,22,22,0.6)] flex items-center justify-center bg-[#111]">
                       <div className="w-8 h-8 rounded-full border-2 border-dashed border-primary/50 animate-[spin_4s_linear_infinite]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">ASUS ROG RTX 4090</h3>
                  <p className="text-[#888] text-sm font-medium mt-1">24GB GDDR6X · DLSS 3</p>
                </div>
                
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-secondary">2,150 JD</span>
                  <span className="text-[#666] text-lg font-bold line-through">2,300 JD</span>
                </div>

                <button className="w-full shine-effect hover:animate-shine text-white font-black py-4 rounded-xl uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(177,22,22,0.3)] transition-all">
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}