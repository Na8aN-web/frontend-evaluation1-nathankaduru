
const Showreel = () => {
  return (
    <div className="w-full bg-white px-[4vw] sm:px-[2vw] lg:px-[1vw]">
      <video
        className="w-full h-auto rounded-md"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dxy9wpoyc/video/upload/v1759689886/hero-video_ykvezb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Showreel;