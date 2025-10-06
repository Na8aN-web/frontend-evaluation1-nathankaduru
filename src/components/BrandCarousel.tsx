import React, { useState, useEffect } from 'react';

const BrandCarousel: React.FC = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const brandSets = [
        [
            {
                name: 'Spotify',
                bg: 'bg-[#1DB954]',
                hoverBg: 'bg-[#1DB954]',
                textColor: 'text-white',
                svg: '/spotify-logo.svg',
                whiteSvg: '/spotify-logo-white.svg'
            },
            {
                name: 'OREO',
                bg: 'bg-[#003087]',
                hoverBg: 'bg-[#003087]',
                textColor: 'text-white',
                svg: '/oreo-logo.svg',
                whiteSvg: '/oreo-logo-white.svg'
            },
            {
                name: 'Ogilvy',
                bg: 'bg-[#eb3f43]',
                hoverBg: 'bg-[#eb3f43]',
                textColor: 'text-white',
                svg: '/oglivy-logo.svg',
                whiteSvg: '/oglivy-logo-white.svg'
            },
            {
                name: 'SAATCHI & SAATCHI',
                bg: 'bg-black',
                hoverBg: 'bg-black',
                textColor: 'text-white',
                svg: '/saatchi-logo.svg',
                whiteSvg: '/saatchi-logo-white.svg'
            }
        ],
        [
            {
                name: 'Coca-Cola',
                bg: 'bg-[#FE001A]',
                hoverBg: 'bg-[#FE001A]',
                textColor: 'text-white',
                svg: '/coke-logo.svg',
                whiteSvg: '/coke-logo-white.svg'
            },
            {
                name: 'Powerade',
                bg: 'bg-[#10c7dd]',
                hoverBg: 'bg-[#10c7dd]',
                textColor: 'text-white',
                svg: '/powerade-logo.svg',
                whiteSvg: '/powerade-logo-white.svg'
            },
            {
                name: 'Google',
                bg: 'bg-[#3369E8]',
                hoverBg: 'bg-[#3369E8]',
                textColor: 'text-white',
                svg: '/google-logo.svg',
                whiteSvg: '/google-logo-white.svg'
            },
            {
                name: 'Doordash',
                bg: 'bg-[#FF3008]',
                hoverBg: 'bg-[#FF3008]',
                textColor: 'text-white',
                svg: '/doordash-logo.svg',
                whiteSvg: '/doordash-logo-white.svg'
            }
        ]
    ];

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                if (isMobile) {
                    setCurrentSet((prev) => (prev === brandSets.flat().length - 1 ? 0 : prev + 1));
                } else {
                    setCurrentSet((prev) => (prev === 0 ? 1 : 0));
                }
                setIsAnimating(false);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [isMobile]);

    const allBrands = brandSets.flat();

    const getSlidePosition = (setIndex: number) => {
    if (isMobile) {
        if (setIndex === currentSet) {
            return isAnimating ? 'slide-out' : 'active';
        } else {
            return isAnimating ? 'slide-in' : 'hidden';
        }
    } else {
        if (setIndex === currentSet) {
            return isAnimating ? 'slide-out' : 'active';
        } else {
            return isAnimating ? 'slide-in' : 'hidden';
        }
    }
};

    return (
        <div className="w-full bg-white flex flex-col mt-12 md:mt-32 px-[4vw] sm:px-[2vw] lg:px-[1vw]">
            <h1 className="text-[8vw] -tracking-[0.1vw] md:text-[5vw] lg:text-[3.4vw] leading-[110%] md:leading-[100%] text-left mb-8 lg:mb-16 text-[#1d1d1d]">
                Trusted by the world's leading brands
            </h1>

            <div className="relative w-full">
                {/* Mobile View - Single Brand Carousel */}
                {isMobile && (
                    <div className="relative rounded-2xl h-[224px] sm:h-[531px] overflow-hidden bg-gray-100 w-full">
                        {allBrands.map((brand, brandIndex) => (
                            <div
                                key={`mobile-${brandIndex}`}
                                className={`
                                    absolute inset-0 flex items-center justify-center
                                    transition-all duration-500 ease-in-out
                                    ${getSlidePosition(currentSet) === 'slide-out'  
                                        ? '-translate-y-full opacity-0' 
                                        : getSlidePosition(brandIndex) === 'active'
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-full opacity-0'
                                    }
                                    group cursor-pointer
                                `}
                                onMouseEnter={() => setHoveredIndex(brandIndex)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Background overlay that grows from center on enter, fades out on leave */}
                                <div 
                                    className={`
                                        absolute inset-0 ${brand.bg} 
                                        transition-all duration-500 ease-out
                                        transform scale-100
                                        ${hoveredIndex === brandIndex ? 'opacity-100' : 'opacity-0'}
                                        origin-center
                                    `}
                                />
                                
                                {/* Logo content - Centered */}
                                <div className="relative z-10 flex items-center justify-center w-full h-full">
                                    <img
                                        src={hoveredIndex === brandIndex ? brand.whiteSvg : brand.svg}
                                        alt={brand.name}
                                        className="w-full max-w-[70%] h-auto max-h-[60%] object-contain transition-all duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Desktop View - Original 4 Brand Grid */}
                {!isMobile && (
                    <div className="grid grid-cols-4 gap-6">
                        {[0, 1, 2, 3].map((containerIndex) => (
                            <div
                                key={`container-${containerIndex}`}
                                className="relative rounded-2xl h-[200px] overflow-hidden bg-gray-100"
                            >
                                {/* Current brands sliding out */}
                                {brandSets[currentSet].map((brand, brandIndex) => (
                                    brandIndex === containerIndex && (
                                        <div
                                            key={`current-${currentSet}-${brandIndex}`}
                                            className={`
                                                absolute inset-0 flex items-center justify-center
                                                transition-all duration-500 ease-in-out
                                                ${getSlidePosition(currentSet) === 'slide-out' 
                                                    ? '-translate-y-full opacity-0' 
                                                    : getSlidePosition(currentSet) === 'active'
                                                    ? 'translate-y-0 opacity-100'
                                                    : 'translate-y-full opacity-0'
                                                }
                                                group cursor-pointer
                                            `}
                                            onMouseEnter={() => setHoveredIndex(brandIndex)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            {/* Background overlay that grows from center on enter, fades out on leave */}
                                            <div 
                                                className={`
                                                    absolute inset-0 ${brand.bg} 
                                                    transition-all duration-500 ease-out
                                                    transform scale-100
                                                    ${hoveredIndex === brandIndex ? 'opacity-100' : 'opacity-0'}
                                                    origin-center
                                                `}
                                            />
                                            
                                            {/* Logo content - Centered */}
                                            <div className="relative z-10 flex items-center justify-center w-full h-full">
                                                <img
                                                    src={hoveredIndex === brandIndex ? brand.whiteSvg : brand.svg}
                                                    alt={brand.name}
                                                    className="w-full max-w-[70%] h-auto max-h-[60%] object-contain transition-all duration-300"
                                                />
                                            </div>
                                        </div>
                                    )
                                ))}

                                {/* Next brands sliding in */}
                                {brandSets[currentSet === 0 ? 1 : 0].map((brand, brandIndex) => (
                                    brandIndex === containerIndex && (
                                        <div
                                            key={`next-${currentSet === 0 ? 1 : 0}-${brandIndex}`}
                                            className={`
                                                absolute inset-0 flex items-center justify-center
                                                transition-all duration-500 ease-in-out
                                                ${getSlidePosition(currentSet === 0 ? 1 : 0) === 'slide-in' 
                                                    ? 'translate-y-0 opacity-100' 
                                                    : getSlidePosition(currentSet === 0 ? 1 : 0) === 'hidden'
                                                    ? 'translate-y-full opacity-0'
                                                    : '-translate-y-full opacity-0'
                                                }
                                                group cursor-pointer
                                            `}
                                            onMouseEnter={() => setHoveredIndex(brandIndex)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            {/* Background overlay that grows from center on enter, fades out on leave */}
                                            <div 
                                                className={`
                                                    absolute inset-0 ${brand.bg} 
                                                    transition-all duration-500 ease-out
                                                    transform scale-100
                                                    ${hoveredIndex === brandIndex ? 'opacity-100' : 'opacity-0'}
                                                    origin-center
                                                `}
                                            />
                                            
                                            {/* Logo content - Centered */}
                                            <div className="relative z-10 flex items-center justify-center w-full h-full">
                                                <img
                                                    src={hoveredIndex === brandIndex ? brand.whiteSvg : brand.svg}
                                                    alt={brand.name}
                                                    className="w-full max-w-[70%] h-auto object-contain transition-all duration-300"
                                                />
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrandCarousel;