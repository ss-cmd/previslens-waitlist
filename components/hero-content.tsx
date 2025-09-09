"use client"
import { useRef } from "react"
import CallToAction from "./call-to-action"
import VideoSection from "./video-section"

export default function HeroContent() {
  const moveTextRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative min-h-screen text-white">
      {/* For Your Reference Tag */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-20">
        <span className="inline-block text-white font-semibold text-base tracking-wide bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
        Your AI Co-Director for Cinematic Product Shots
        </span>
        {/* Create professional 3D product videos from a single prompt */}
      </div>

      <div ref={moveTextRef} className="fixed top-1/2 left-0 w-full -translate-y-1/2 z-10 pointer-events-none">
        <h1
          className="text-[150px] sm:text-[180px] md:text-[220px] lg:text-[280px] xl:text-[320px] font-bold leading-none tracking-tighter text-center text-white"
          style={{
            background: "linear-gradient(to bottom, #ffffff, #cccccc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",

          }}
        >
        PrevisLens
        </h1>
      </div>

      {/* Content Sections */}
      <div className="relative z-20 pt-[60vh] px-4 sm:px-6">
        <CallToAction />

        {/* Video Section */}
        <VideoSection />

        {/* Text Content */}
        <section className="max-w-2xl mx-auto px-4 text-center space-y-6 mb-20">
          <p className="text-lg md:text-xl lg:text-2xl text-white">Turn one image into a structured concept world.</p>
          <p className="text-lg md:text-xl lg:text-2xl text-white">You mark. We expand.</p>
          <p className="text-lg md:text-xl lg:text-2xl text-white">
            We don't generate images —
            <br />
            We extract structure from the one you bring.
          </p>

          <div className="pt-4">
            <a
              href="#cta-section"
              className="inline-block border-b border-white hover:border-transparent transition-colors text-lg md:text-xl hover:text-white/80 text-white"
            >
              Waitlist now.
            </a>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="flex justify-center mb-10">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/70"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
