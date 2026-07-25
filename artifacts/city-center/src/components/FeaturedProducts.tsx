import { motion } from 'framer-motion';
import { Star, Laptop, Cpu, Monitor, Wifi, HardDrive } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'ASUS ROG Strix G16',
    specs: 'i9-14900H · RTX 4070 · 16GB · 1TB',
    price: 849,
    oldPrice: 999,
    badge: 'BEST SELLER',
    savings: '150 JD',
    stockWarning: null,
    icon: Laptop,
    color: 'rgba(177,22,22,0.15)'
  },
  {
    id: 2,
    name: 'HP EliteBook 840 G11',
    specs: 'Core Ultra 7 · 16GB · 512GB',
    price: 620,
    oldPrice: 749,
    badge: 'TOP RATED',
    savings: '129 JD',
    stockWarning: 'ONLY 3 LEFT',
    icon: Laptop,
    color: 'rgba(255,255,255,0.1)'
  },
  {
    id: 3,
    name: 'Samsung 27" QHD 165Hz',
    specs: 'IPS · 2560x1440 · 1ms · HDR400',
    price: 219,
    oldPrice: 269,
    badge: 'EDITOR PICK',
    savings: '50 JD',
    stockWarning: null,
    icon: Monitor,
    color: 'rgba(177,22,22,0.15)'
  },
  {
    id: 4,
    name: 'Dell OptiPlex 7020',
    specs: 'i5-14500 · 16GB · 512GB SSD',
    price: 389,
    oldPrice: 459,
    badge: 'HOT DEAL',
    savings: '70 JD',
    stockWarning: null,
    icon: Cpu,
    color: 'rgba(255,221,0,0.1)'
  },
  {
    id: 5,
    name: 'TP-Link Archer AX73',
    specs: 'Wi-Fi 6 · AX5400 · Dual-Band',
    price: 89,
    oldPrice: 115,
    badge: 'POPULAR',
    savings: '26 JD',
    stockWarning: null,
    icon: Wifi,
    color: 'rgba(177,22,22,0.15)'
  },
  {
    id: 6,
    name: 'MSI GeForce RTX 3050',
    specs: '8GB GDDR6',
    price: 189,
    oldPrice: 229,
    badge: 'HOT',
    savings: '40 JD',
    stockWarning: 'ONLY 2 LEFT',
    icon: Cpu,
    color: 'rgba(255,255,255,0.1)'
  },
  {
    id: 7,
    name: 'Seagate Barracuda 2TB',
    specs: '7200 RPM · SATA',
    price: 48,
    oldPrice: 62,
    badge: 'VALUE',
    savings: '14 JD',
    stockWarning: null,
    icon: HardDrive,
    color: 'rgba(255,221,0,0.1)'
  },
  {
    id: 8,
    name: 'Apple iPad Air 11 M2',
    specs: '8GB · 256GB · Wi-Fi',
    price: 395,
    oldPrice: 430,
    badge: 'NEW',
    savings: '35 JD',
    stockWarning: null,
    icon: Monitor,
    color: 'rgba(177,22,22,0.15)'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="w-full">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white flex items-center gap-4">
          <span className="w-2 h-8 bg-primary block" />
          Featured Arsenal
        </h2>
        <a href="#" className="hidden sm:flex text-sm font-bold text-[#888] hover:text-white uppercase tracking-wider transition-colors items-center gap-2">
          View All Products <span className="text-primary">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product, i) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="group flex flex-col bg-[#0d0d0d] border border-[#1a1a1a] hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(177,22,22,0.25)] relative"
            >
              {/* Product Visual Area */}
              <div 
                className="h-[240px] w-full relative flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(180deg, ${product.color} 0%, transparent 100%)` }}
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest shadow-md">
                    {product.badge}
                  </span>
                </div>

                {/* Stock Warning */}
                {product.stockWarning && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-secondary text-[10px] font-black uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-sm border border-secondary/20">
                      ⚡ {product.stockWarning}
                    </span>
                  </div>
                )}

                {/* Abstract Icon/LED representation */}
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 shadow-[0_0_80px_rgba(177,22,22,0.6)] rounded-full mix-blend-screen pointer-events-none" />
                  <Icon className="w-32 h-32 text-white/40 drop-shadow-2xl" strokeWidth={1} />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-transparent to-[#050505]">
                <h3 className="text-lg font-black text-white mb-1 tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-[#666] mb-5 line-clamp-1">
                  {product.specs}
                </p>

                <div className="flex items-center gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                  <span className="text-xs font-bold text-[#555] ml-2">(128)</span>
                </div>

                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#666] line-through mb-0.5">
                        {product.oldPrice.toFixed(2)} JD
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-secondary leading-none">
                          {product.price.toFixed(2)}
                        </span>
                        <span className="text-sm font-bold text-secondary">JD</span>
                      </div>
                    </div>
                    <span className="bg-primary text-white text-[10px] font-black uppercase px-2 py-1 rounded-full tracking-wider">
                      SAVE {product.savings}
                    </span>
                  </div>
                  
                  <button className="w-full shine-effect group-hover:animate-shine text-white font-black py-4 rounded-xl uppercase tracking-widest text-sm transition-all border border-[#B11616]">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}