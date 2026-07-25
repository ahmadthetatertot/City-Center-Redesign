import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="w-full bg-primary border-t border-border/50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <Mail className="w-12 h-12 text-white mb-6" />
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
          Stay Updated
        </h2>
        <p className="text-white/80 font-medium mb-8 max-w-lg">
          Subscribe to our newsletter for exclusive offers, latest arrivals, and tech news straight to your inbox.
        </p>
        
        <div className="flex w-full max-w-md bg-black rounded-sm overflow-hidden p-1 shadow-2xl">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-600 text-sm"
          />
          <button className="bg-primary text-white font-bold px-6 py-3 uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors rounded-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
