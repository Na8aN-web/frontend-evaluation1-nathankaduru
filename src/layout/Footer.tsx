import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.svg'

const AnimatedHisHers: React.FC = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimating(true);
                }
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    return (
        <div ref={componentRef} className="w-full overflow-hidden flex justify-center items-center pt-8">
            <div className="relative w-full">
                <svg
                    width="100%"
                    height={isMobile ? "150" : "350"} 
                    viewBox={isMobile ? "0 0 600 150" : "0 0 600 200"}
                    preserveAspectRatio="xMidYMid meet"
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
                        fontSize={isMobile ? "140" : "200"}
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
                        fontSize={isMobile ? "140" : "200"}
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
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-white px-[4vw] sm:px-[2vw] lg:px-[1vw]">
            <div className="mx-auto">
                <div className='flex justify-between my-24'>
                    <div>
                        <img
                            src={Logo}
                            alt="logo&Fun"
                            className="w-2/3 h-auto object-contain"
                        />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 relative right-0 lg:right-[160px] gap-12 lg:mb-16">
                        {/* Menu Column */}
                        <div>
                            <h3 className="text-[#9a9a9a] text-[2.4vw] lg:text-[1vw] mb-2">Menu</h3>
                            <ul className="space-y-1">
                                <li><a href="#studio" className="text-[#1d1d1d] text-[2.4vw] lg:text-[1vw] hover:text-gray-600 transition-colors">Studio</a></li>
                                <li><a href="#contact" className="text-[#1d1d1d] text-[2.4vw] lg:text-[1vw] hover:text-gray-600 transition-colors">Contact</a></li>
                                <li><a href="#work" className="text-[#1d1d1d] text-[2.4vw] lg:text-[1vw] hover:text-gray-600 transition-colors">Work</a></li>
                            </ul>
                        </div>

                        {/* Social Column */}
                        <div className='relative lg:right-20'>
                            <h3 className="text-[#9a9a9a] text-[2.4vw] lg:text-[1vw] mb-2">Social</h3>
                            <ul className="space-y-1">
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1d1d1d] text-[2.4vw] lg:text-[1vw] hover:text-gray-600 transition-colors">Instagram</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#1d1d1d] text-[2.4vw] lg:text-[1vw] hover:text-gray-600 transition-colors">Linkedin</a></li>
                                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-[#1d1d1d] text-[2.4vw] lg:text-[1vw] hover:text-gray-600 transition-colors">Behance</a></li>
                            </ul>
                        </div>

                        {/* Business Enquiries Column */}
                        <div className='relative lg:right-12'>
                            <h3 className="text-[#9a9a9a] text-[2.4vw] lg:text-[1vw] mb-2">Business enquiries</h3>
                            <a href="mailto:hi@formandfun.co" className="text-[#1d1d1d] text-[2.4vw] lg:text-[1vw] hover:text-gray-600 transition-colors block mb-6">
                                hi@formandfun.co
                            </a>

                            <h3 className="text-[#9a9a9a] text-[2.4vw] lg:text-[1vw] mb-2">Join our team</h3>
                            <a href="mailto:apply@formandfun.co" className="text-[#1d1d1d] text-[2.4vw] lg:text-[1vw] hover:text-gray-600 transition-colors block">
                                apply@formandfun.co
                            </a>
                        </div>
                    </div>
                </div>

                {/* Full width His&Hers animation */}
                <AnimatedHisHers />
            </div>
        </footer>
    );
};

export default Footer;