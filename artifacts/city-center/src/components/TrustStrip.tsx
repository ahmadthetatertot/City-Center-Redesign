import { SiFacebook } from 'react-icons/si';
import { Award } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="w-full bg-card border-b border-border py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm font-semibold">
          
          <a href="https://www.facebook.com/citycentercomputers" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-[#1877F2] transition-colors group">
            <SiFacebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
            <span>Join our Facebook Community</span>
          </a>

          <div className="flex items-center gap-2 text-white">
            <Award className="w-5 h-5 text-secondary" />
            <span>19+ Years of IT Hardware Supply in Jordan</span>
          </div>

        </div>
      </div>
    </div>
  );
}
