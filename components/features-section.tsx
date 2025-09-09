"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

// --- (The 'features' array and 'Feature' interface remain exactly the same) ---
interface Feature {
  id: string
  title: string
  description: string
  isComingSoon?: boolean
  screenshot?: string
}

// const features: Feature[] = [
//   {
//     id: "generative",
//     title: "Generative Cinematography Engine",
//     description:
//       "Our system utilizes a multi-agents system of specialized AI agents—a Director, a DP, a Gaffer—that collaborate to interpret your prompt. Using nature language, they're design a complete cinematic scene with dynamic shots and physically-based lighting, all tailored to your 3D model.",
//     screenshot: "/ai-cinematography-workflow-with-multiple-agents.jpg",
//   },
//   {
//     id: "export-scene",
//     title: "Export a Production-Ready Scene",
//     description:
//       "Bridge the gap between AI concepts and your professional pipeline. Export a complete 3D scene that perfectly reconstructs the AI's decisions in Blender. It provides a robust, editable starting point for your team to refine and finalize.",
//     screenshot: "/blender-3d-scene-export-interface.jpg",
//   },
//   {
//     id: "ai-render",
//     title: "AI Render with Perfect Brand Fidelity",
//     description:
//       "Our AI respects your core asset. Whether you upload a precise 3D model or generate a new concept with AI, we render stunning, creative visuals directly onto your product's true geometry. No guesswork, no approximations.It's the perfect tool to visualize new concepts, or to empower your community to generate stunning, on-brand UGC that respects your core asset.",
//     isComingSoon: true,
//     screenshot: "/ai-rendering-with-brand-fidelity-showcase.jpg",
//   },
// ]
const features: Feature[] = [
    {
      id: "instant-video",
      title: "Your AI Co-Director",
      description:
        "Our system powered by a Multi-Agent Generative Cinematography Engine.You can get a complete, professionally-directed video in minutes, not days. Our Multi-Agent System analyzes your prompt to create either a seamless, continuous shot of a specific duration, or a dynamic, edited sequence with multiple camera angles—ready for immediate use. (Fine-tune keyframes coming soon)",
      screenshot: "/final-car-showcase-video-player.jpg", // 视觉：应该是一个播放器界面，展示最终的汽车视频成品
    },
    {
        id: "pro-export",
        title: "Export a Production-Ready Scene",
        description:
        "Export the entire AI-generated scene to Blender with a single click. Our script perfectly reconstructs all shots and lighting, providing a robust, editable starting point for your team to refine and finalize, and a production-ready starting point for high-end rendering. All these under 90 seconds.",
        screenshot: "/blender-3d-scene-export-interface.jpg", // 视觉：Web与Blender分屏对比图
      },
    {
      id: "ai-render",
      title: "AI Render with Perfect Brand Fidelity",
      description:
            "Our AI respects your core asset. Whether you upload a precise 3D model or generate a new concept with AI, we render stunning, creative visuals directly onto your product's true geometry. No guesswork, no approximations.It's the perfect tool to visualize new concepts, or to empower your community to generate stunning, on-brand UGC that respects your core asset.",

        // "Go beyond photorealism. Our AI applies any creative style directly onto your product's true geometry. Visualize new concepts, or empower your community to generate stunning, on-brand UGC.",
      isComingSoon: true,
      screenshot: "/ai-rendering-with-brand-fidelity-showcase.jpg", // 视觉：前后对比图
    },
    
  ]

export default function FeaturesSection() {
  // --- (The state management logic remains exactly the same) ---
  const [expandedFeature, setExpandedFeature] = useState<string>("multi-agent")

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? "" : featureId)
  }

  // --- START OF PRECISION FIX ---
  // We no longer need the 'currentFeature' variable at the top level,
  // as the image will now be determined inside the loop.

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* The main grid now contains only the feature list on the right. 
          The image will be conditionally rendered inside the list itself. */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side - This will be a "sticky" container for our image */}
        <div className="relative lg:sticky lg:top-20">
          <div className="aspect-[4/3] bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
            {(() => {
              // This logic finds the currently expanded feature to display the correct image.
              const currentFeature = features.find((f) => f.id === expandedFeature);
              return currentFeature?.screenshot ? (
                <img
                  // We add a 'key' to the image to force a re-render (with a fade effect) when the src changes.
                  key={currentFeature.id}
                  src={currentFeature.screenshot}
                  alt={currentFeature.title}
                  className="w-full h-full object-cover animate-fade-in" // 'animate-fade-in' is a simple fade animation
                />
              ) : (
                // This is a fallback for when no feature is expanded.
                <div className="w-full h-full flex items-center justify-center text-white/60">
                  <span>Select a feature to see preview</span>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Right side - Features list (Accordion) */}
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.id} className="border-b border-white/20 pb-4">
              <button
                onClick={() => toggleFeature(feature.id)}
                className="w-full flex items-center justify-between text-left group py-2" // Added py-2 for better click area
              >
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-white/80 transition-colors">
                    {feature.title}
                    {feature.isComingSoon && (
                      <span className="ml-2 text-white/60 font-medium text-sm">(Coming Soon)</span>
                    )}
                  </h3>
                </div>
                <div className="ml-4 text-white/60 group-hover:text-white transition-colors">
                  {expandedFeature === feature.id ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
              </button>

              {/* The description is conditionally rendered as before */}
              {expandedFeature === feature.id && (
                <div className="mt-2 pr-10 animate-fade-in">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">{feature.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// --- END OF PRECISION FIX ---

// You might need to add this simple fade-in animation to your globals.css file
/* In your globals.css:
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
*/
