import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function GamingSection() {
  return (
    <section className="w-full bg-card border-y border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Visual Half */}
        <div className="relative min-h-[400px] lg:min-h-full bg-black overflow-hidden flex items-center justify-center p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(177,22,22,0.3)_0%,_rgba(0,0,0,1)_70%)]" />
          
          <div className="relative z-10 w-full max-w-sm aspect-square border border-primary/20 bg-black/50 backdrop-blur-sm p-4 transform -skew-x-6 rotate-2 shadow-[0_0_50px_rgba(177,22,22,0.2)]">
            <div className="w-full h-full border border-primary/50 flex flex-col items-center justify-center p-6 text-center gap-4 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
               <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                 <div className="w-16 h-16 rounded-full border-4 border-dotted border-secondary/50 animate-[spin_5s_linear_infinite_reverse]" />
               </div>
               <div className="font-black text-2xl tracking-widest text-white mt-4 uppercase">
                 GEFORCE RTX™
               </div>
               <div className="text-secondary font-bold text-sm tracking-[0.3em]">
                 THE ULTIMATE PLAY
               </div>
            </div>
          </div>
        </div>

        {/* Content Half */}
        <div className="flex flex-col justify-center p-8 sm:p-16 lg:p-24 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="inline-block px-3 py-1 bg-black border border-border w-max mb-6">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Level Up Your Game</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-secondary leading-tight mb-6 uppercase tracking-tight">
            Gaming <br className="hidden sm:block"/> Section
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Discover the latest in gaming tech. From high-refresh rate monitors to liquid-cooled rigs and mechanical keyboards. We stock the hardware that gives you the competitive edge.
          </p>

          <Link href="/gaming" className="group w-max flex items-center justify-center gap-2 bg-transparent text-primary font-bold py-3 px-0 uppercase tracking-wider hover:text-white transition-colors">
            FIND OUT MORE
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
