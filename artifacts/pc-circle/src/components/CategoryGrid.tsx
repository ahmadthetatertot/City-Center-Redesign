import { STORE_DATA } from "@/data/storeData";
import { Laptop, Monitor, Cpu, Mouse, Smartphone, HardDrive, Printer, Wifi, Zap, Droplets, Plug, Headphones, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  "Laptops & Notebooks": Laptop,
  "Desktop (PC)": Monitor,
  "Components": Cpu,
  "Monitor": Monitor,
  "Tablets & Accessories": Smartphone,
  "Storage": HardDrive,
  "Printers & Scanners": Printer,
  "Network Products": Wifi,
  "Accessories": Mouse,
  "Power & Chargers": Zap,
  "Ink & Toner Supplies": Droplets,
  "Cables & Adapters": Plug,
  "Headphones & Headsets": Headphones,
};

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-border relative overflow-hidden" id="categories">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight uppercase border-l-4 border-primary pl-4 text-white">Categories</h2>
          <button className="text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 uppercase">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal scroll container for categories */}
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-4 snap-x hide-scrollbar">
          {STORE_DATA.categories.map((category, index) => {
            const Icon = iconMap[category.name] || Mouse;
            
            return (
              <motion.a
                href={`#${category.name.toLowerCase()}`}
                key={category.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex-shrink-0 w-36 sm:w-44 flex flex-col items-center justify-center p-6 rounded-md bg-card border border-border snap-start hover:border-primary transition-all duration-300 relative overflow-hidden"
                data-testid={`category-card-${category.name}`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative mb-4 text-muted-foreground group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-center line-clamp-2 uppercase text-white group-hover:text-white transition-colors">{category.name}</h3>
              </motion.a>
            );
          })}
        </div>
      </div>
      
      {/* CSS to hide scrollbar for the container */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
