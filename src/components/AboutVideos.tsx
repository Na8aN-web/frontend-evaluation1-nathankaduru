import React, { useState, useRef, useEffect } from 'react';

interface VideoCarouselProps {
  videos?: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ 
  videos = [
    '/about1.mp4',
    '/about2.mp4', 
    '/about3.mp4',
    '/about4.mp4',
    '/about5.mp4',
    '/about6.mp4'
  ]
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Update current index based on scroll position
  useEffect(() => {
    const updateCurrentIndex = () => {
      if (!scrollContainerRef.current) return;
      
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.clientWidth;
      // Adjust video width calculation for 3.5 videos in view
      const videoWidth = isMobile ? containerWidth : containerWidth * 0.2857; // 1 ÷ 3.5 ≈ 0.2857
      const index = Math.round(scrollLeft / videoWidth);
      setCurrentIndex(Math.min(Math.max(index, 0), videos.length - 1));
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateCurrentIndex);
      return () => scrollContainer.removeEventListener('scroll', updateCurrentIndex);
    }
  }, [isMobile, videos.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    
    setIsDragging(true);
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isMobile) return;
    
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const containerWidth = scrollContainerRef.current.clientWidth;
    const videoWidth = isMobile ? containerWidth : containerWidth * 0.2857;
    const targetScroll = index * videoWidth;
    
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setStartX(e.touches[0].clientX);
    setScrollLeft(container.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const x = e.touches[0].clientX;
    const walk = (startX - x) * 2;
    container.scrollLeft = scrollLeft + walk;
  };

  return (
    <div className="w-full pl-[1vw] hide-scrollbar bg-white">
      
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
      >
        
        <div
          ref={scrollContainerRef}
          className={`flex overflow-x-auto hide-scrollbar cursor-grab ${
            isDragging ? 'cursor-grabbing' : ''
          }`}
          style={{ 
            scrollSnapType: isMobile ? 'x mandatory' : 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {videos.map((videoSrc, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${
                isMobile 
                  ? 'w-full aspect-[3/3.5]' 
                  : index === videos.length - 1 
                    ? 'w-[calc(27.93%-0.7143vw)]' // 28.57% width for 3.5 videos (100% ÷ 3.5 ≈ 28.57%)
                    : 'w-[calc(27.93%-0.7143vw)] mr-[1vw]' // Reduced margin to fit more videos
              }`}
              style={isMobile ? { scrollSnapAlign: 'start' } : {}}
            >
              <video
                className={`w-full h-full object-cover rounded-[8px] ${
                  isMobile ? '' : 'aspect-[3/3.5]'
                }`}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="auto"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dot indicators for mobile */}
      {isMobile && (
        <div className="flex justify-center mt-4 space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-gray-800 scale-125'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;