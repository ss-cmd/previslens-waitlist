"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
// import FocusFrame from "@/components/FocusFrame"
import ShaderBackground from "@/components/shader-background"

export default function ShaderShowcase() {
  return (
    <ShaderBackground>
      <Header />
      {/* <FocusFrame /> */}
      <HeroContent />
    </ShaderBackground>
  )
}
