import { STORE_DATA } from "@/data/storeData";
import { Link } from "wouter";
import { CircleDashed } from "lucide-react";
import { SiX, SiYoutube, SiInstagram, SiFacebook, SiVisa, SiMastercard, SiPaypal, SiAmericanexpress } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex" data-testid="link-footer-home">
              <CircleDashed className="w-8 h-8 text-primary group-hover:rotate-90 transition-transform duration-500" />
              <span className="font-bold text-xl tracking-tight text-slate-50">{STORE_DATA.storeName}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              {STORE_DATA.tagline}. Your premium destination for high-performance computing, expert advice, and unbeatable support.
            </p>
            
            <div className="flex flex-col gap-2 mb-8 text-sm">
              <a href={`tel:${STORE_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{STORE_DATA.phone}</a>
              <a href={`mailto:${STORE_DATA.email}`} className="hover:text-primary transition-colors">{STORE_DATA.email}</a>
              <span className="text-slate-500">{STORE_DATA.address}</span>
            </div>

            <div className="flex items-center gap-4">
              <a href={STORE_DATA.socialLinks.twitter} className="text-slate-500 hover:text-primary transition-colors">
                <SiX className="w-5 h-5" />
              </a>
              <a href={STORE_DATA.socialLinks.facebook} className="text-slate-500 hover:text-primary transition-colors">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href={STORE_DATA.socialLinks.instagram} className="text-slate-500 hover:text-primary transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href={STORE_DATA.socialLinks.youtube} className="text-slate-500 hover:text-primary transition-colors">
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(STORE_DATA.footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-slate-50 font-bold mb-6 tracking-wide">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-sm hover:text-primary transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {STORE_DATA.storeName}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-slate-500">
            <SiVisa className="w-8 h-8 opacity-50" />
            <SiMastercard className="w-8 h-8 opacity-50" />
            <SiAmericanexpress className="w-8 h-8 opacity-50" />
            <SiPaypal className="w-8 h-8 opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
