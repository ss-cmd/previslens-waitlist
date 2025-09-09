// interface VideoSectionProps {
//     id: string;
//     locale: any;
//     langName: string;
//     videoSrc: string;
//     className?: string;
//   }
//   // https://youtube.com/shorts/JhrSRv524tg?si=emtRJrRUuhp0c81c
  
//   {/* <iframe width="338" height="601" src="https://www.youtube.com/embed/JhrSRv524tg" title="ForYourReference demo version" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }
  
//   export function VideoSection({ id, locale, langName, videoSrc, className }: VideoSectionProps) {
  
//     const videoId = "JhrSRv524tg"; // 这是你的视频 ID
//     // const videoId = "KO2Zh5ngK5c"; // 这是你的视频 ID
  
//     return (
//       <div className={`w-full lg:w-3/4 ${className || ''}`}>
//         <div className="aspect-[9/16] rounded-xl bg-muted overflow-hidden">
//           <iframe
//             className="w-full h-full"
//             src={`https://www.youtube.com/embed/${videoId}`}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     );
//   }

"use client"

interface VideoSectionProps {
  className?: string
}

export default function VideoSection({ className }: VideoSectionProps) {
  const videoId = "JhrSRv524tg" // YouTube video ID

  return (
    <section id="video-section" className={`max-w-5xl mx-auto px-2 sm:px-4 mb-20 ${className || ""}`}>
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full max-w-4xl">
          <div className="aspect-video rounded-xl bg-black/20 overflow-hidden border border-white/30 hover:border-white/50 transition-colors backdrop-blur-sm">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="ForYourReference demo version"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full max-w-3xl flex flex-col justify-center space-y-6 px-6 py-8 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Experience the movement</h3>
          <p className="text-base md:text-lg text-white/95 leading-relaxed text-center">
            See how our technology transforms static images into dynamic, interactive experiences. With just a few taps,
            bring your favorite manga panels, screenshots, and photos to life.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">May 2025</span>
            </div>
            <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">01:24</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
