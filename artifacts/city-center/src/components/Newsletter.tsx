export default function Newsletter() {
  return (
    <section className="w-full bg-[#050505] border-y border-[#1a1a1a] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter gradient-text-hero mb-4">
          JOIN THE INNER CIRCLE
        </h2>
        
        <p className="text-[#888] font-medium text-lg mb-10">
          Get exclusive hardware drops, early access to sales, and tech news before anyone else. No spam. Just fire.
        </p>
        
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
          <div className="w-full max-w-sm relative">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full h-14 bg-[#111] border border-[#222] rounded-full px-6 text-white placeholder:text-[#555] font-medium outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <button className="h-14 px-8 bg-primary hover:brightness-110 text-white font-black rounded-full uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(177,22,22,0.2)] hover:shadow-[0_0_30px_rgba(177,22,22,0.4)] whitespace-nowrap">
            GET EARLY ACCESS
          </button>
        </div>
      </div>
    </section>
  );
}