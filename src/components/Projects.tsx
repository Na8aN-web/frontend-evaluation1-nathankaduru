import React, { useRef, useState, useEffect } from 'react';

interface CapabilityCardProps {
    title: string;
    videoSrc: string;
    bgColor: string;
    skills: string[];
    isMobile: boolean;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, videoSrc, bgColor, skills, isMobile }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current && !isMobile) { // Only play on hover for desktop
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current && !isMobile) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        if (isMobile && videoRef.current) {
            videoRef.current.play().catch(e => {
                console.log("Autoplay prevented:", e);
            });
        }
    }, [isMobile]);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex flex-col rounded-[8px] p-4 lg:p-0 cursor-pointer transition-transform duration-300 flex-shrink-0 ${isMobile ? bgColor : (isHovered ? bgColor : 'bg-white')}`}
            style={{
                width: isMobile ? '85%' : 'calc(33.333% - 1.333vw)',
                scrollSnapAlign: isMobile ? 'center' : 'none',
                marginRight: isMobile ? '4%' : '0'
            }}
        >
            <div className={`relative rounded-[8px] overflow-hidden aspect-square mb-6 cursor-pointer`}>
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${!isMobile && isHovered ? 'scale-90' : 'scale-100'}`}
                >
                    <video
                        ref={videoRef}
                        className="w-full object-contain rounded-[8px]"
                        loop
                        muted
                        playsInline
                        autoPlay={isMobile}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={`transition-transform duration-300 ${!isMobile && isHovered ? 'scale-90' : 'scale-100'}`}>
                <h2 className={`${isMobile ? 'text-[8vw] sm:text-[5vw]' : 'text-[3.4vw]'} -tracking-[0.1vw] mb-6 text-[#1d1d1d]`}>
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[#1d1d1d]">
                    {skills.map((skill, index) => (
                        <div key={index} className={`${isMobile ? 'text-[3.4vw] sm:text-[1.8vw]' : 'text-[1vw]'} leading-[130%]`}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const capabilities = [
        {
            title: 'Technology',
            videoSrc: 'https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642101/bhefcffg2eta2ry3k0f67vgol44t62chntda_hksyby.mp4',
            bgColor: 'bg-[#d5f2f6]',
            skills: [
                'Spatial Computing (AR, VR, XR)',
                'Web3 / Blockchain',
                'AI Tools & Experiences',
                'Game Development',
                'Web Development',
                'Rapid Prototyping',
                'WebGL Experiences',
            ],
        },
        {
            title: 'Design',
            videoSrc: 'https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642090/bheeicecyrhzyi3dd26lfivkab97k907q706_qzzyps.mp4',
            bgColor: 'bg-[#fbefff]',
            skills: [
                'Creative Direction',
                'Brand Identity',
                'Art Direction',
                'Design Systems',
                'User Experience Design',
                'Concept Design',
                'User Interface Design',
            ],
        },
        {
            title: 'Motion & CGI',
            videoSrc: 'https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642090/bheeiceccip4dtalzn188e4w87papbecrhou_an9son.mp4',
            bgColor: 'bg-[#e5f4e1]',
            skills: [
                '2D & 3D Animation',
                'Character Design',
                '2D & 3D Illustration',
                'Motion Identity',
                'Concept Art',
                '',
                'FOOH',
            ],
        },
    ];

    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);

            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = 0;
                setCurrentIndex(0);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const updateCurrentIndex = () => {
            if (!scrollContainerRef.current) return;

            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const containerWidth = scrollContainerRef.current.clientWidth;

            if (isMobile) {
                const cardWidth = containerWidth * 0.89;
                const index = Math.round(scrollLeft / cardWidth);
                setCurrentIndex(Math.min(Math.max(index, 0), capabilities.length - 1));
            } else {
                const cardWidth = containerWidth / 3;
                const index = Math.round(scrollLeft / cardWidth);
                setCurrentIndex(Math.min(Math.max(index, 0), capabilities.length - 1));
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', updateCurrentIndex);
            return () => scrollContainer.removeEventListener('scroll', updateCurrentIndex);
        }
    }, [isMobile, capabilities.length]);

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

        if (isMobile) {
            const cardWidth = containerWidth * 0.89;
            const targetScroll = index * cardWidth;

            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        } else {
            const cardWidth = containerWidth / 3;
            let targetScroll;

            if (index === 0) {
                targetScroll = 0;
            } else if (index === capabilities.length - 1) {
                targetScroll = index * cardWidth;
            } else {
                targetScroll = index * cardWidth;
            }

            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setStartX(e.touches[0].clientX);
        setScrollLeft(container.scrollLeft);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const x = e.touches[0].clientX;
        const walk = (startX - x) * 2;
        container.scrollLeft = scrollLeft + walk;
    };

    return (
        <div className="md:min-h-screen bg-white px-[4vw] sm:px-[2vw] lg:px-[1vw]">
            <h1 className="text-[3vw] lg:text-[1vw] mb-4 text-[#1d1d1d]">Expertise & Capabilities</h1>

            <div
                ref={scrollContainerRef}
                className={`flex overflow-x-auto hide-scrollbar ${isMobile ? '' : 'gap-[2vw]'
                    } cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
                style={{
                    scrollSnapType: isMobile ? 'x mandatory' : 'none',
                    scrollPadding: isMobile ? '0 7.5%' : '0',
                    
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {capabilities.map((capability, index) => (
                    <CapabilityCard
                        key={index}
                        {...capability}
                        isMobile={isMobile}
                    />
                ))}
            </div>

            {/* Dot indicators */}
            <div className="flex lg:hidden justify-center mt-8 space-x-4">
                {capabilities.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${currentIndex === index
                                ? 'bg-gray-800 scale-125'
                                : 'bg-gray-300 hover:bg-gray-500'
                            }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;