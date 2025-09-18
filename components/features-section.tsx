"use client"
import { Key, useState } from "react"
import { Plus, Minus } from "lucide-react"

// --- (The 'features' array and 'Feature' interface remain exactly the same) ---
interface Feature {
  overlayGif?: string | undefined
  details: any
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
  // {
  //   id: "instant-video",
  //   title: "Your AI Co-Director",
  //   description:
  //   "Stop wrestling with software and storyboard. Just describe your vision, and our AI Director crafts a complete, professionally-shot video for your product in minutes. Get either a seamless tracking shot or a dynamic,edited multi-angle sequence, ready for immediate use.",
  //   screenshot: "/show-case.png", // 视觉：应该是一个播放器界面，展示最终的汽车视频成品
  //   // "From a simple text prompt to a complete, professionally-directed video in minutes. Our AI acts as your creative partner, understanding your vision to generate either a seamless, continuous shot or a dynamic,  edited, multi-angle sequence for immediate use. Stop wrestling with timelines and complex software.",
  //   // "Our system powered by a Multi-Agent Generative Cinematography Engine. You can get a complete, professionally-directed video in minutes, not days. Our Multi-Agent System analyzes your prompt to create either a seamless, continuous shot of a specific duration, or a dynamic, edited sequence with multiple camera angles—ready for immediate use. (Fine-tune keyframes coming soon)",

  // },
  {
    id: "instant-video",
    title: "AI Co-Director, From Prompt to Cinematic Sequence",

    // --- START OF MODIFICATION ---
    // 1. We keep your excellent opening sentence as the main description.
    description: "Stop wrestling with timelines and complex software. Previslens is built for natural language. Just describe the shot you imagine, and our AI co-director instantly generates a complete sequence of professional shots, ready for you to fine-tune.",

    // 2. We add a new 'details' array for the bullet points.
    details: [
      "**Generative Cinematography:** From seamless tracking to dynamic multi-angle cuts, all tailored to your model. Automatically composed for any aspect ratio—from cinematic 16:9 to vertical 9:16.",
      "**Interactive Fine-Tuning:** Your vision is paramount. Take full control by effortlessly adjusting any AI-generated keyframe directly in the 3D viewport until every shot is perfect.",
      "**Seamless Team Collaboration:** Instantly share a live, interactive preview of your entire sequence with a single link to gather feedback and align your team in real-time."
      // "**Total Creative Control:** Your vision is paramount. **Effortlessly fine-tune any AI-generated keyframe** directly in the 3D viewport. Adjust the camera angle, distance, and lighting until every shot is perfect.",
      // "**Seamless Team Collaboration:** Instantly share a live, interactive preview of your entire sequence with a single link. Gather feedback, align with your team, and iterate on the creative direction in real-time."
    ],

    // 3. We use the original 'screenshot' for the static base image.
    screenshot: "/show-case.jpg",

    // 4. We add a new optional 'overlayGif' property.
    overlayGif: "/show-case.gif", // Replace with the actual path to your GIF
    // --- END OF MODIFICATION ---
  },
  {
    // --- 这是您提议的核心修改 ---
    id: "native-pipeline",
    title: "An AI-Native Pipeline",
    description:
      "Unlike traditional software with AI 'add-ons', our entire pipeline is AI-native from day one. Stop gambling with prompts. Our tool generates a complete 3D 'digital skeleton'—models, lights, and cameras—that acts as the visual ground truth.",
   // 将两个核心应用场景，作为这个模块的“子弹点”
    details: [
      "**Art-Direct Generative Video:** Use your perfectly composed frames as a visual ground truth to guide any AI video model like Sora or Veo, ensuring absolute control over your starting and ending shots.",
      "**Visualize New Concepts:** Select any 'golden frame' and use a simple prompt to transform it into a stunning, stylized image—perfect for new campaigns or on-brand UGC."
    ],
    screenshot: "/native-pipeline.png",
  },
  {
    id: "pro-export",
    title: "Export Production-Ready Scene In Seconds",
    // "Export a Production-Ready Scene",
    details: null,
    description:
      "Don't just preview it—use it. Export the entire AI-generated scene, including all cameras and lights, directly to Blender. What used to be a half-day of manual setup is now a under 90-second, production-ready starting point for your team's high-end rendering and final touches.",
    // "Export the entire AI-generated scene to Blender with a single click. Our script perfectly reconstructs all shots and lighting, providing a robust, editable starting point for your team to refine and finalize, and a production-ready starting point for high-end rendering. All these under 90 seconds.",
    screenshot: "/3d-scene-export.png", // 视觉：Web与Blender分屏对比图
  },
  {
    id: "ai-render",
    title: "Your Brand, Reimagined",
    details: null,
    // "AI Render with Perfect Brand Fidelity",
    description:
      // "Unlock limitless creative styles without compromising brand fidelity. Our AI Render applies any artistic concept directly onto your product's true 3D geometry. Use it to art-direct the perfect starting and ending frames, providing a visual ground truth to guide any generative model, visualize new campaigns or empower your community to create on-brand UGC.",
      "Unlock limitless creative styles without compromising brand fidelity. Our AI Render applies any artistic concept directly onto your product's true 3D geometry. Use this powerful feature to instantly visualize new campaigns or empower your community to create on-brand UGC.",
    // "Our AI respects your core asset. Whether you upload a precise 3D model or generate a new concept with AI, we render stunning, creative visuals directly onto your product's true geometry. No guesswork, no approximations.It's the perfect tool to visualize new concepts, or to empower your community to generate stunning, on-brand UGC that respects your core asset.",
    // "Unlock limitless creative variations without compromising your brand. Our advanced AI rendering pipeline applies any artistic style directly onto your product's true geometry. Go from a standard 3D model to a stunning, on-brand visual in a single step. Perfect for visualizing new campaigns or empowering your community to create.",
    // "Go beyond photorealism. Our AI applies any creative style directly onto your product's true geometry. Visualize new concepts, or empower your community to generate stunning, on-brand UGC.",
    // isComingSoon: true,
    screenshot: "/ai-render.png", 
  },


]

export default function FeaturesSection() {
  // --- (The state management logic remains exactly the same) ---
  const [expandedFeature, setExpandedFeature] = useState<string>("multi-agent")

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? "" : featureId)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Sticky container for the visual content */}
        <div className="relative lg:sticky lg:top-20">
          <div className="aspect-[4/3] bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
            {(() => {
              const currentFeature = features.find((f) => f.id === expandedFeature);

              // --- START OF PRECISION FIX: Conditional Rendering Logic ---

              // 1. If the current feature is expanded AND it has a GIF, ONLY show the GIF.
              if (currentFeature && currentFeature.overlayGif) {
                return (
                  // <img
                  //   key={currentFeature.id + "-gif"} // Unique key for the GIF
                  //   src={currentFeature.overlayGif}
                  //   alt={currentFeature.title + " in action"}
                  //   className="w-full h-full object-cover animate-fade-in"
                  // />
                  <img
                    // --- START OF PRECISION FIX ---
                    // 1. The key now includes a timestamp. Every time you expand,
                    //    'expandedFeature' changes, triggering a re-render.
                    //    Date.now() generates a NEW key, forcing React to create a brand new <img> element.
                    key={currentFeature.id + "-gif-" + Date.now()}

                    // 2. The src now has a meaningless query parameter with the timestamp.
                    //    This tricks the browser into thinking it's a new file, bypassing the cache
                    //    and forcing it to replay the GIF from the beginning.
                    src={`${currentFeature.overlayGif}?t=${Date.now()}`}
                    // --- END OF PRECISION FIX ---

                    alt={currentFeature.title + " in action"}
                    className="w-full h-full object-cover animate-fade-in"
                  />
                );
              }

              // 2. In ALL other cases (feature is not expanded, or it has no GIF), show the screenshot.
              //    If no feature is expanded, it defaults to showing the first feature's screenshot.
              const imageToShow = currentFeature?.screenshot || features[0].screenshot;
              const imageKey = currentFeature?.id || features[0].id;

              return (
                <img
                  key={imageKey + "-screenshot"} // Unique key for the screenshot
                  src={imageToShow}
                  alt={currentFeature?.title || "Feature preview"}
                  className="w-full h-full object-cover animate-fade-in"
                />
              );

              // --- END OF PRECISION FIX ---
            })()}
          </div>
        </div>

        {/* Right side - Features list (Accordion) */}
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.id} className="border-b border-white/20 pb-4">
              <button
                onClick={() => toggleFeature(feature.id)}
                className="w-full flex items-center justify-between text-left group py-2"
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

              {/* Conditionally rendered description area */}
              {expandedFeature === feature.id && (
                <div className="mt-2 pr-10 animate-fade-in">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">{feature.description}</p>

                  {/* The bullet points logic remains the same and is correct */}
                  {feature.details && (
                    <ul className="mt-4 space-y-3 list-disc pl-5 text-white/70">
                      {feature.details.map((detail: string, index: Key | null | undefined) => (
                        <li key={index} className="text-base leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white/90 font-semibold">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
// YNBK9LCN