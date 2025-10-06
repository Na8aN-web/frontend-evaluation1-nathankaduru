import { useState, useEffect } from 'react';

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const completionTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1600);

      return () => clearTimeout(completionTimer);
    }
  }, [isAnimating]);

  return (
    <div 
      className={`bg-white flex flex-col items-center justify-center p-8 transition-all duration-700 ease-in-out ${
        animationComplete ? 'min-h-[40vh] lg:min-h-[60vh]' : 'min-h-screen'
      }`}
    >
      <div className="relative">
        <svg
          width="1115"
          height="189"
          viewBox="0 0 600 200"
          className="w-full max-w-[90vw]"
        >
          {/* Gray text - animates writing first */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="1"
            fontSize={isMobile ? "130" : "180"}
            fontWeight="400"
            fontFamily="Arial"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: isAnimating ? 0 : 1000,
              transition: 'stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1)'
            }}
          >
            His&Hers
          </text>

          {/* Black fill - animates slightly after the gray writing begins */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#000000"
            fontSize={isMobile ? "130" : "180"}
            fontWeight="400"
            fontFamily="Arial"
            style={{
              clipPath: isAnimating ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: 'clip-path 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.4s'
            }}
          >
            His&Hers
          </text>
        </svg>
      </div>
    </div>
  );
}