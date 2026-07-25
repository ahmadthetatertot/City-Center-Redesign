import { useState } from "react";
import { STORE_DATA } from "@/data/storeData";
import { Link } from "wouter";
import { ShoppingCart, Search, Menu, X, CircleDashed, Phone, Heart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar - Announcement */}
      <div className="bg-black text-center py-2 border-b border-border">
        <div className="container mx-auto px-4 text-xs font-bold tracking-wider">
          <span className="text-secondary">{STORE_DATA.announcementBar.split('—')[0]}</span>
          <span className="text-primary ml-2 hidden sm:inline">— {STORE_DATA.announcementBar.split('—')[1]}</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b-[3px] border-primary bg-[#0a0a0a]">
        {/* Main Header Row */}
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0" data-testid="link-home">
            <CircleDashed className="w-8 h-8 text-primary group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-extrabold text-2xl tracking-tight text-white hidden sm:block uppercase">PC CIRCLE</span>
          </Link>

          {/* Centered Search Bar */}
          <div className="hidden lg:flex relative flex-1 max-w-2xl mx-auto">
            <div className="relative w-full flex">
              <input 
                type="text" 
                placeholder="Search for components, laptops, peripherals..." 
                className="w-full h-11 pl-5 pr-4 rounded-l-md border border-border bg-card text-sm text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              />
              <button className="h-11 px-6 bg-primary text-primary-foreground font-bold rounded-r-md hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span className="hidden xl:block">Search</span>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <button className="lg:hidden text-white hover:text-primary transition-colors" data-testid="button-search">
              <Search className="w-6 h-6" />
            </button>

            <button className="hidden md:flex flex-col items-end text-white hover:text-primary transition-colors group">
              <span className="text-[10px] text-muted-foreground font-bold uppercase group-hover:text-primary transition-colors">Call Us</span>
              <span className="text-sm font-bold flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {STORE_DATA.phone}</span>
            </button>

            <button className="hidden sm:flex text-white hover:text-primary transition-colors relative">
              <Heart className="w-6 h-6" />
            </button>

            <button className="hidden sm:flex text-white hover:text-primary transition-colors">
              <User className="w-6 h-6" />
            </button>

            <Link href="/cart" className="relative text-white hover:text-secondary transition-colors flex items-center gap-2" data-testid="link-cart">
              <div className="relative">
                <ShoppingCart className="w-7 h-7" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[11px] font-extrabold text-black">
                  3
                </span>
              </div>
              <div className="hidden md:flex flex-col items-start ml-1">
                <span className="text-[10px] text-muted-foreground font-bold uppercase">My Cart</span>
                <span className="text-sm font-bold text-secondary">0.00 {STORE_DATA.currency}</span>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white hover:text-primary transition-colors ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Desktop Nav Row */}
        <div className="hidden lg:block bg-black border-t border-border">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-8 h-12">
              {STORE_DATA.navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wide"
                  data-testid={`nav-link-${link}`}
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-[#0d0d0d] overflow-hidden border-t border-border absolute w-full"
            >
              <nav className="flex flex-col p-4">
                {STORE_DATA.navLinks.map((link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-bold text-white hover:text-primary transition-colors py-3 border-b border-border uppercase tracking-wider"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
