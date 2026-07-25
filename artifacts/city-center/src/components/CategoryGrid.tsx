import { Monitor, Laptop, Cpu, HardDrive, Network, Gamepad2, Printer, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { icon: Laptop, label: 'Gaming Laptops' },
  { icon: Cpu, label: 'Gaming PC' },
  { icon: Monitor, label: 'Monitors' },
  { icon: Gamepad2, label: 'Gaming Gears' },
  { icon: HardDrive, label: 'SSD Drives' },
  { icon: HardDrive, label: 'External HDDs' },
  { icon: Network, label: 'Networking' },
  { icon: Headphones, label: 'Audio' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function CategoryGrid() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black uppercase tracking-tight border-l-4 border-primary pl-4">Shop By Category</h2>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
      >
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.a
              key={i}
              variants={item}
              href="#"
              className="group flex flex-col items-center justify-center gap-4 p-6 bg-card border border-border hover:border-secondary transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,221,0,0.15)] rounded-sm"
            >
              <div className="text-primary group-hover:text-secondary transition-colors">
                <Icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-bold text-center group-hover:text-white transition-colors">{cat.label}</span>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
