import { Phone } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-black py-2 px-4 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs font-semibold text-secondary tracking-wide">
        <div className="uppercase">
          Free shipping on orders over 30 JD!
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <Phone className="w-3.5 h-3.5" />
          <span>+962 6 515 2390</span>
        </div>
      </div>
    </div>
  );
}
