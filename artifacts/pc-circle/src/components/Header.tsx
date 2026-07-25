import { useState } from "react";
import { STORE_DATA } from "@/data/storeData";
import { Link } from "wouter";
import { ShoppingCart, Search, Menu, X, Moon, Sun, CircleDashed, Phone, Heart, User } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <a href={`tel:${STORE_DATA.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>{STORE_DATA.phone}</span>
            </a>
            <span className="w-px h-3 bg-slate-700"></span>
            <Link href="#brands" className="hover:text-white transition-colors">Brands</Link>
          </div>
          <div className="flex-1 text-center font-medium text-slate-200">
            {STORE_DATA.announcementBar}
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Heart className="w-3.5 h-3.5" />
              <span>Wishlist</span>
            </button>
            <span className="w-px h-3 bg-slate-700"></span>
            <button className="flex items-center gap-1.5 hover:text-white transition-colors">
              <User className="w-3.5 h-3.5" />
              <span>Login / Register</span>
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
            <CircleDashed className="w-8 h-8 text-primary group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-bold text-xl tracking-tight hidden sm:block">{STORE_DATA.storeName}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {STORE_DATA.navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`nav-link-${link}`}
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex relative items-center max-w-sm w-full mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full h-9 pl-9 pr-4 rounded-full border border-border bg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Icon */}
            <button className="lg:hidden text-muted-foreground hover:text-foreground transition-colors" data-testid="button-search">
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-theme-toggle"
            >
              <Sun className="w-5 h-5 hidden dark:block" />
              <Moon className="w-5 h-5 block dark:hidden" />
            </button>

            <Link href="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors" data-testid="link-cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-border bg-background overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-4">
                {STORE_DATA.navLinks.map((link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
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
