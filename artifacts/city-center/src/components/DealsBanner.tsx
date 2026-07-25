import { Clock } from 'lucide-react';

export default function DealsBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-black border border-primary/30 rounded-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-black to-black" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-left opacity-20 mix-blend-luminosity [mask-image:linear-gradient(to_left,black,transparent)]" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-white text-sm font-bold tracking-widest uppercase">Limited Time Offer</span>
          <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase tracking-tight">
            Hot Deals
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mt-2">
            Save up to 40% on selected gaming laptops and peripherals. While stocks last.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 bg-card/80 backdrop-blur border border-border p-6 rounded-sm">
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
            <Clock className="w-4 h-4" />
            Ends In
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-16 h-16 flex items-center justify-center bg-black border border-border text-2xl font-black text-white rounded-sm">02</span>
              <span className="text-[10px] text-muted-foreground font-bold uppercase mt-2">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-16 h-16 flex items-center justify-center bg-black border border-border text-2xl font-black text-white rounded-sm">14</span>
              <span className="text-[10px] text-muted-foreground font-bold uppercase mt-2">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-16 h-16 flex items-center justify-center bg-black border border-border text-2xl font-black text-white rounded-sm">45</span>
              <span className="text-[10px] text-muted-foreground font-bold uppercase mt-2">Mins</span>
            </div>
          </div>
        </div>

        <button className="bg-primary text-white font-bold py-4 px-8 uppercase tracking-wider hover:bg-primary/90 transition-colors whitespace-nowrap">
          Shop Offers
        </button>
      </div>
    </div>
  );
}
