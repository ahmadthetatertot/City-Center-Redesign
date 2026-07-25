import { SiFacebook, SiInstagram, SiYoutube, SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t-2 border-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* About Column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <img 
              src="/city-center/citycenter-logo.png" 
              alt="City Center Computers" 
              className="h-12 object-contain mb-6"
            />
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              City Center Computers is Jordan's premium destination for gamers and tech enthusiasts. Offering the best hardware, expert advice, and unbeatable service for over 19 years.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white font-medium mb-6">
              <span>📍 Amman, Jordan</span>
              <span>📞 +962 6 515 2390</span>
              <span>✉️ info@citycenter.jo</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary hover:border-primary transition-all">
                <SiFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary hover:border-primary transition-all">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary hover:border-primary transition-all">
                <SiYoutube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary hover:border-primary transition-all">
                <SiX className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Gaming Laptops</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gaming PCs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Monitors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Components</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Peripherals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Networking</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Store Locator</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} City Center Computers. All rights reserved.
          </p>
          <div className="flex gap-2">
            {/* Payment method placeholders */}
            <div className="w-12 h-8 bg-card border border-border rounded flex items-center justify-center text-[10px] font-bold text-muted-foreground uppercase">VISA</div>
            <div className="w-12 h-8 bg-card border border-border rounded flex items-center justify-center text-[10px] font-bold text-muted-foreground uppercase">MC</div>
            <div className="w-12 h-8 bg-card border border-border rounded flex items-center justify-center text-[10px] font-bold text-muted-foreground uppercase">CASH</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
