import { useEffect, useState } from 'react';

const LogoSlider: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      setOffset(prev => prev - scrollDelta * 0.1);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const items = Array(12).fill(null);

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(${offset % (544 * 3)}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        {items.map((_, i) => (
          <div key={i} className="inline-flex items-center py-24">
            {/* His&Hers text replacing the logo */}
            <div className="shrink-0 w-[50vw] lg:w-[26vw] flex justify-center">
              <span className="text-black text-[8vw] lg:text-[5vw] font-normal font-arial whitespace-nowrap">
                His&Hers
              </span>
            </div>
            
            {/* Fixed font sizes */}
            <div className="flex flex-col text-black items-center text-center text-sm lg:text-base mx-[8vw] lg:mx-12">
              <h1 className="whitespace-nowrap leading-tight">CREATIVE</h1>
              <h1 className="whitespace-nowrap leading-tight">TECHNOLOGY</h1>
              <h1 className="whitespace-nowrap leading-tight">STUDIO</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;