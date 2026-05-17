"use client"

import FocusFrame from "@/components/FocusFrame"
import CallToAction from "./call-to-action"
import VideoSection from "./video-section"

export default function HeroContent() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="fixed top-20 left-1/2 z-20 -translate-x-1/2">
        <span className="inline-block border border-white/20 bg-black/40 px-4 py-1 text-base font-semibold tracking-wide text-white backdrop-blur-sm">
          Agent-first Creative Workspace
        </span>
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center"
        style={{ transform: "translateY(-10vh)" }}
      >
        <div className="mx-auto flex w-full max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <h1
            className="text-center text-[88px] font-bold leading-none tracking-tighter min-[420px]:text-[112px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px]"
            style={{
              background: "linear-gradient(to bottom, #ffffff 60%, #ffffff00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "white",
              whiteSpace: "nowrap",
              overflow: "visible",
            }}
          >
            PrevisLens
          </h1>
        </div>
      </div>

      <div className="relative z-20 px-4 pt-[55vh] sm:px-6">
        <CallToAction />
        <VideoSection />

        <section className="mb-24 md:mb-32">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-8 md:p-12">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md" />

            <div className="relative z-10 space-y-8 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Join the waitlist for the agent-first workflow.
              </h2>

              <div className="flex justify-center py-4">
                <div className="flex justify-center py-4">
                  <div className="scale-300 transform md:scale-200">
                    <FocusFrame color="#C7F9A9" />
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#cta-section"
                  className="inline-block border-b border-white text-lg text-white transition-colors hover:border-transparent hover:text-white/80 md:text-xl"
                >
                  Waitlist now.
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
