import React, { useState, useRef, useEffect } from 'react';

const Work: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(0.1);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const dragVelocityRef = useRef<number>(0);
  const lastDragTimeRef = useRef<number>(0);

  const marqueeWords = ["VISUAL", "FASHION", "IMMERSIVE", "BRAND", "DIGITAL", "EXPERIENTAL", "MOTION", "SPATIAL", "VR", "GEN-AI", "AR", "GAMING"];

  // Auto-scroll animation
  useEffect(() => {
    if (isDragging) return;

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }
      
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      setScrollOffset(prev => {
        const newOffset = (prev + (deltaTime * 0.01 * animationSpeed)) % 100;
        return newOffset;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, animationSpeed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    dragVelocityRef.current = 0;
    lastDragTimeRef.current = performance.now();
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentTime = performance.now();
    const deltaX = e.clientX - dragStartX;
    const deltaTime = currentTime - lastDragTimeRef.current;
    
    const velocity = deltaTime > 0 ? deltaX / deltaTime : 0;
    dragVelocityRef.current = velocity;
    
    const sensitivity = (Math.abs(velocity) * 0.02);
    
    setScrollOffset(prev => {
      let newOffset = prev - (deltaX * sensitivity);
      if (newOffset < 0) newOffset = 100 + newOffset;
      if (newOffset >= 100) newOffset = newOffset % 100;
      return newOffset;
    });
    
    setDragStartX(e.clientX);
    lastDragTimeRef.current = currentTime;
    
    const speedMultiplier = Math.min(10, Math.max(0.05, Math.abs(velocity) * 2));
    setAnimationSpeed(speedMultiplier);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    const momentum = Math.abs(dragVelocityRef.current) * 0.3;
    if (momentum > 0.2) {
      const momentumSpeed = Math.min(8, momentum);
      setAnimationSpeed(momentumSpeed);
      
      const slowDown = () => {
        setAnimationSpeed(prev => {
          const newSpeed = prev * 0.7;
          if (newSpeed <= 0.15) {
            setAnimationSpeed(0.1);
            return 0.1;
          }
          setTimeout(slowDown, 50);
          return newSpeed;
        });
      };
      setTimeout(slowDown, 100);
    } else {
      setAnimationSpeed(0.1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    dragVelocityRef.current = 0;
    lastDragTimeRef.current = performance.now();
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length === 0) return;
    
    const currentTime = performance.now();
    const deltaX = e.touches[0].clientX - dragStartX;
    const deltaTime = currentTime - lastDragTimeRef.current;
    
    const velocity = deltaTime > 0 ? deltaX / deltaTime : 0;
    dragVelocityRef.current = velocity;
    
    const sensitivity = 0.8 + (Math.abs(velocity) * 0.05);
    
    setScrollOffset(prev => {
      let newOffset = prev - (deltaX * sensitivity);
      if (newOffset < 0) newOffset = 100 + newOffset;
      if (newOffset >= 100) newOffset = newOffset % 100;
      return newOffset;
    });
    
    setDragStartX(e.touches[0].clientX);
    lastDragTimeRef.current = currentTime;
    
    const speedMultiplier = Math.min(10, Math.max(0.05, Math.abs(velocity) * 2));
    setAnimationSpeed(speedMultiplier);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  useEffect(() => {
    const preventSelection = (e: Event) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener('selectstart', preventSelection);
    return () => document.removeEventListener('selectstart', preventSelection);
  }, [isDragging]);

  // Create the marquee content with proper spacing
  const marqueeContent = Array(6).fill(null).map((_, repeatIndex) => (
    <span key={repeatIndex}>
      {marqueeWords.map((word, wordIndex) => (
        <span key={`${repeatIndex}-${wordIndex}`} className="mr-[4vw]">
          {word}
        </span>
      ))}
    </span>
  ));

  return (
    <div className="w-full bg-white flex flex-col py-8 px-[1vw]">
      {/* Header */}
      <div className="flex relative top-16 justify-between items-center">
        <div className="text-[7vw] text-[#1d1d1d] tracking-tight">
          WORK
        </div>
        <div className="flex flex-col items-end align-bottom text-right ">
          <div className='text-[#1d1d1d]  text-[1vw]'>Selected Work</div>
          <div className='text-[#9a9a9a] text-[1vw]'>(22-25)</div>
        </div>
      </div>

      <div className="flex-1"></div>

      {/* Draggable Marquee */}
      <div 
        ref={marqueeRef}
        className="overflow-hidden text-[#ccc] cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
      >
        <div 
          className="whitespace-nowrap text-[7vw] -tracking-[0.2vw]"
          style={{
            transform: `translateX(-${scrollOffset}%)`,
            width: '200%',
            willChange: 'transform',
          }}
        >
          {marqueeContent}
        </div>
      </div>
    </div>
  );
};

export default Work;