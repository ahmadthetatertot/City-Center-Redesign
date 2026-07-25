import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center border border-[#222] p-10 bg-black">
          <div className="inline-flex items-center justify-center p-3 mb-6">
            <Mail className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-extrabold mb-4 tracking-tight uppercase text-white">Join Our Newsletter</h2>
          <p className="text-[#aaaaaa] mb-8 text-sm">
            Subscribe to get early access to new product drops and exclusive sales.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-grow relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full h-12 px-4 bg-[#111] border border-border text-white placeholder:text-[#555] focus:outline-none focus:border-primary transition-colors text-sm font-bold uppercase tracking-wider"
                required
                data-testid="input-newsletter-email"
              />
            </div>
            <button 
              type="submit"
              className="h-12 px-8 bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-[#8f1212] transition-colors active:scale-95 whitespace-nowrap"
              data-testid="button-newsletter-subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
