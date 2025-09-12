// "use client"
// import { useRef } from "react"
// import CallToAction from "./call-to-action"
// import VideoSection from "./video-section"

// export default function HeroContent() {
//   const moveTextRef = useRef<HTMLDivElement>(null)


// return (
//   <div className="relative min-h-screen text-white">
//     {/* For Your Reference Tag - (No changes needed, this is well-positioned) */}
//     <div className="fixed top-20 left-1/2 -translate-x-1/2 z-20">
//       <span className="inline-block text-white font-semibold text-base tracking-wide bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
//         Your AI Co-Director for Cinematic Product Shots
//       </span>
//     </div>

//     {/* --- START OF MODIFICATION 1: PrevisLens Title --- */}
//     <div 
//       ref={moveTextRef} 
//       // We add 'flex' and 'items-center' to achieve true vertical centering of the content inside.
//       // We also add a small top padding 'pt-8' for a slight visual adjustment downwards.
//       className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none pt-8"
//     >
//       <h1
//         className="text-[150px] sm:text-[180px] md:text-[220px] lg:text-[280px] xl:text-[320px] font-bold leading-none tracking-tighter text-center"
//         style={{
//           // The magic for the vertical gradient happens here.
//           // We create a gradient from solid white at the top (60%) to fully transparent white at the bottom.
//           background: "linear-gradient(to bottom, #ffffff 60%, #ffffff00)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           backgroundClip: "text",
//         }}
//       >
//         PrevisLens
//       </h1>
//     </div>
//     {/* --- END OF MODIFICATION 1 --- */}

//     {/* --- START OF MODIFICATION 2: Vertical Spacing Rule --- */}
//     {/* The rule: We use a consistent top padding to separate major sections.
//         Here, we change 'pt-[60vh]' to 'pt-[55vh]' to slightly reduce the gap
//         between the perceived center and the start of the content, making it feel more connected.
//         We also add a consistent bottom margin 'mb-24' (or mb-32) to create a rhythmic spacing. */}
//     <div className="relative z-20 pt-[55vh] px-4 sm:px-6">
//       <div className="mb-24 md:mb-32">
//         <CallToAction />
//       </div>

//       <div className="mb-24 md:mb-32">
//         <VideoSection />
//       </div>
//       {/* --- END OF MODIFICATION 2 --- */}

//       {/* --- START OF MODIFICATION 3: Final Slogan Section --- */}
//       {/* We wrap the text content in a new 'section' and apply the blurred background style. */}
//       <section className="mb-24 md:mb-32">
//         <div className="relative max-w-3xl mx-auto p-8 md:p-12 rounded-2xl overflow-hidden">
//           {/* This div creates the blurred background effect */}
//           <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"></div>

//           {/* This ensures the text content is on top of the background */}
//           <div className="relative z-10 text-center space-y-6">
//             <p className="text-lg md:text-xl lg:text-2xl text-white">
//               Upload your model — or generate one with AI.
//             </p>
//             <p className="text-lg md:text-xl lg:text-2xl text-white">
//               Then direct your perfect shot in minutes.
//             </p>
//             <div className="pt-4">
//               <a
//                 href="#cta-section" // You might want to point this to your actual waitlist form
//                 className="inline-block border-b border-white hover:border-transparent transition-colors text-lg md:text-xl hover:text-white/80 text-white"
//               >
//                 Waitlist now.
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* --- END OF MODIFICATION 3 --- */}

//       {/* Scroll Indicator (Stylistically good, no changes needed) */}
//       <div className="flex justify-center mb-10">
//         <div className="animate-bounce">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-white/70"
//           >
//             <path d="M12 5v14"></path>
//             <path d="m19 12-7 7-7-7"></path>
//           </svg>
//         </div>
//       </div>
//     </div>
//   </div>
// )
// }

"use client"
import { useRef } from "react"
import CallToAction from "./call-to-action"
import VideoSection from "./video-section"
import FocusFrame from "@/components/FocusFrame"


export default function HeroContent() {
  const moveTextRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative min-h-screen text-white">
      {/* For Your Reference Tag */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-20">
        <span className="inline-block text-white font-semibold text-base tracking-wide bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
          {/* Your AI Co-Director for Cinematic Product Shots */}
          Instant Cinematic Video, Directed by AI
        </span>
      </div>

      <div
        ref={moveTextRef}
        className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none"
        style={{ transform: "translateY(-10vh)" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <h1
            className="text-[120px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-bold leading-none tracking-tighter text-center"
            style={{
              background: "linear-gradient(to bottom, #ffffff 60%, #ffffff00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "white", // fallback color
              whiteSpace: "nowrap", // prevent text wrapping that could cut off letters
              overflow: "visible", // ensure letters aren't clipped
            }}
          >
            PrevisLens
          </h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-20 pt-[55vh] px-4 sm:px-6">
        <CallToAction />

        {/* Video Section */}
        <VideoSection />

        {/* CTA Content */}
        {/* <section className="mb-24 md:mb-32">
          <div className="relative max-w-3xl mx-auto p-8 md:p-12 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"></div>

            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Join us so you don't missout.
              </h2>

              <div className="mt-8">
                <div className="pt-4">
                  <a
                    href="#cta-section" // You might want to point this to your actual waitlist form
                    className="inline-block border-b border-white hover:border-transparent transition-colors text-lg md:text-xl hover:text-white/80 text-white"
                  >
                    Waitlist now.
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section> */}
        <section className="mb-24 md:mb-32">
          <div className="relative max-w-3xl mx-auto p-8 md:p-12 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"></div>

            <div className="relative z-10 text-center space-y-8">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Join us so you don't miss out.
              </h2>

              {/* 
                This is the new container for the FocusFrame.
                - 'flex justify-center': Horizontally centers the icon.
                - 'py-4': Adds some vertical breathing room around it.
              */}
              <div className="flex justify-center py-4">
                {/* 
                  COLOR & SIZE:
                  - 'text-white' provides the color.
                  - 'transform scale-150' (1.5x) or 'scale-200' (2x) makes it prominent.
                    For a standalone element, we can make it slightly larger.
                */}
                <div className="flex justify-center py-4">
                  <div className="transform scale-300 md:scale-200">
                    {/* --- START OF PRECISION FIX --- */}
                    {/* Now, we simply pass the desired color as a prop. It's clean and clear. */}
                    <FocusFrame color="#C7F9A9" />
                    {/* --- END OF PRECISION FIX --- */}
                  </div>
                </div>
              </div>

              {/* The 'Waitlist now' link. We remove the extra top padding from the div
                  as the container above already provides spacing. */}
              <div>
                <a
                  href="#cta-section"
                  className="inline-block border-b border-white hover:border-transparent transition-colors text-lg md:text-xl hover:text-white/80 text-white"
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
