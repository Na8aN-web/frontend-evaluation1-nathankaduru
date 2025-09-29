import React, { useState, useRef, useCallback } from 'react';
import { Plus } from 'lucide-react';

interface VideoGridItem {
    id: string;
    title: string;
    subtitle?: string;
    thumbnail: string;
    videoSrc: string;
    theme: 'blue' | 'pink' | 'gold' | 'dark';
}

const WorkVideos: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

    // Sample data - replace videoSrc with your actual video file paths
    const gridItems: VideoGridItem[] = [
        {
            id: 'oreo',
            title: 'Oreo x Pacman',
            subtitle: 'AR Experience',
            thumbnail: '/thumbnail1.jpg',
            videoSrc: '/work1.mp4',
            theme: 'blue'
        },
        {
            id: 'milkshake',
            title: 'Door dash of dashpass',
            subtitle: 'Campaign',
            thumbnail: '/thumbnail2.jpg',
            videoSrc: '/work2.mp4',
            theme: 'pink'
        },
        {
            id: 'coin',
            title: 'Widllet',
            subtitle: 'Premium Collection',
            thumbnail: '/thumbnail3.jpg',
            videoSrc: '/work3.mp4',
            theme: 'gold'
        },
        {
            id: 'vr',
            title: 'Powerade Mindzone',
            subtitle: 'VR Experience',
            thumbnail: '/thumbnail4.jpg',
            videoSrc: '/work4.mp4',
            theme: 'dark'
        }
    ];

    // Fixed ref callback - returns void instead of the element
    const setVideoRef = useCallback((itemId: string, el: HTMLVideoElement | null) => {
        videoRefs.current[itemId] = el;
    }, []);

    const handleMouseEnter = (itemId: string) => {
        setHoveredItem(itemId);
        const video = videoRefs.current[itemId];
        if (video) {
            video.play();
        }
    };

    const handleMouseLeave = (itemId: string) => {
        setHoveredItem(null);
        const video = videoRefs.current[itemId];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <div className="w-full mx-auto px-[1vw]">
            <div className="flex flex-col gap-4">
                {/* First row - first item 75%, second item 25% */}
                <div className="flex gap-4">
                    {/* First item - 75% width */}
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group flex-[2]"
                        onMouseEnter={() => handleMouseEnter(gridItems[0].id)}
                        onMouseLeave={() => handleMouseLeave(gridItems[0].id)}
                    >
                        {/* Static thumbnail */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out z-10 flex items-center justify-center
                         ${hoveredItem === gridItems[0].id ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <img
                                src={gridItems[0].thumbnail}
                                alt={gridItems[0].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Video element */}
                        <video
                            ref={(el) => setVideoRef(gridItems[0].id, el)}
                            src={gridItems[0].videoSrc}
                            className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out
                         ${hoveredItem === gridItems[0].id ? 'opacity-100' : 'opacity-0'}`}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />

                        {/* Navigation overlay - white text for first item */}
                        <div
                            className={`absolute top-0 left-0 right-0 z-20 transition-opacity duration-300 ease-in-out p-4
                                 ${hoveredItem === gridItems[0].id ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex justify-between items-center text-white">
                                <div className="flex flex-col">
                                    <h4 className="w-12 text-[1vw]">{gridItems[0].title}</h4>
                                </div>
                                {gridItems[0].subtitle && (
                                    <p className="text-[1vw] relative right-48 opacity-80 ">{gridItems[0].subtitle}</p>
                                )}
                                <Plus size={20} className="text-white" />
                            </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 transition-all duration-300 ease-in-out pointer-events-none
                           ${hoveredItem === gridItems[0].id ?
                                ' ring-4 ring-cyan-400/50' : ''}`}
                        />
                    </div>

                    {/* Second item - 25% width */}
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group  flex-[1]"
                        onMouseEnter={() => handleMouseEnter(gridItems[1].id)}
                        onMouseLeave={() => handleMouseLeave(gridItems[1].id)}
                    >
                        {/* Static thumbnail */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out z-10 flex items-center justify-center
                         ${hoveredItem === gridItems[1].id ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <img
                                src={gridItems[1].thumbnail}
                                alt={gridItems[1].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Video element */}
                        <video
                            ref={(el) => setVideoRef(gridItems[1].id, el)}
                            src={gridItems[1].videoSrc}
                            className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out
                         ${hoveredItem === gridItems[1].id ? 'opacity-100' : 'opacity-0'}`}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />

                        {/* Navigation overlay - black text for second item */}
                        <div
                            className={`absolute top-0 left-0 right-0 z-20 transition-opacity duration-300 ease-in-out p-4
                                 ${hoveredItem === gridItems[1].id ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex justify-between items-center text-black">
                                <div className="flex flex-col">
                                    <h4 className="w-24 text-[1vw]">{gridItems[1].title}</h4>
                                </div>
                                {gridItems[1].subtitle && (
                                    <p className="text-[1vw] relative right-12 opacity-80">{gridItems[1].subtitle}</p>
                                )}
                                <Plus size={20} className="text-black" />
                            </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 transition-all duration-300 ease-in-out pointer-events-none
                           ${hoveredItem === gridItems[1].id ?
                                ' ring-4 ring-cyan-400/50' : ''}`}
                        />
                    </div>
                </div>

                {/* Second row - first item 25%, second item 75% */}
                <div className="flex gap-4 ">
                    {/* First item - 25% width */}
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group flex-[1]"
                        onMouseEnter={() => handleMouseEnter(gridItems[2].id)}
                        onMouseLeave={() => handleMouseLeave(gridItems[2].id)}
                    >
                        {/* Static thumbnail */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out z-10 flex items-center justify-center
                         ${hoveredItem === gridItems[2].id ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <img
                                src={gridItems[2].thumbnail}
                                alt={gridItems[2].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Video element */}
                        <video
                            ref={(el) => setVideoRef(gridItems[2].id, el)}
                            src={gridItems[2].videoSrc}
                            className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out
                         ${hoveredItem === gridItems[2].id ? 'opacity-100' : 'opacity-0'}`}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />

                        {/* Navigation overlay - black text for third item */}
                        <div
                            className={`absolute top-0 left-0 right-0 z-20 transition-opacity duration-300 ease-in-out p-4
                                 ${hoveredItem === gridItems[2].id ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex justify-between items-center text-black">
                                <div className="flex flex-col">
                                    <h4 className=" text-[1vw]">{gridItems[2].title}</h4>
                                </div>
                                <Plus size={20} className="text-black" />
                            </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 transition-all duration-300 ease-in-out pointer-events-none
                           ${hoveredItem === gridItems[2].id ?
                                ' ring-4 ring-cyan-400/50' : ''}`}
                        />
                    </div>

                    {/* Second item - 75% width */}
                    <div
                        className="relative overflow-hidden rounded-xl cursor-pointer group flex-[2]"
                        onMouseEnter={() => handleMouseEnter(gridItems[3].id)}
                        onMouseLeave={() => handleMouseLeave(gridItems[3].id)}
                    >
                        {/* Static thumbnail */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out z-10 flex items-center justify-center
                         ${hoveredItem === gridItems[3].id ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <img
                                src={gridItems[3].thumbnail}
                                alt={gridItems[3].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Video element */}
                        <video
                            ref={(el) => setVideoRef(gridItems[3].id, el)}
                            src={gridItems[3].videoSrc}
                            className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out
                         ${hoveredItem === gridItems[3].id ? 'opacity-100' : 'opacity-0'}`}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />

                        {/* Navigation overlay - white text for fourth item */}
                        <div
                            className={`absolute top-0 left-0 right-0 z-20 transition-opacity duration-300 ease-in-out p-4
                                 ${hoveredItem === gridItems[3].id ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex justify-between items-center text-white">
                                <div className="flex flex-col">
                                    <h4 className="text-[1vw]">{gridItems[3].title}</h4>
                                </div>
                                {gridItems[3].subtitle && (
                                    <p className="text-[1vw] relative right-48 opacity-80">{gridItems[3].subtitle}</p>
                                )}
                                <Plus size={20} className="text-white" />
                            </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 transition-all duration-300 ease-in-out pointer-events-none
                           ${hoveredItem === gridItems[3].id ?
                                ' ring-4 ring-cyan-400/50' : ''}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkVideos;