import React from 'react';

interface Award {
  id: string;
  title: string;
  project: string;
  categories: string[];
  year: string;
}

const Awards: React.FC = () => {
  const awards: Award[] = [
    {
      id: '01',
      title: 'Webby Awards',
      project: 'Powerade Mind Zone',
      categories: ['AI, Immersive & Games'],
      year: '2025'
    },
    {
      id: '02',
      title: 'Clio Awards — Gold',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Interactive/Experiential'],
      year: '2025'
    },
    {
      id: '03',
      title: '3x Clio Awards — Shortlist',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['1x Entertainment', '1x Use of New Realities'],
      year: '2025'
    },
    {
      id: '04',
      title: 'Auggie Award',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Best Campaign'],
      year: '2025'
    },
    {
      id: '05',
      title: '3x ADC Festival — Silver',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['1x Craft AR/VR', '1x Digital Out of Home', '1x Point-of-Sale Media'],
      year: '2025'
    },
    {
      id: '06',
      title: '2x ADC Festival — Bronze',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['1x Gaming Experiences', '1x Craft for Spatial Experiences AR/VR'],
      year: '2025'
    },
    {
      id: '07',
      title: 'Clio Awards — Silver',
      project: 'Powerade Mind Zone',
      categories: ['Digital/Mobile'],
      year: '2024'
    },
    {
      id: '08',
      title: 'Cannes Lions — Bronze',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Outdoor'],
      year: '2024'
    },
     {
      id: '09',
      title: '4x Cannes Lions — Shortlist',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Outdoor'],
      year: '2024'
    },
     {
      id: '10',
      title: 'New York Festivals — Bronze',
      project: 'Oreo & Pacman Supermarcade',
      categories: ['Digital/Mobile: Best use'],
      year: '2024'
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-32 px-[1vw]">
      <div className="w-full mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-7xl lg:text-[7vw] -tracking-[0.2vw] text-[#1d1d1d] mb-16 md:mb-24">
          AN AWARD<br />WINNING STUDIO
        </h1>

        {/* Awards List */}
        <div className="space-y-0">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="border-t text-[#1d1d1d]  border-[#1d1d1d33] pt-6 pb-10 grid grid-cols-12 gap-4 hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Number */}
              <div className="col-span-12 md:col-span-1 text-sm text-[#1d1d1d]">
                {award.id}
              </div>

              {/* Award Title */}
              <div className="col-span-12 md:col-span-4 lg:col-span-5">
                <h2 className="text-[1.5vw] font-normal">
                  {award.title}
                </h2>
              </div>

              {/* Project */}
              <div className="col-span-12 md:col-span-3 lg:col-span-3">
                <div className="text-[0.9vw] text-[#1d1d1d4d] mb-1">Project</div>
                <div className="text-[0.9vw] ">{award.project}</div>
              </div>

              {/* Category */}
              <div className="col-span-12 md:col-span-3 lg:col-span-2 relative right-12">
                <div className="text-[0.9vw] text-[#1d1d1d4d]  mb-1">Category</div>
                <div className="text-[0.9vw]  space-y-0.5">
                  {award.categories.map((category, idx) => (
                    <div key={idx}>{category}</div>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div className="col-span-12 md:col-span-1 text-right">
                <div className="text-[0.9vw]  text-[#1d1d1d4d]  mb-1">Year</div>
                <div className="text-[0.9vw]">{award.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;