import { Clock, Truck, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
  { icon: Clock, stat: '1HR', label: 'Amman Delivery' },
  { icon: Truck, stat: '30JD+', label: 'Free Shipping' },
  { icon: ShieldCheck, stat: '100%', label: 'Genuine Hardware' },
  { icon: HeadphonesIcon, stat: '19YRS', label: 'Expert Support' }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">
          The City Center Standard
        </h2>
        <p className="text-[#666] font-semibold mt-2 uppercase tracking-widest text-sm">
          Why serious gamers choose us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group flex flex-col items-center text-center p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-colors duration-500 rounded-full" />
              
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(177,22,22,0.5)] transition-all duration-300">
                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              
              <span className="text-5xl font-black text-secondary mb-2 tracking-tighter">
                {item.stat}
              </span>
              
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {item.label}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}