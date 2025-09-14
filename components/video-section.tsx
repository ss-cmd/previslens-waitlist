"use client"
import FeaturesSection from "./features-section"

interface VideoSectionProps {
  className?: string
}

export default function VideoSection({ className }: VideoSectionProps) {
  const videoId ="OEZVredw8Gc"
  //  "JhrSRv524tg" // YouTube video ID

return (
  <section id="video-section" className={`max-w-7xl mx-auto px-4 sm:px-6 mb-20 ${className || ""}`}>
    <div className="flex flex-col gap-12 items-center">
      
      {/* --- START OF PRECISION FIX --- */}
      {/* The video player and the disclaimer now share the same parent container (max-w-6xl). */}
      <div className="w-full max-w-6xl">
        
        {/* Video Player */}
        <div className="aspect-video rounded-xl bg-black/20 overflow-hidden border border-white/20 shadow-2xl shadow-black/40">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`}
            title="PrevisLens Demo Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Disclaimer Text - Now perfectly aligned with the video above */}
        <div className="px-2 pt-4">
          <p className="text-xs text-white/50 leading-relaxed text-center">
            The model featured in our demo is for illustrative purposes only. PrevisLens is not affiliated with, sponsored by, or endorsed by any car manufacturer. All trademarks are the property of their respective owners.
          </p>
        </div>

      </div>

      {/* --- Feature Points Section --- */}
      <div className="w-full max-w-6xl flex flex-col justify-center space-y-8 px-8 py-10 bg-black/20 rounded-xl backdrop-blur-md border border-white/10">
           <FeaturesSection />
      </div>
    </div>
  </section>
)
}