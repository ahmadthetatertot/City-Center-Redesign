import { STORE_DATA } from "@/data/storeData";
import { Laptop, Monitor, Cpu, Mouse, Smartphone, HardDrive, Printer, Wifi, Zap, Droplets, Plug, Headphones } from "lucide-react";
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
    <section className="py-20 bg-background" id="categories">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Shop by Category</h2>
          <p className="text-muted-foreground">Find exactly what you need.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {STORE_DATA.categories.map((category, index) => {
            const Icon = iconMap[category.name] || Mouse;
            
            return (
              <motion.a
                href={`#${category.name.toLowerCase()}`}
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative flex flex-col items-center sm:items-start p-5 rounded-xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:border-primary/50"
                data-testid={`category-card-${category.name}`}
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold mb-1 line-clamp-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground font-medium">{category.count} products</p>
                
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-5 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                  <Icon className="w-24 h-24 text-primary" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
