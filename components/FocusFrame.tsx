// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { useState, useEffect } from "react"

// export default function FocusFrame() {
//   const corners = [
//     { id: 1, position: "top-0 left-0" }, // Top-Left
//     { id: 2, position: "top-0 right-0" }, // Top-Right
//     { id: 3, position: "bottom-0 right-0" }, // Bottom-Right
//     { id: 4, position: "bottom-0 left-0" }, // Bottom-Left
//   ]

//   const [visibleCorner, setVisibleCorner] = useState(1)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisibleCorner((prev) => (prev % 4) + 1)
//     }, 400) // Faster corner animation for more premium feel
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="w-4 h-4 relative">
//       <AnimatePresence>
//         {corners.map((corner) =>
//           visibleCorner === corner.id ? (
//             <motion.div
//               key={corner.id}
//               className={`absolute w-2 h-2 border-foreground/80 ${
//                 // Thicker borders with better contrast
//                 // Apply borders to the correct sides to form an 'L' shape
//                 corner.id === 1
//                   ? "border-t-2 border-l-2"
//                   : corner.id === 2
//                     ? "border-t-2 border-r-2"
//                     : corner.id === 3
//                       ? "border-b-2 border-r-2"
//                       : "border-b-2 border-l-2"
//               } ${corner.position}`}
//               initial={{ opacity: 0, scale: 0.6 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.6 }}
//               transition={{ duration: 0.15, ease: "easeOut" }} // Smoother, faster transitions
//             />
//           ) : null,
//         )}
//       </AnimatePresence>

//       <motion.div
//         className="absolute inset-1 border border-foreground/40 rounded-full"
//         initial={{ opacity: 0, scale: 1.1 }}
//         animate={{ opacity: [0, 0.6, 0], scale: [1.1, 0.9, 1.1] }}
//         transition={{
//           duration: 1.6, // Faster, more refined pulse
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "easeInOut",
//         }}
//       />
//     </div>
//   )
// }
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

// --- START OF PRECISION FIX ---
// We define a new type for the component's props, allowing a 'color' prop to be passed.
interface FocusFrameProps {
  color?: string; // The color is optional
}

export default function FocusFrame({ color = "#FFFFFF" }: FocusFrameProps) {
// --- END OF PRECISION FIX ---
  const corners = [
    { id: 1, position: "top-0 left-0" },
    { id: 2, position: "top-0 right-0" },
    { id: 3, position: "bottom-0 right-0" },
    { id: 4, position: "bottom-0 left-0" },
  ]

  const [visibleCorner, setVisibleCorner] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCorner((prev) => (prev % 4) + 1)
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-4 h-4 relative">
      <AnimatePresence>
        {corners.map((corner) =>
          visibleCorner === corner.id ? (
            <motion.div
              key={corner.id}
              // --- START OF PRECISION FIX ---
              // We remove the hardcoded 'border-foreground/80' and use an inline style
              // to dynamically apply the color passed via props.
              className={`absolute w-2 h-2 ${
                corner.id === 1
                  ? "border-t-2 border-l-2"
                  : corner.id === 2
                    ? "border-t-2 border-r-2"
                    : corner.id === 3
                      ? "border-b-2 border-r-2"
                      : "border-b-2 border-l-2"
              } ${corner.position}`}
              style={{ borderColor: color, opacity: 0.8 }}
              // --- END OF PRECISION FIX ---
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          ) : null,
        )}
      </AnimatePresence>

      <motion.div
        // --- START OF PRECISION FIX ---
        // We do the same for the pulsing circle.
        className="absolute inset-1 rounded-full"
        style={{ borderColor: color, opacity: 0.4, borderWidth: '1px' }}
        // --- END OF PRECISION FIX ---
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: [0, 0.6, 0], scale: [1.1, 0.9, 1.1] }}
        transition={{
          duration: 1.6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}