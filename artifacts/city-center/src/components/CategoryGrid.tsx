import { Laptop, Cpu, Monitor, Gamepad2, HardDrive, Database, Network, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { icon: Laptop, name: 'Gaming Laptops', count: '142 Products' },
  { icon: Cpu, name: 'Gaming PC', count: '85 Builds' },
  { icon: Monitor, name: 'Monitors', count: '110 Displays' },
  { icon: Gamepad2, name: 'Gaming Gears', count: '320 Items' },
  { icon: HardDrive, name: 'SSD Drives', count: '94 Drives' },
  { icon: Database, name: 'External HDDs', count: '45 Drives' },
  { icon: Network, name: 'Networking', count: '215 Devices' },
  { icon: Headphones, name: 'Audio', count: '178 Headsets' },
];

export default function CategoryGrid() {
  return (
    <section className="w-full">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white flex items-center gap-4">
          <span className="w-2 h-8 bg-primary block" />
          Shop By Category
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex flex-col items-start p-6 bg-[#111] border border-[#222] rounded-2xl overflow-hidden hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(177,22,22,0.3)] transition-all duration-300"
            >
              {/* Diagonal stripe texture */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-[length:6px_6px] pointer-events-none" />
              
              <div className="relative z-10 text-primary mb-6 group-hover:drop-shadow-[0_0_8px_rgba(177,22,22,0.8)] transition-all">
                <Icon className="w-8 h-8" strokeWidth={2} />
              </div>
              
              <h3 className="relative z-10 text-base font-bold text-white mb-1 uppercase tracking-wider">{cat.name}</h3>
              <span className="relative z-10 text-xs font-semibold text-[#666]">{cat.count}</span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}