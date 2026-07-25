import { STORE_DATA } from "@/data/storeData";
import { motion } from "framer-motion";
import { 
  SiHp, SiDell, SiAsus, SiLenovo, SiApple, SiSamsung, 
  SiAcer, SiMsi, SiSeagate, SiCorsair 
} from "react-icons/si";

const brandIconMap: Record<string, any> = {
  "HP": SiHp,
  "Dell": SiDell,
  "Asus": SiAsus,
  "Lenovo": SiLenovo,
  "Apple": SiApple,
  "Samsung": SiSamsung,
  "Acer": SiAcer,
  "MSI": SiMsi,
  "Seagate": SiSeagate,
  "Corsair": SiCorsair,
};

export default function Brands() {
  return (
    <section className="py-16 bg-background border-t border-border/40" id="brands">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Top Brands We Carry</h2>
        <p className="text-muted-foreground mb-10">Authorized reseller for leading global manufacturers</p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {STORE_DATA.brands.map((brand, index) => {
            const Icon = brandIconMap[brand];
            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors duration-300 shadow-sm cursor-pointer"
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span className="font-semibold text-sm">{brand}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
