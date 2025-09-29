import { useEffect, useState } from 'react';
import Logo from '../assets/hero.svg'

const FormFunLogo = () => (
  <svg width="544" height="113" viewBox="0 0 544 113" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-20 w-auto">
    <text x="430" y="50" fontFamily="Arial, sans-serif" fontSize="8" fill="black">CREATIVE</text>
    <text x="420" y="62" fontFamily="Arial, sans-serif" fontSize="8" fill="black">TECHNOLOGY</text>
    <text x="430" y="74" fontFamily="Arial, sans-serif" fontSize="8" fill="black">STUDIO</text>
  </svg>
);

const ScrollSlider: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Move opposite to scroll direction
      // Scroll down (positive delta) = move left (negative offset)
      // Scroll up (negative delta) = move right (positive offset)
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
          <div key={i} className="inline-flex items-center px-12">
            <img src={Logo} alt='logo' />
            <FormFunLogo />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSlider;

