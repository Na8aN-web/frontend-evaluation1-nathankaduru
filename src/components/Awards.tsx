import React, { useState } from 'react';

interface Award {
  id: string;
  title: string;
  project: string;
  categories: string[];
  year: string;
}

const Awards: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const awards: Award[] = [
    {
      id: '01',
      title: 'Awwwards',
      project: 'Form&Fun Portfolio',
      categories: ['1x Site of the Day', '1x Portfolio Honors', '1x Developer Award', '1x Honorable Mention'],
      year: '2025'
    },
    {
      id: '02',
      title: 'Webby Awards',
      project: 'Powerade Mind Zone',
      categories: ['AI, Immersive & Games'],
      year: '2025'
    },
    {
      id: '03',
      title: 'Clio Awards — Gold',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Interactive/Experiental'],
      year: '2025'
    },
    {
      id: '04',
      title: '3x Clio Awards — Shortlist',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['1x Entertainment', '1x Use of New Realities'],
      year: '2025'
    },
    {
      id: '05',
      title: 'Auggie Award',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Best Campaign'],
      year: '2025'
    },
    {
      id: '06',
      title: '3x ADC Festival — Silver',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['1x Craft AR/VR', '1x Digital Out of Home', '1x Point-of-Sale Media'],
      year: '2025'
    },
    {
      id: '07',
      title: '2x ADC Festival — Bronze',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['1x Gaming Experiences', '1x Craft for Spatial Experiences AR/VR'],
      year: '2025'
    },
    {
      id: '08',
      title: 'Clio Awards — Silver',
      project: 'Powerade Mind Zone',
      categories: ['Digital/Mobile'],
      year: '2024'
    },
    {
      id: '09',
      title: 'Cannes Lions — Bronze',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Outdoor'],
      year: '2024'
    },
    {
      id: '10',
      title: '4x Cannes Lions — Shortlist',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Outdoor'],
      year: '2024'
    },
    {
      id: '11',
      title: 'New York Festivals — Bronze',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Digital/Mobile: Best use'],
      year: '2024'
    }
  ];

  return (
    <div className="md:min-h-screen bg-white mt-32 px-[4vw] sm:px-[2vw] lg:px-[1vw]">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-[14vw] leading-[0.9] sm:text-[7vw] -tracking-[0.2vw] text-[#1d1d1d] mb-16 md:mb-24">
          AN AWARD<br />WINNING STUDIO
        </h1>

        {/* Desktop/Tablet View - Table Layout */}
        <div className="hidden sm:block space-y-0">
          {awards.map((award) => (
            <div
              key={award.id}
              className="border-t text-[#1d1d1d] border-[#1d1d1d33] pt-6 pb-10 grid grid-cols-12 gap-4 hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Number */}
              <div className="col-span-1 text-sm text-[#1d1d1d]">
                {award.id}
              </div>

              {/* Award Title */}
              <div className="col-span-5">
                <h2 className="text-[2.6vw] md:text-[1.5vw] font-normal">
                  {award.title}
                </h2>
              </div>

              {/* Project */}
              <div className="col-span-3">
                <div className="text-[1.4vw] md:text-[0.9vw] text-[#1d1d1d4d] mb-1">Project</div>
                <div className="text-[1.4vw] md:text-[0.9vw]">{award.project}</div>
              </div>

              {/* Category */}
              <div className="col-span-2 relative md:right-12">
                <div className="text-[1.4vw] md:text-[0.9vw] text-[#1d1d1d4d] mb-1">Category</div>
                <div className="text-[1.4vw] md:text-[0.9vw] space-y-0.5">
                  {award.categories.map((category, idx) => (
                    <div key={idx}>{category}</div>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div className="col-span-1 text-right">
                <div className="text-[1.4vw] md:text-[0.9vw] text-[#1d1d1d4d] mb-1">Year</div>
                <div className="text-[1.4vw] md:text-[0.9vw]">{award.year}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="sm:hidden border-t border-[#1d1d1d33]">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="min-w-full py-8"
                >
                  {/* Award Number and Title */}
                  <div className="mb-8">
                    <div className="text-sm text-[#1d1d1d] mb-3">{award.id}</div>
                    <h2 className="text-[6vw] font-normal text-[#1d1d1d] leading-tight">
                      {award.title}
                    </h2>
                  </div>

                  {/* Project */}
                  <div className="mb-6">
                    <div className="text-xs text-[#1d1d1d4d] mb-2">Project</div>
                    <div className="text-sm text-[#1d1d1d]">{award.project}</div>
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <div className="text-xs text-[#1d1d1d4d] mb-2">Category</div>
                    <div className="text-sm text-[#1d1d1d] space-y-1">
                      {award.categories.map((category, idx) => (
                        <div key={idx}>{category}</div>
                      ))}
                    </div>
                  </div>

                  {/* Year */}
                  <div>
                    <div className="text-xs text-[#1d1d1d4d] mb-2">Year</div>
                    <div className="text-sm text-[#1d1d1d]">{award.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8 pb-8">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-[#1d1d1d]' : 'bg-[#1d1d1d33]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;