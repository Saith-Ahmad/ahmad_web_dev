'use client';

const VideoPlayer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-2">
      {/* Aspect ratio container */}
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/adzAin8rgkM?rel=0&autoplay=0&controls=1&modestbranding=1&loop=1"
          allow="autoplay"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
