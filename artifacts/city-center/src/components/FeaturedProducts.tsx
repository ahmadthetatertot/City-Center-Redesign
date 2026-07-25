import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'ASUS ROG Strix G16',
    specs: 'i9-14900H · RTX 4070 · 16GB · 1TB',
    price: 849,
    oldPrice: 999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600', // Laptop abstract
  },
  {
    id: 2,
    name: 'HP EliteBook 840 G11',
    specs: 'Core Ultra 7 · 16GB · 512GB',
    price: 620,
    oldPrice: 749,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=600', // Keyboard/laptop
  },
  {
    id: 3,
    name: 'Apple iPad Air 11 M2',
    specs: '8GB · 256GB · Wi-Fi',
    price: 395,
    oldPrice: 430,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600', // Tablet
  },
  {
    id: 4,
    name: 'Dell OptiPlex 7020',
    specs: 'i5-14500 · 16GB · 512GB SSD',
    price: 389,
    oldPrice: 459,
    badge: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=600', // PC case abstract
  },
  {
    id: 5,
    name: 'Samsung 27in QHD 165Hz',
    specs: 'IPS · 2560x1440 · 1ms · HDR400',
    price: 219,
    oldPrice: 269,
    badge: 'Editor Pick',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600', // Monitor
  },
  {
    id: 6,
    name: 'TP-Link Archer AX73',
    specs: 'Wi-Fi 6 · AX5400 · Dual-Band',
    price: 89,
    oldPrice: 115,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600', // Router/network
  },
  {
    id: 7,
    name: 'Seagate Barracuda 2TB',
    specs: '7200 RPM · SATA',
    price: 48,
    oldPrice: 62,
    badge: 'Best Value',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=600', // HDD/components
  },
  {
    id: 8,
    name: 'MSI GeForce RTX 3050',
    specs: '8GB GDDR6',
    price: 189,
    oldPrice: 229,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600', // GPU/components
  }
];

export default function FeaturedProducts() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black uppercase tracking-tight border-l-4 border-primary pl-4">Featured Products</h2>
        <a href="#" className="text-sm font-bold text-muted-foreground hover:text-white transition-colors underline underline-offset-4">
          VIEW ALL
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col bg-card border border-border hover:border-primary/50 transition-all rounded-sm overflow-hidden"
          >
            {/* Image Area */}
            <div className="relative aspect-[4/3] bg-white/5 p-6 flex items-center justify-center overflow-hidden">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-white text-[10px] font-black uppercase px-2 py-1 tracking-wider shadow-md">
                  {product.badge}
                </span>
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover rounded mix-blend-lighten opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-[15px] font-bold text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-[13px] text-muted-foreground mb-4 line-clamp-1">
                {product.specs}
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
                <span className="text-[11px] text-muted-foreground ml-1">(12)</span>
              </div>

              <div className="mt-auto flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground line-through mb-0.5">
                    {product.oldPrice.toFixed(2)} JD
                  </div>
                  <div className="text-xl font-black text-secondary">
                    {product.price.toFixed(2)} <span className="text-sm font-bold">JD</span>
                  </div>
                </div>
                
                <button className="w-10 h-10 bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-border rounded-sm">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
