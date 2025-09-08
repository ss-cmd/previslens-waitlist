"use client"
import { useState, useRef } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Sparkles, Zap, Clock, Calendar } from "lucide-react"

export default function HeroContent() {
  const [email, setEmail] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const { toast } = useToast()
  const moveTextRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage("Submitted. Thanks! We'll be in touch soon.")
      toast({
        title: "Success",
        description: "Submitted. Thanks! We'll be in touch soon.",
      })
      setEmail("")
    } catch (error) {
      setMessage("An error occurred. Please try again.")
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen text-white">
      {/* For Your Reference Tag */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-20">
        <span className="inline-block text-white font-semibold text-base tracking-wide bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
          For Your Reference
        </span>
      </div>

      {/* Fixed FYR Text with gradient */}
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
          FYR
        </h1>
      </div>

      {/* Content Sections */}
      <div className="relative z-20 pt-[60vh] px-4 sm:px-6">
        {/* Join waitlist section */}
        <section className="max-w-4xl mx-auto space-y-8 mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-center justify-center gap-3 text-white">
            <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />
            Join the waitlist & Get early access
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 md:p-6 bg-black/30 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-colors border border-white/10">
              <Zap className="h-5 w-5 md:h-6 md:w-6 text-white mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-lg md:text-xl text-white">Early Bird Benefits</h3>
                <p className="text-sm md:text-base text-white/90">
                  Be among the first to experience our innovative concept extraction technology.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 md:p-6 bg-black/30 rounded-xl backdrop-blur-sm hover:bg-black/40 transition-colors border border-white/10">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-lg md:text-xl text-white">Exclusive Features</h3>
                <p className="text-sm md:text-base text-white/90">
                  Get access to premium features during our beta testing phase.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 md:h-14 text-base md:text-lg flex-1 bg-black/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                aria-label="Email address"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 md:h-14 px-6 text-base md:text-lg bg-white hover:bg-white/90 text-black transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Get Early Access"}
              </Button>
            </div>
          </form>

          {message && (
            <div className="text-center font-medium text-white bg-black/40 py-3 px-4 rounded-lg backdrop-blur-sm border border-white/20">
              {message}
            </div>
          )}
        </section>

        {/* Video Section */}
        <section className="max-w-5xl mx-auto px-2 sm:px-4 mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left side: Vertical Video */}
            <div
              className="relative w-full md:w-1/2 lg:w-2/5 mx-auto"
              style={{ aspectRatio: "9/16", maxWidth: "450px" }}
            >
              <div className="absolute inset-0 border border-white/30 bg-black/20 hover:border-white/50 transition-colors rounded-lg shadow-lg backdrop-blur-sm">
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-white" />
                  <span className="text-sm font-medium text-white">Teaser</span>
                </div>

                {/* Video Content Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center text-3xl md:text-5xl font-bold text-white space-y-8">
                    <div>Feel</div>
                    <div>The</div>
                    <div>Frame</div>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center p-4">
                  <button
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Play video"
                  >
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                  </button>
                  <div className="flex-1 mx-2 h-1 bg-white/30">
                    <div className="w-1/3 h-full bg-white"></div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="w-5 h-5 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Mute"
                    ></button>
                    <button
                      className="w-5 h-5 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Settings"
                    ></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Description */}
            <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center space-y-6 px-4 md:px-6 py-6 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Experience the movement</h3>
              <p className="text-base md:text-lg text-white/95 leading-relaxed">
                See how our technology transforms static images into dynamic, interactive experiences. With just a few
                taps, bring your favorite manga panels, screenshots, and photos to life.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full border border-white/20">
                  <Calendar className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">May 2025</span>
                </div>
                <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full border border-white/20">
                  <Clock className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">01:24</span>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              href="#waitlist-form"
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
