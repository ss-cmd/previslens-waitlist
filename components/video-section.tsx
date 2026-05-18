"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"

interface VideoSectionProps {
  className?: string
}

const showcaseVideos = [
  {
    src: "/previslens/previslens.mp4",
  },
  {
    src: "/showcase/previslens-agent-01.mp4",
  },
  {
    src: "/showcase/previslens-agent-02.mp4",
  },
  {
    src: "/showcase/previslens-agent-03.mp4",
  },
  {
    src: "/showcase/previslens-agent-04.mp4",
  },
]

export default function VideoSection({ className }: VideoSectionProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null)
  const activeVideo = activeVideoIndex !== null ? showcaseVideos[activeVideoIndex] : null

  const showPreviousVideo = () => {
    if (activeVideoIndex === null) return
    setActiveVideoIndex((activeVideoIndex - 1 + showcaseVideos.length) % showcaseVideos.length)
  }

  const showNextVideo = () => {
    if (activeVideoIndex === null) return
    setActiveVideoIndex((activeVideoIndex + 1) % showcaseVideos.length)
  }

  useEffect(() => {
    if (!activeVideo) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideoIndex(null)
      }

      if (event.key === "ArrowLeft") {
        showPreviousVideo()
      }

      if (event.key === "ArrowRight") {
        showNextVideo()
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeVideo, activeVideoIndex])

  return (
    <>
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
          <div className="grid auto-cols-[minmax(220px,1fr)] grid-flow-col gap-3 lg:grid-flow-row lg:grid-cols-5">
            {showcaseVideos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                onClick={() => setActiveVideoIndex(index)}
                className="group relative h-[320px] overflow-hidden rounded-[18px] border border-white/15 bg-black text-left shadow-2xl shadow-black/35 transition duration-300 hover:-translate-y-1 hover:border-white/30 md:h-[360px] lg:h-[300px]"
                aria-label={`Open showcase video ${index + 1}`}
              >
                <video autoPlay loop muted playsInline className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]">
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <span className="text-sm font-medium text-white/90">Storyboard view {index + 1}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition group-hover:border-white/35 group-hover:bg-black/45">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-xl md:px-6"
          onClick={() => setActiveVideoIndex(null)}
        >
          <div className="absolute inset-0 bg-white/5" />
          <div
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[20px] border border-white/15 bg-black/70 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={showPreviousVideo}
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:border-white/35 hover:bg-black/65"
              aria-label="Show previous video"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={showNextVideo}
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:border-white/35 hover:bg-black/65"
              aria-label="Show next video"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => setActiveVideoIndex(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition hover:border-white/35 hover:bg-black/65"
              aria-label="Close video player"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] max-h-[80vh] w-full bg-black">
              <video controls autoPlay playsInline className="h-full w-full object-contain">
                <source src={activeVideo.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
