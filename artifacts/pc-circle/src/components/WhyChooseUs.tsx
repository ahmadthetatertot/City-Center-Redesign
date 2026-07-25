import { STORE_DATA } from "@/data/storeData";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">The PC Circle Advantage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just sell hardware; we stand behind it. Experience premium service tailored for tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STORE_DATA.trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-border hover:bg-card transition-all duration-300"
            >
              <div className="mb-4 text-primary">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
