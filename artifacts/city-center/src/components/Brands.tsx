const BRANDS = [
  'Intel', 'NVIDIA', 'ASUS', 'HP', 'Dell', 'Apple', 'Samsung', 'MSI', 
  'Kingston', 'Seagate', 'TP-Link', 'Logitech', 'Acer', 'Lenovo', 'Corsair', 'Redragon'
];

export default function Brands() {
  return (
    <section>
      <div className="flex items-center justify-center mb-10">
        <h2 className="text-2xl font-black uppercase tracking-tight text-center">
          Our Trusted Brands
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {BRANDS.map((brand) => (
          <div 
            key={brand}
            className="px-6 py-3 bg-card border border-border text-muted-foreground font-bold text-sm uppercase tracking-wider hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer rounded-sm"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
