import { useEffect, useState } from 'react';
import Logo from '../assets/hero.svg'

const ScrollSlider: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      setOffset(prev => prev - scrollDelta * 0.5);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Create enough logos to ensure seamless loop
  const logos = Array(12).fill(null);

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(${offset % (544 * 3)}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        {logos.map((_, i) => (
          <div key={i} className="inline-flex items-center py-24">
            <img src={Logo} alt='logo' className=' shrink-0 w-[26vw]'/>
            
            <div className="flex flex-col text-black items-center text-center text-[0.6vw] mx-12">
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

export default ScrollSlider;