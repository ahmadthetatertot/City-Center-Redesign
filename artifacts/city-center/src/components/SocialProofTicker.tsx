export default function SocialProofTicker() {
  const items = [
    "Ahmad in Amman just bought ASUS ROG Strix G16",
    "Sara in Zarqa just bought Samsung 27\" Monitor",
    "142 orders shipped today",
    "Mohammed in Irbid just bought MSI RTX 3050",
    "Free shipping active on all orders over 30 JD",
    "⚡ Limited stock: Apple iPad Air — 4 left"
  ];

  // Repeat items to ensure smooth infinite scroll
  const marqueeContent = [...items, ...items, ...items];

  return (
    <div className="w-full h-12 bg-[#0a0a0a] border-y border-[#1a1a1a] flex items-center overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap min-w-max">
        {marqueeContent.map((text, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-6 text-primary font-bold text-[10px]">●</span>
            <span className="text-[#888] text-xs font-semibold uppercase tracking-wider">
              {text.replace(/(\d+|JD|ASUS ROG Strix G16|Samsung 27" Monitor|MSI RTX 3050|Apple iPad Air)/g, '<span class="text-white font-bold">$&</span>').replace(/\d+/g, '<span class="text-secondary">$&</span>')}
              <span dangerouslySetInnerHTML={{ 
                __html: text
                  .replace(/(\b\d+\b|JD|ASUS ROG Strix G16|Samsung 27" Monitor|MSI RTX 3050|Apple iPad Air)/g, match => 
                    /^\d+$/.test(match) 
                      ? `<span class="text-secondary font-black">${match}</span>` 
                      : `<span class="text-white font-bold">${match}</span>`
                  ) 
              }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}