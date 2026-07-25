import { STORE_DATA } from "@/data/storeData";
import { Laptop, Monitor, Cpu, Mouse, Gamepad2, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  "Laptops": Laptop,
  "Desktops": Gamepad2,
  "Graphics Cards": Cpu,
  "Monitors": Monitor,
  "Accessories": Headphones,
};

export default function CategoryGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
          <p className="text-muted-foreground">Find exactly what you need.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORE_DATA.categories.map((category, index) => {
            const Icon = iconMap[category.name] || Mouse;
            
            return (
              <motion.a
                href={`#${category.name.toLowerCase()}`}
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col items-center sm:items-start p-8 rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:border-primary/50"
                data-testid={`category-card-${category.name}`}
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{category.count} products</p>
                
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                  <Icon className="w-32 h-32 text-primary" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
