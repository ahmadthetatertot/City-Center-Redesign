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
    <section className="py-16 bg-[#080808] border-y border-border" id="brands">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold tracking-tight mb-8 uppercase text-center text-white">
          <span className="text-primary">//</span> Shop By Brand
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {STORE_DATA.brands.map((brand, index) => {
            const Icon = brandIconMap[brand];
            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="flex items-center gap-2 px-6 py-4 bg-[#111] border border-border hover:border-secondary hover:bg-[#1a1a1a] text-muted-foreground hover:text-secondary transition-all duration-300 cursor-pointer min-w-[140px] justify-center"
              >
                {Icon && <Icon className="w-6 h-6" />}
                <span className="font-bold text-sm uppercase tracking-wider">{brand}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
