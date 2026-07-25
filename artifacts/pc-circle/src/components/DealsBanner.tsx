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
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] opacity-20"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-black/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
          
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-lg">
              <Zap className="h-8 w-8 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-1">Flash Sale: Up to 40% Off</h2>
              <p className="text-primary-foreground/80 font-medium">Top-tier graphics cards and gaming laptops.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Countdown */}
            <div className="flex items-center gap-3 font-mono text-3xl font-bold bg-black/20 px-6 py-3 rounded-xl border border-white/10">
              <div className="flex flex-col items-center">
                <span>{pad(timeLeft.hours)}</span>
                <span className="text-[10px] uppercase font-sans font-semibold text-primary-foreground/70">Hours</span>
              </div>
              <span className="mb-4">:</span>
              <div className="flex flex-col items-center">
                <span>{pad(timeLeft.minutes)}</span>
                <span className="text-[10px] uppercase font-sans font-semibold text-primary-foreground/70">Mins</span>
              </div>
              <span className="mb-4">:</span>
              <div className="flex flex-col items-center">
                <span>{pad(timeLeft.seconds)}</span>
                <span className="text-[10px] uppercase font-sans font-semibold text-primary-foreground/70">Secs</span>
              </div>
            </div>

            <button 
              className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg shadow-black/10 active:scale-95"
              data-testid="button-claim-deal"
            >
              Claim Deal
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
