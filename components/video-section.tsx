"use client"

interface VideoSectionProps {
  className?: string
}

const showcaseVideos = [
  {
    src: "/showcase/previslens-agent-01.mp4",
    className: "aspect-video min-w-[280px] sm:min-w-[360px] lg:min-w-0",
  },
  {
    src: "/showcase/previslens-agent-02.mp4",
    className: "aspect-video min-w-[280px] sm:min-w-[360px] lg:min-w-0",
  },
  {
    src: "/showcase/previslens-agent-03.mp4",
    className: "aspect-[9/16] min-w-[170px] sm:min-w-[210px] lg:min-w-0",
  },
  {
    src: "/showcase/previslens-agent-04.mp4",
    className: "aspect-[9/16] min-w-[170px] sm:min-w-[210px] lg:min-w-0",
  },
]

export default function VideoSection({ className }: VideoSectionProps) {
  return (
    <section id="video-section" className={`mx-auto mb-24 mt-2 w-full max-w-7xl md:mt-0 ${className || ""}`}>
      <div className="mb-6 flex flex-col items-center justify-between gap-3 px-1 text-center md:flex-row md:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Agent-first Showcase</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            One agent. Many creative directions.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-white/68">
          Explore how PrevisLens turns assets into cinematic product stories through an agent-first workflow.
        </p>
      </div>

      <div className="overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid auto-cols-max grid-flow-col gap-3 lg:grid-flow-row lg:grid-cols-[1.25fr_1.25fr_0.72fr_0.72fr] lg:items-stretch">
          {showcaseVideos.map((video) => (
            <div
              key={video.src}
              className={`overflow-hidden rounded-[18px] border border-white/15 bg-black shadow-2xl shadow-black/35 ${video.className}`}
            >
              <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
