import { useState, useEffect } from "react";
import { STORE_DATA } from "@/data/storeData";
import { Zap } from "lucide-react";

export default function DealsBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: STORE_DATA.dealCountdownHours,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) return prev;
        
        let h = prev.hours;
        let m = prev.minutes;
        let s = prev.seconds - 1;

        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }

        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="bg-gradient-to-r from-[#7a0f0f] via-primary to-[#8f1212] text-white py-12 border-y-[4px] border-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center bg-[#0a0a0a] text-secondary rounded-sm shadow-xl shrink-0">
              <Zap className="h-8 w-8 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 uppercase text-secondary drop-shadow-md">Hot Deals</h2>
              <p className="text-white/90 font-bold uppercase tracking-wider text-sm">Top-tier graphics cards and gaming laptops.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#0a0a0a]/20 p-4 sm:p-2 sm:pr-4 rounded-sm border border-white/10 w-full sm:w-auto">
            {/* Countdown */}
            <div className="flex items-center gap-3 font-mono text-3xl font-bold px-4">
              <div className="flex flex-col items-center">
                <span className="text-white drop-shadow-md">{pad(timeLeft.hours)}</span>
                <span className="text-[10px] uppercase font-sans font-extrabold text-secondary mt-1">Hours</span>
              </div>
              <span className="mb-4 text-white/50">:</span>
              <div className="flex flex-col items-center">
                <span className="text-white drop-shadow-md">{pad(timeLeft.minutes)}</span>
                <span className="text-[10px] uppercase font-sans font-extrabold text-secondary mt-1">Mins</span>
              </div>
              <span className="mb-4 text-white/50">:</span>
              <div className="flex flex-col items-center">
                <span className="text-white drop-shadow-md">{pad(timeLeft.seconds)}</span>
                <span className="text-[10px] uppercase font-sans font-extrabold text-secondary mt-1">Secs</span>
              </div>
            </div>

            <button 
              className="w-full sm:w-auto px-8 py-3.5 bg-black text-white hover:text-secondary border border-border hover:border-secondary font-bold text-sm uppercase tracking-wider transition-colors active:scale-95"
              data-testid="button-claim-deal"
            >
              Shop Deals
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
