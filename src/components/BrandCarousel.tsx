import React, { useState, useEffect } from 'react';

const BrandCarousel: React.FC = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev === 0 ? 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full  bg-white flex flex-col mt-32 px-[1vw]">
            <h1 className="text-[3.4vw] text-left mb-16 text-[#1d1d1d]">
                Trusted by the world's leading brands
            </h1>

            <div className="relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {brandSets[currentSet].map((brand, index) => (
                        <div
                            key={`container-${currentSet}-${index}`}
                            className={`
                rounded-2xl h-56 flex items-center justify-center relative overflow-hidden
                transition-all duration-500 ease-in-out
                ${hoveredIndex === index ? brand.bg : 'bg-gray-100'}
                group cursor-pointer transform
              `}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >

                            <div className="mb-4 flex items-center justify-center mx-auto">
                                <img
                                    src={hoveredIndex === index ? brand.whiteSvg : brand.svg}
                                    alt={brand.name}
                                    className="w-full max-w-[70%] h-full object-contain transition-transform duration-500"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandCarousel;