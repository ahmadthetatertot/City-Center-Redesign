import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-slate-900 text-slate-50 dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-6">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Stay Ahead of the Curve</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Get exclusive early access to new drops, limited deals, and expert tech insights delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-grow relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full h-12 px-4 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
                data-testid="input-newsletter-email"
              />
            </div>
            <button 
              type="submit"
              className="h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 active:scale-95"
              data-testid="button-newsletter-subscribe"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-4">We respect your inbox. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}
