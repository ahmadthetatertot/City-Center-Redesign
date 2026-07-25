import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function GamingSection() {
  return (
    <section className="w-full border-y border-[#1a1a1a] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Cinematic Left Half */}
        <div className="relative bg-black min-h-[500px] flex items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(177,22,22,0.2)_0%,_rgba(0,0,0,1)_80%)]" />
          
          {/* Giant Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-40">
            <span className="text-transparent text-[8rem] md:text-[12rem] font-black uppercase tracking-tighter" style={{ WebkitTextStroke: '2px #B11616' }}>
              GAMING
            </span>
          </div>

          {/* Abstract Foreground GPU/PC Element */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-sm aspect-square bg-[#050505] border-2 border-[#222] rounded-3xl p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-700"
          >
            {/* LED Strips */}
            <div className="absolute -left-2 top-10 bottom-10 w-1 bg-gradient-to-b from-primary via-secondary to-primary shadow-[0_0_20px_rgba(255,221,0,0.5)]" />
            <div className="absolute -right-2 top-10 bottom-10 w-1 bg-gradient-to-b from-primary via-secondary to-primary shadow-[0_0_20px_rgba(255,221,0,0.5)]" />
            
            <div className="w-full h-full border border-white/10 rounded-xl relative overflow-hidden flex flex-col justify-between p-4 bg-gradient-to-br from-white/5 to-transparent">
               <div className="flex justify-between items-center opacity-50">
                 <div className="flex gap-2">
                   <div className="w-8 h-2 bg-white/20 rounded-full" />
                   <div className="w-4 h-2 bg-white/20 rounded-full" />
                 </div>
                 <div className="w-12 h-12 rounded-full border-4 border-dashed border-[#444] animate-[spin_10s_linear_infinite]" />
               </div>
               
               <div className="w-full h-32 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center relative shadow-[inset_0_0_30px_rgba(177,22,22,0.5)]">
                   <div className="absolute inset-0 bg-primary/20 blur-xl" />
                   <span className="text-white font-black text-2xl tracking-tighter opacity-80 z-10">RTX</span>
                 </div>
               </div>

               <div className="flex justify-between items-end opacity-50">
                 <div className="w-12 h-12 rounded-full border-4 border-dashed border-[#444] animate-[spin_10s_linear_infinite_reverse]" />
                 <div className="flex gap-2">
                   <div className="w-16 h-2 bg-white/20 rounded-full" />
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Content Right Half */}
        <div className="bg-[#0d0d0d] p-10 sm:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="mb-6">
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              <span className="block text-white">BUILT FOR</span>
              <span className="block text-primary">DOMINANCE</span>
            </h2>
          </div>

          <p className="text-[#888] text-lg font-medium mb-12 max-w-lg">
            Experience gaming without compromises. From liquid-cooled custom rigs to the latest 40-Series GPUs, we supply the firepower needed to crush the competition.
          </p>

          <ul className="space-y-6 mb-12">
            {[
              'NVIDIA RTX 40-Series Available Now',
              'Custom PC Builds by Expert Technicians',
              'Premium Mechanical Keyboards & Peripherals'
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ChevronRight className="w-4 h-4 text-primary group-hover:text-white transition-colors" strokeWidth={3} />
                </div>
                <span className="text-white font-bold tracking-wide uppercase text-sm">{text}</span>
              </li>
            ))}
          </ul>

          <button className="group w-max flex items-center gap-4 bg-primary text-white font-black py-4 px-8 rounded-xl uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(177,22,22,0.3)] hover:shadow-[0_0_30px_rgba(177,22,22,0.5)]">
            EXPLORE GAMING
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </button>
        </div>

      </div>
    </section>
  );
}