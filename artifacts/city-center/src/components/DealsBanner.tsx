import { useEffect, useState } from 'react';

const DEALS = [
  { name: 'Razer BlackWidow V4', oldPrice: 199, price: 129, claimed: 85 },
  { name: 'Corsair Vengeance 32GB', oldPrice: 140, price: 89, claimed: 62 },
  { name: 'Logitech G Pro X Superlight', oldPrice: 159, price: 115, claimed: 94 },
];

export default function DealsBanner() {
  const [time, setTime] = useState({ h: 14, m: 45, s: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else { m = 59; h--; }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-black relative overflow-hidden rounded-3xl border border-[#222]">
      {/* Dramatic background stripe */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(177,22,22,0.15)_50%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col xl:flex-row gap-12 xl:gap-8 items-center justify-between">
        
        {/* Header & Timer */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-6 xl:w-1/3">
          <div>
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Flash Offers</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter gradient-text-hero">
              TODAY'S HOT DEALS
            </h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#111] border border-[#222] rounded-xl w-20 h-24 flex items-center justify-center shadow-[0_0_30px_rgba(255,221,0,0.1)]">
                <span className="text-4xl font-mono font-black text-secondary">{time.h.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] text-[#666] font-bold uppercase tracking-widest">HRS</span>
            </div>
            <div className="text-4xl font-black text-[#444] pt-6">:</div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#111] border border-[#222] rounded-xl w-20 h-24 flex items-center justify-center shadow-[0_0_30px_rgba(255,221,0,0.1)]">
                <span className="text-4xl font-mono font-black text-secondary">{time.m.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] text-[#666] font-bold uppercase tracking-widest">MIN</span>
            </div>
            <div className="text-4xl font-black text-[#444] pt-6">:</div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#111] border border-[#222] rounded-xl w-20 h-24 flex items-center justify-center shadow-[0_0_30px_rgba(255,221,0,0.1)]">
                <span className="text-4xl font-mono font-black text-secondary">{time.s.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] text-[#666] font-bold uppercase tracking-widest">SEC</span>
            </div>
          </div>
        </div>

        {/* Deals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:w-2/3 w-full">
          {DEALS.map((deal, i) => (
            <div key={i} className="bg-[#111] border border-[#222] rounded-2xl p-6 flex flex-col hover:border-primary/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors" />
              
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight">{deal.name}</h3>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-black text-secondary">{deal.price} JD</span>
                <span className="text-sm font-bold text-[#666] line-through">{deal.oldPrice} JD</span>
              </div>

              <div className="mt-auto space-y-2 mb-6">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-primary">{deal.claimed}% Claimed</span>
                  <span className="text-[#666]">Limited Stock</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${deal.claimed}%` }} />
                </div>
              </div>

              <button className="w-full bg-transparent border border-[#444] text-white font-black py-3 rounded-lg uppercase tracking-widest text-[11px] hover:border-primary hover:bg-primary hover:shadow-[0_0_15px_rgba(177,22,22,0.3)] transition-all">
                GRAB DEAL
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}