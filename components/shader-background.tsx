// "use client"

// import type React from "react"

// import { useEffect, useRef, useState } from "react"
// import { MeshGradient } from "@paper-design/shaders-react"

// interface ShaderBackgroundProps {
//   children: React.ReactNode
// }

// export default function ShaderBackground({ children }: ShaderBackgroundProps) {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [isActive, setIsActive] = useState(false)

//   useEffect(() => {
//     const handleMouseEnter = () => setIsActive(true)
//     const handleMouseLeave = () => setIsActive(false)

//     const container = containerRef.current
//     if (container) {
//       container.addEventListener("mouseenter", handleMouseEnter)
//       container.addEventListener("mouseleave", handleMouseLeave)
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("mouseenter", handleMouseEnter)
//         container.removeEventListener("mouseleave", handleMouseLeave)
//       }
//     }
//   }, [])

//   return (
//     <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
//       {/* SVG Filters */}
//       <svg className="absolute inset-0 w-0 h-0">
//         <defs>
//           <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
//             <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
//             <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
//             <feColorMatrix
//               type="matrix"
//               values="1 0 0 0 0.02
//                       0 1 0 0 0.02
//                       0 0 1 0 0.05
//                       0 0 0 0.9 0"
//               result="tint"
//             />
//           </filter>
//           <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
//               result="gooey"
//             />
//             <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
//           </filter>
//         </defs>
//       </svg>

//       {/* Background Shaders */}
//       <MeshGradient
//         className="absolute inset-0 w-full h-full"
//         colors={["#000000", "#332200", "#ffffff", "#FFA500", "#000000"]}
//         // colors={["#000000", "#8b5cf6", "#ffffff", "#1e1b4b", "#4c1d95"]}
//         speed={0.3}
//       />
//       <MeshGradient
//         className="absolute inset-0 w-full h-full opacity-60"
//         // colors={["#000000", "#ffffff", "#8b5cf6", "#000000"]}
//         colors={["#000000", "#ffffff", "#8b5cf6", "#000000"]}
//         speed={0.2}
//         // backgroundColor="transparent"
//       />

//       {children}
//     </div>
//   )
// }

/////
"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  // The containerRef and state management for mouse interaction can be kept,
  // as they might be useful for future interactive effects.
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // --- START OF PRECISION MODIFICATION ---
  return (
    // 1. Change the base background from black to a very light, slightly cool gray.
    // This creates the clean, high-end "studio" feel of the reference image.
    <div ref={containerRef} className="min-h-screen bg-[#F0F0F2] relative overflow-hidden">
      
      {/* We no longer need the complex SVG filters for this cleaner aesthetic. */}

      {/* 2. This is our PRIMARY gradient. It simulates the dark, flowing liquid/glass. */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        // THE KEY: The color palette is now extremely restrained.
        // It's mostly black, with a touch of deep amber for the highlights,
        // and a stark white to create sharp, glossy reflections.
        // We use a very dark gray instead of pure black to keep some detail.
        colors={["#1A1A1A", "#3D2B00", "#FFFFFF", "#0D0D0D"]}
        // A slower speed makes the movement feel more viscous and elegant.
        speed={0.3}
        // We can add a frequency to create larger, more blob-like shapes.
      />

      {/* 3. This is a SUBTLE secondary gradient. It adds a bit of ambient complexity. */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-50 mix-blend-multiply"
        // This gradient uses lighter grays to subtly modulate the background
        // and interact with the primary gradient.
        colors={["#E0E0E0", "#FFFFFF", "#D0D0D0"]}
        speed={0.2}
      />
      
      {/* The children (your page content) will be rendered on top of these gradients. */}
      {children}
    </div>
  )
  // --- END OF PRECISION MODIFICATION ---
}
