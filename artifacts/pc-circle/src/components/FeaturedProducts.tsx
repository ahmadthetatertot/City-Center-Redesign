import { STORE_DATA } from "@/data/storeData";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Laptop, Monitor, Cpu, Smartphone, HardDrive, Printer, Wifi } from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Laptops & Notebooks": return Laptop;
    case "Desktop (PC)": return Monitor;
    case "Components": return Cpu;
    case "Monitor": return Monitor;
    case "Tablets & Accessories": return Smartphone;
    case "Storage": return HardDrive;
    case "Printers & Scanners": return Printer;
    case "Network Products": return Wifi;
    default: return Laptop;
  }
};

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked gear for uncompromising performance.</p>
          </div>
          <button className="text-sm font-semibold text-primary hover:underline" data-testid="button-view-all">
            View All Products &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {STORE_DATA.products.map((product, index) => {
            const Icon = getCategoryIcon(product.category);
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                data-testid={`product-card-${product.id}`}
              >
                {/* Image Placeholder */}
                <div 
                  className="relative aspect-square w-full overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: product.color }}
                >
                  {product.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground z-10 shadow-lg">
                      {product.badge}
                    </span>
                  )}
                  <Icon className="w-24 h-24 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">{product.category}</div>
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-1">{product.specs}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} 
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-lg font-bold">{product.price} {STORE_DATA.currency}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice} {STORE_DATA.currency}</span>
                      )}
                    </div>
                    <button 
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      data-testid={`button-add-cart-${product.id}`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
