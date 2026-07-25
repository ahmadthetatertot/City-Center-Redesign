import { Search, Heart, User, ShoppingCart } from 'lucide-react';
import { Link } from 'wouter';

const NAV_LINKS = [
  'GAMING',
  'MONITORS',
  'PERIPHERALS',
  'AUDIO',
  'STORAGE',
  'PRINTERS & SCANNERS',
  'HOME & OFFICE',
  'NETWORKING',
];

export default function Header() {
  return (
    <header className="w-full bg-black border-b-2 border-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/city-center/citycenter-logo.png" 
                alt="City Center Computers" 
                className="h-10 md:h-12 object-contain"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="flex-1 w-full max-w-2xl px-0 md:px-8">
            <div className="relative flex items-center w-full h-11 rounded-sm overflow-hidden bg-white">
              <select className="hidden md:block h-full px-3 text-black text-sm bg-gray-100 border-r border-gray-300 outline-none cursor-pointer font-semibold">
                <option>All Categories</option>
              </select>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="flex-1 h-full px-4 text-black outline-none placeholder:text-gray-500"
              />
              <button className="h-full px-6 bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center justify-center">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Call Us Now</span>
              <span className="text-sm font-bold text-white">+962 6 515 2390</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-primary transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="text-white hover:text-primary transition-colors">
                <User className="w-6 h-6" />
              </button>
              <button className="text-white hover:text-primary transition-colors flex items-center gap-2 group">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    0
                  </span>
                </div>
                <div className="hidden sm:flex flex-col items-start text-left">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold">My Cart</span>
                  <span className="text-xs font-bold text-secondary">0.00 JD</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center justify-between pb-3 pt-1">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <Link 
                  href="#" 
                  className="px-3 py-2 text-[13px] font-bold text-white hover:text-primary transition-colors uppercase whitespace-nowrap block"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
