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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase border-l-4 border-primary pl-4 text-white">Featured Hardware</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORE_DATA.products.map((product, index) => {
            const Icon = getCategoryIcon(product.category);
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col bg-[#0d0d0d] border border-border overflow-hidden hover:border-primary transition-all duration-300 relative"
                data-testid={`product-card-${product.id}`}
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-[#111] border-b border-border p-6">
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider z-10 shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <Icon className="w-20 h-20 text-white/10 group-hover:scale-110 group-hover:text-white/20 transition-all duration-500" strokeWidth={1} />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5">
                  <div className="text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-wider">{product.category}</div>
                  <h3 className="font-bold text-base text-white mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-xs text-[#aaaaaa] mb-4 line-clamp-2 leading-relaxed">{product.specs}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-4 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "fill-border text-border"}`} 
                      />
                    ))}
                    <span className="text-[10px] text-muted-foreground ml-1 font-bold">({product.reviewCount})</span>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-end justify-between mt-auto">
                    <div className="flex flex-col">
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through font-medium mb-0.5">{product.originalPrice} {STORE_DATA.currency}</span>
                      )}
                      <span className="text-xl font-extrabold text-secondary">{product.price} {STORE_DATA.currency}</span>
                    </div>
                    <button 
                      className="flex h-10 w-10 items-center justify-center bg-primary text-white hover:bg-[#8f1212] transition-colors active:scale-95"
                      data-testid={`button-add-cart-${product.id}`}
                      aria-label="Add to cart"
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
