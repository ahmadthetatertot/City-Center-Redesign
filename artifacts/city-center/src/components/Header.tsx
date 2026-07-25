import { Search, Heart, User, ShoppingCart } from 'lucide-react';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  'GAMING', 'MONITORS', 'PERIPHERALS', 'AUDIO', 
  'STORAGE', 'PRINTERS', 'HOME & OFFICE', 'NETWORKING'
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black' : 'bg-black border-b border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/city-center/citycenter-logo.png" alt="City Center Computers" className="h-10 md:h-12 object-contain" />
            </Link>
          </div>

          {/* Sleek Search */}
          <div className="flex-1 w-full max-w-2xl px-0 md:px-8">
            <div className="relative flex items-center w-full h-12 rounded-full bg-white/5 border border-white/10 focus-within:border-white/30 focus-within:bg-white/10 transition-all overflow-hidden">
              <input 
                type="text" 
                placeholder="Search premium hardware..." 
                className="flex-1 h-full px-6 bg-transparent text-white outline-none placeholder:text-gray-500 font-medium"
              />
              <button className="h-full px-8 bg-primary text-white font-bold hover:brightness-110 transition-all flex items-center justify-center">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[11px] text-[#888] uppercase font-bold tracking-widest">Call Us Now</span>
              <span className="text-sm font-black text-white tracking-wide">+962 6 515 2390</span>
            </div>
            
            <div className="flex items-center gap-5">
              <button className="text-white hover:text-primary transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-primary transition-colors flex items-center gap-3 group">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">0</span>
                </div>
                <div className="hidden sm:flex flex-col items-start text-left">
                  <span className="text-[10px] text-[#888] uppercase font-bold tracking-wider">Cart</span>
                  <span className="text-xs font-black text-secondary">0.00 JD</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center justify-center pb-4">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <Link 
                  href="#" 
                  className="relative px-1 py-2 text-[13px] font-bold text-white uppercase tracking-wider block group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}