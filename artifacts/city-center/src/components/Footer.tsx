import { MapPin, Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube, SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#B11616] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <img src="/city-center/citycenter-logo.png" alt="City Center" className="h-10 mb-6" />
            <p className="text-[#777] text-sm font-medium mb-8 max-w-sm leading-relaxed">
              Premium gaming hardware, expert builds, and uncompromising performance. Empowering Jordan's gamers and creators for over 19 years.
            </p>
            
            <div className="flex flex-col gap-4 text-[#777] text-sm font-semibold mb-8">
              <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Amman, Jordan</span>
              <span className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +962 6 515 2390</span>
              <span className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> info@citycenter.jo</span>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#777] hover:text-white hover:border-primary transition-colors"><SiFacebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#777] hover:text-white hover:border-primary transition-colors"><SiInstagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#777] hover:text-white hover:border-primary transition-colors"><SiYoutube className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#777] hover:text-white hover:border-primary transition-colors"><SiX className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-white font-black uppercase tracking-wider mb-6 inline-block border-b-2 border-primary pb-1">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#777] font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Gaming Laptops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom PCs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Graphics Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Processors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monitors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Peripherals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-wider mb-6 inline-block border-b-2 border-primary pb-1">Support</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#777] font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tech Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-wider mb-6 inline-block border-b-2 border-primary pb-1">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#777] font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-xs font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} City Center Computers. All rights reserved.
          </p>
          <div className="flex gap-2 opacity-50 grayscale">
            <div className="w-10 h-6 bg-white rounded-sm" />
            <div className="w-10 h-6 bg-white rounded-sm" />
            <div className="w-10 h-6 bg-white rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}