import { Clock, Truck, ShieldCheck, HeadphonesIcon } from 'lucide-react';

const REASONS = [
  {
    icon: Clock,
    title: '1-Hour Delivery in Amman',
    desc: 'Get your orders lightning fast within Amman limits.'
  },
  {
    icon: Truck,
    title: 'Free Shipping 30 JD+',
    desc: 'Enjoy free delivery across Jordan on qualifying orders.'
  },
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    desc: '100% authentic hardware with official warranties.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    desc: 'Technical assistance from our experienced team.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {REASONS.map((reason, i) => {
        const Icon = reason.icon;
        return (
          <div 
            key={i}
            className="flex flex-col items-center text-center p-8 bg-card border border-border rounded-sm hover:border-primary/30 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-black border border-primary/20 flex items-center justify-center mb-6 text-primary">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-[15px] font-bold text-white mb-2 uppercase tracking-wide">
              {reason.title}
            </h3>
            <p className="text-[13px] text-muted-foreground">
              {reason.desc}
            </p>
          </div>
        );
      })}
    </section>
  );
}
