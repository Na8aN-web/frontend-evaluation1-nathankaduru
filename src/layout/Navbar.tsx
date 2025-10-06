import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.svg'

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WorkPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VideoGridItem {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  videoSrc: string;
  theme: string;
}

function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#0000004d] transition-opacity duration-300 z-[150] ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Popup */}
      <div
        className={`fixed top-4 right-4 bg-white z-[200] transition-all duration-500 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'
          } w-[95%] md:w-[520px] h-screen rounded-[16px] shadow-2xl`}
      >
        <div className="p-5 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-4xl font-medium text-[#1d1d1d]">Contact</h2>
            <button
              onClick={onClose}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Close"
            >
              <div className="relative w-6 h-6">
                <div
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-[#1d1d1d] transition-all duration-300 ${isHovered
                    ? 'rotate-180 opacity-0'
                    : '-translate-x-1/2 -translate-y-1/2 rotate-0 opacity-100'
                    }`}
                />
                <div
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-[#1d1d1d] transition-all duration-300 ${isHovered
                    ? 'rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-100'
                    : 'rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-0'
                    }`}
                />
                <div
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-[#1d1d1d] transition-all duration-300 ${isHovered
                    ? '-rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-100'
                    : '-rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-0'
                    }`}
                />
              </div>
            </button>
          </div>

          {/* Contact Form Fields */}
          <div className="flex-1 mt-24 flex flex-col">
            <div className="mb-8">
              <label htmlFor="name" className="block text-[#1d1d1d] text-[1.1vw] mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="NAME"
                className="w-full px-[1.4vw] py-[1vw] text-[0.8vw] bg-[#f5f5f5] border-none rounded-lg focus:outline-none text-[#1d1d1d]"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-[#1d1d1d] text-[1.1vw] mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-MAIL"
                className="w-full px-[1.4vw] py-[1vw] text-[0.8vw] text-[#1d1d1d] bg-[#f5f5f5] border-none rounded-lg focus:outline-none"
              />
            </div>

            <div className="mb-8 flex-1 flex flex-col">
              <label htmlFor="message" className="block text-[#1d1d1d] text-[1.1vw] mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="MESSAGE"
                rows={6}
                className="w-full px-[1.4vw] py-[1vw] text-[0.8vw] bg-[#f5f5f5] border-none rounded-lg focus:outline-none focus:ring-gray-300 text-[#1d1d1d] resize-none flex-1"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full relative bottom-8 bg-[#1d1d1d] text-[0.8vw] text-white py-4 rounded-lg font-medium hover:bg-black transition-colors"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function WorkPopup({ isOpen, onClose }: WorkPopupProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const gridItems: VideoGridItem[] = [
    {
      id: 'oreo',
      title: 'Oreo x Pacman',
      subtitle: 'AR EXPERIENCE',
      thumbnail: '/thumbnail1.jpg',
      videoSrc: 'https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642096/bheeicdi21w0hkxyqiby6vxovghp64qh2wan_qwmt7l.mp4',
      theme: 'blue'
    },
    {
      id: 'milkshake',
      title: 'Doordash Summer of Dashpass',
      subtitle: 'CAMPAIGN',
      thumbnail: '/thumbnail2.jpg',
      videoSrc: 'https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642676/YThAIwoXKB_576p_1744824072_ccmg6f.mp4',
      theme: 'pink'
    },
    {
      id: 'coin',
      title: 'Widllet',
      subtitle: 'BRAND IDENTITY, APP',
      thumbnail: '/thumbnail3.jpg',
      videoSrc: 'https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642080/bheeicea8cwvkf21vcnbg8jhx3wo0wyb42im_q9yvuz.mp4',
      theme: 'gold'
    },
    {
      id: 'vr',
      title: 'Powerade',
      subtitle: 'VR EXPERIENCE',
      thumbnail: '/thumbnail4.jpg',
      videoSrc: 'https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642089/bheeicea3wowr2ifyqckn5737cnu42mewpr1_a8wqzo.mp4',
      theme: 'dark'
    }
  ];

  useEffect(() => {
    if (isOpen) {
      const playVideos = async () => {
        for (const item of gridItems) {
          const video = videoRefs.current[item.id];
          if (video) {
            try {
              video.currentTime = 0;
              await video.play();
            } catch (error) {
              console.log('Auto-play failed for:', item.id);
            }
          }
        }
      };

      setTimeout(playVideos, 100);
    } else {
      Object.values(videoRefs.current).forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#0000004d] transition-opacity duration-300 z-[150] ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Popup */}
      <div
        className={`fixed top-4 right-4 bg-white z-[200] transition-all duration-500 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'
          } w-[95%] md:w-[520px] h-screen rounded-[16px] shadow-2xl overflow-hidden`}
      >
        <div className="p-5 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-4xl mb-24 font-medium text-[#1d1d1d]">Work</h2>
            <button
              onClick={onClose}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Close"
            >
              <div className="relative w-6 h-6">
                <div
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-[#1d1d1d] transition-all duration-300 ${isHovered
                    ? 'rotate-180 opacity-0'
                    : '-translate-x-1/2 -translate-y-1/2 rotate-0 opacity-100'
                    }`}
                />
                <div
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-[#1d1d1d] transition-all duration-300 ${isHovered
                    ? 'rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-100'
                    : 'rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-0'
                    }`}
                />
                <div
                  className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-[#1d1d1d] transition-all duration-300 ${isHovered
                    ? '-rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-100'
                    : '-rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-0'
                    }`}
                />
              </div>
            </button>
          </div>

          {/* Video Grid */}
          <div className="flex-1 overflow-y-auto scrollbar-hide gap-8 space-y-6">
            {gridItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-2xl cursor-pointer group hover:bg-gray-50 transition-colors"
              >
                {/* Video on the left */}
                <div className="flex-shrink-0">
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                    }}
                    src={item.videoSrc}
                    className="w-[170px] h-[110px] md:w-[250px] md:h-[158px] object-cover rounded-lg"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                </div>

                {/* Text content on the right */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1d1d1d] text-[4.2vw] md:text-[1.2vw] text-wrap font-medium mb-1 truncate">
                    {item.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-[2.6vw] md:text-[0.8vw] mt-2 tracking-wider text-wrap uppercase truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isContactOpen || isWorkOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactOpen, isWorkOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full h-[46px] bg-white z-[100] px-[4vw] sm:px-[2vw] lg:px-[1vw]">
        <div className="grid grid-cols-4 gap-x-[1vw] h-full justify-center auto-cols-fr">
          <div className="flex flex-col justify-center items-start">
            <div className="w-6 h-6 rounded-sm flex items-center justify-center">
              <img src={Logo} alt="logo" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-start overflow-hidden relative h-full">
            <div className={`absolute transition-all duration-500 ease-in-out ${isScrolled
                ? 'lg:-translate-y-full lg:opacity-0'
                : 'translate-y-0 opacity-100'
              }`}>
              <span className="text-[#1d1d1d] font-medium text-[1.6vw] lg:text-[1vw] tracking-normal md:block hidden">
                Creative Technology Studio
              </span>
            </div>

            <div className={`absolute transition-all duration-500 ease-in-out ${isScrolled
                ? 'lg:translate-y-0 lg:opacity-100'
                : 'translate-y-full opacity-0'
              }`}>
              <span className="text-[#1d1d1d] font-medium text-[1.6vw] lg:text-[1vw] tracking-normal lg:block hidden">
                His&Hers
              </span>
            </div>
          </div>

          <div className="lg:flex flex-col justify-center items-start overflow-hidden relative h-full lg:visible invisible">
            <div className={`absolute transition-all duration-500 ease-in-out ${isScrolled
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
              }`}>
              <span className="text-[#1d1d1d] font-medium text-[1vw] tracking-normal">
                Creative Technology Studio
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end">
            <div className="flex space-x-4">
              <a href="#studio" className="text-[#1d1d1d] text-[4vw] md:text-[1.6vw] lg:text-[1vw] hover:opacity-70 transition-opacity">
                Studio
              </a>
              <a href="#" onClick={() => setIsContactOpen(true)} className="text-[#1d1d1d] text-[4vw] md:text-[1.6vw] lg:text-[1vw] hover:opacity-70 transition-opacity">
                Contact
              </a>
              <a href="#" onClick={() => setIsWorkOpen(true)} className="text-[#1d1d1d] text-[4vw] md:text-[1.6vw] lg:text-[1vw] hover:opacity-70 transition-opacity">
                Work
              </a>
            </div>
          </div>
        </div>
      </nav>

      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WorkPopup isOpen={isWorkOpen} onClose={() => setIsWorkOpen(false)} />
    </>
  );
}