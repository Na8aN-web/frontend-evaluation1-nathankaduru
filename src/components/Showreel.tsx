
const Showreel = () => {
  return (
    <div className="w-full bg-white px-[1vw]">
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
          src="/hero-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Showreel;