import React, { useRef, useState } from 'react';

interface CapabilityCardProps {
    title: string;
    videoSrc: string;
    bgColor: string;
    skills: string[];
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, videoSrc, bgColor, skills }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex flex-col rounded-[8px] cursor-pointer transition-transform duration-300 ${isHovered ? bgColor : 'bg-white'}`}>
            <div
                className={`relative  rounded-[8px] overflow-hidden aspect-square mb-6 cursor-pointer`}

            >
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-90' : 'scale-100'
                        }`}
                >
                    <video
                        ref={videoRef}
                        className="w-full object-contain rounded-[8px]"
                        loop
                        muted
                        playsInline
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={`transition-transform duration-300 ${isHovered ? 'scale-90' : 'scale-100'}`}>
                <h2 className="text-[3.4vw] -tracking-[0.1vw] mb-6 text-[#1d1d1d]">{title}</h2>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[#1d1d1d]">
                    {skills.map((skill, index) => (
                        <div key={index} className="text-[1vw] leading-[130%]">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const capabilities = [
        {
            title: 'Technology',
            videoSrc: '/portfolio1.mp4',
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
            videoSrc: '/portfolio2.mp4',
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
            videoSrc: '/portfolio3.mp4',
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

    return (
        <div className="min-h-screen bg-white px-[1vw]">
            <h1 className="text-[1vw] mb-4 text-[#1d1d1d] font-normal">Expertise & Capabilities</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capabilities.map((capability, index) => (
                    <CapabilityCard key={index} {...capability} />
                ))}
            </div>
        </div>
    );
};

export default Projects;