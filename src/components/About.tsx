import { useState, useEffect, useRef } from 'react';
import AboutVideos from './videos/AboutVideos';

export default function About() {
    const [visibleWords, setVisibleWords] = useState(0);
    const sectionRef = useRef(null);

    const text = "We are a global creative tech studio forging delightful experiences by blending design, technology, and storytelling. Driven to create value for people and brands through interaction";
    const words = text.split(' ');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const rect = entry.boundingClientRect;
                        const windowHeight = window.innerHeight;
                        const totalHeight = rect.height;

                        const scrollProgress = Math.max(0, Math.min(1,
                            (windowHeight - rect.top) / (windowHeight + totalHeight)
                        ));

                        const targetWords = Math.floor(scrollProgress * words.length);
                        setVisibleWords(targetWords);
                    } else {
                        const rect = entry.boundingClientRect;
                        if (rect.bottom < 0) {
                            setVisibleWords(words.length);
                        } else if (rect.top > window.innerHeight) {
                            setVisibleWords(0);
                        }
                    }
                });
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
                rootMargin: '-10% 0px -10% 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [words.length]);

    return (
        <>
            <div className=" bg-white">
                <section
                    ref={sectionRef}
                    className=" flex items-center justify-center px-[4vw] sm:px-[2vw] lg:px-[1vw] py-32"
                >
                    <div className="w-full mx-auto">

                        <div className="relative">
                            <h1 className="text-[7vw] lg:text-[4.4vw] flex items-start flex-wrap leading-[100%] -tracking-[0.1vw]">
                                <div className='inline-flex relative top-0 sm:top-3 items-start justify-start mr-16 sm:mr-32 lg:mr-72'><span className="text-[4vw] sm:text-[2.2vw] lg:text-[1vw] leading-[130%] text-[#1d1d1d] tracking-wide">The studio</span></div>
                                {words.map((word, index) => (
                                    <span
                                        key={index}
                                        className={`inline-block mr-4 transition-colors duration-300 ease-out ${index < visibleWords
                                            ? 'text-[#1d1d1d]'
                                            : 'text-[#dfdfdf]'
                                            }`}
                                        style={{
                                            transitionDelay: `${index * 20}ms`
                                        }}
                                    >
                                        {word}
                                    </span>
                                ))}

                                <button className="bg-[#1d1d1d] hidden lg:flex tracking-normal self-center justify-self-center text-white px-8 py-3 rounded-full text-sm  hover:bg-[#e5e5e5] hover:text-[#1d1d1d] cursor-pointer relative top-1 transition-colors duration-200">
                                    Learn more
                                </button>
                            </h1>

                        </div>
                        <button className="bg-[#1d1d1d] w-full sm:w-1/2 my-8 lg:hidden tracking-normal self-center justify-self-center text-white px-8 py-3 rounded-full text-[4vw] sm:text-[2vw]  hover:bg-[#e5e5e5] hover:text-[#1d1d1d] cursor-pointer relative top-1 transition-colors duration-200">
                            Learn more
                        </button>
                    </div>
                </section>
            </div>
            <AboutVideos />
        </>
    );
}