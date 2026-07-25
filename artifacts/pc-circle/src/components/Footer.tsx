import { STORE_DATA } from "@/data/storeData";
import { Link } from "wouter";
import { CircleDashed } from "lucide-react";
import { SiX, SiYoutube, SiInstagram, SiFacebook, SiVisa, SiMastercard, SiPaypal, SiAmericanexpress } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-[#aaaaaa] pt-16 pb-8 border-t-[3px] border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex" data-testid="link-footer-home">
              <CircleDashed className="w-8 h-8 text-primary group-hover:rotate-90 transition-transform duration-500" />
              <span className="font-extrabold text-2xl tracking-tight text-white uppercase">PC CIRCLE</span>
            </Link>
            <p className="text-xs leading-relaxed mb-6 font-medium max-w-sm uppercase tracking-wide text-[#777]">
              {STORE_DATA.tagline}. High-performance computing, expert advice, and unbeatable support.
            </p>
            
            <div className="flex flex-col gap-2 mb-8 text-sm font-bold text-white">
              <a href={`tel:${STORE_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs uppercase tracking-widest">TEL:</span> {STORE_DATA.phone}</a>
              <a href={`mailto:${STORE_DATA.email}`} className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs uppercase tracking-widest">EMAIL:</span> {STORE_DATA.email}</a>
              <span className="flex items-center gap-2"><span className="text-primary text-xs uppercase tracking-widest">ADDR:</span> {STORE_DATA.address}</span>
            </div>

            <div className="flex items-center gap-4">
              <a href={STORE_DATA.socialLinks.twitter} className="text-white hover:text-primary transition-colors bg-[#111] p-2 border border-[#222]">
                <SiX className="w-4 h-4" />
              </a>
              <a href={STORE_DATA.socialLinks.facebook} className="text-white hover:text-primary transition-colors bg-[#111] p-2 border border-[#222]">
                <SiFacebook className="w-4 h-4" />
              </a>
              <a href={STORE_DATA.socialLinks.instagram} className="text-white hover:text-primary transition-colors bg-[#111] p-2 border border-[#222]">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href={STORE_DATA.socialLinks.youtube} className="text-white hover:text-primary transition-colors bg-[#111] p-2 border border-[#222]">
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(STORE_DATA.footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-extrabold mb-6 tracking-wider uppercase text-sm border-l-2 border-primary pl-3">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-xs font-bold hover:text-secondary transition-colors uppercase tracking-wider text-[#aaaaaa]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#777]">
            &copy; {new Date().getFullYear()} PC CIRCLE JORDAN. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-3 text-[#555]">
            <SiVisa className="w-8 h-8" />
            <SiMastercard className="w-8 h-8" />
            <SiAmericanexpress className="w-8 h-8" />
            <SiPaypal className="w-8 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
