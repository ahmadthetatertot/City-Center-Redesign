import { STORE_DATA } from "@/data/storeData";
import { MapPin, Truck, ShieldCheck, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  "1-Hour Delivery in Amman": MapPin,
  "Free Shipping 30 JD+": Truck,
  "Genuine Products": ShieldCheck,
  "Expert Support": MessageCircle,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold tracking-tight uppercase text-white"><span className="text-primary">//</span> Why PC Circle</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORE_DATA.trustBadges.map((badge, index) => {
            const Icon = iconMap[badge.title] || ShieldCheck;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-[#0d0d0d] border border-border hover:border-primary transition-colors"
              >
                <div className="mb-4 text-primary bg-primary/10 p-4 rounded-full">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold mb-2 uppercase text-white tracking-wider">{badge.title}</h3>
                <p className="text-xs text-[#aaaaaa] leading-relaxed">{badge.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
