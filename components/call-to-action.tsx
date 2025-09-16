"use client"
import { useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { sendGAEvent } from "@/lib/ga-events"

export default function CallToAction() {
  const [email, setEmail] = useState<string>("")
  const [role, setRole] = useState<string>("")
  const [socialLink, setSocialLink] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, role, socialLink }),
      })

      const data = await response.json()

      if (response.ok) {
        sendGAEvent("waitlist_signup", {
          method: "email",
          email_domain: email.split("@")[1] || "unknown",
        })

        setMessage("Successfully submitted! We'll contact you soon.")
        toast({
          title: "Success",
          description: "Successfully submitted! We'll contact you soon.",
        })
        setEmail("")
        setRole("")
        setSocialLink("")
      } else {
        sendGAEvent("waitlist_signup_failed", {
          error: data.message || "unknown_error",
        })
        throw new Error(data.message || "Failed to submit")
      }
    } catch (error) {
      setMessage("Submission failed, please try again.")
      toast({
        title: "Error",
        description: "Submission failed, please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta-section" className="max-w-6xl mx-auto mb-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side: Oneliner */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            No Setup.
            <br />
            Create Your Product's Story Now.
          </h2>
        </div>

        {/* Right side: Form */}
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 md:h-14 text-base md:text-sm w-full bg-black/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              aria-label="Email address"
            />

            <Select value={role} onValueChange={setRole} required>
              <SelectTrigger className="h-12 md:h-14 text-base md:text-sm w-full bg-black/20 border-white/30 text-white focus:ring-2 focus:ring-white/50 backdrop-blur-sm">
                <SelectValue placeholder="What's your role?" className="text-white/60" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-white/30 backdrop-blur-sm">
                <SelectItem value="Designer" className="text-white hover:bg-white/10">
                  Designer
                </SelectItem>
                <SelectItem value="Product Manager" className="text-white hover:bg-white/10">
                  Product Manager
                </SelectItem>
                <SelectItem value="Director" className="text-white hover:bg-white/10">
                  Director
                </SelectItem>
                <SelectItem value="Developer" className="text-white hover:bg-white/10">
                  Developer
                </SelectItem>
                <SelectItem value="Founder" className="text-white hover:bg-white/10">
                  Founder
                </SelectItem>
                <SelectItem value="Marketing" className="text-white hover:bg-white/10">
                  Marketing
                </SelectItem>
                <SelectItem value="Other" className="text-white hover:bg-white/10">
                  Other
                </SelectItem>
              </SelectContent>
            </Select>

            <Input
              id="socialLink"
              type="url"
              placeholder="Your Twitter/LinkedIn profile (optional)"
              value={socialLink}
              onChange={(e) => setSocialLink(e.target.value)}
              className="h-12 md:h-14 text-base md:text-sm w-full bg-black/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              aria-label="Social media profile"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 md:h-14 px-6 text-base md:text-lg bg-white hover:bg-white/90 text-black transition-colors w-full"
            >
              {isSubmitting ? "Submitting..." : "Waitlist Now"}
            </Button>
          </form>

          {message && (
            <div className="text-center font-medium text-white bg-black/40 py-3 px-4 rounded-lg backdrop-blur-sm border border-white/20">
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
