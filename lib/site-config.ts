// This type definition is used for type-safety and auto-completion.
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  // 1. Core Site Information
  // ---------------------------------------------------------------------------
  name: "PrevisLens",
  url: "https://previslens.com",

  // 2. SEO Metadata (Crucial for Google and LLMs)
  // ---------------------------------------------------------------------------
  description:
    "PrevisLens is an agent-first creative tool for turning product assets into cinematic shots, visual stories, and launch-ready content.",

  keywords: [
    "PrevisLens",
    "agent-first creative tool",
    "product video generation",
    "AI product video",
    "AI creative workflow",
    "creative agent",
    "product storytelling",
    "product asset workflow",
    "assets to cinematic shots",
    "cinematic product stories",
    "product content generation",
    "brand content generation",
    "AI product marketing",
    "AI campaign creative",
    "product launch content",
    "cinematic product shots",
    "visual content workflow",
  ],

  // 3. Author & Creator Information
  // ---------------------------------------------------------------------------
  authors: [
    {
      name: "MOMOIAMCGI STUDIO LTD",
      twitter: "https://x.com/shuxiaoshushu",
    },
  ],
  creator: "@momoiamcgi",
  openSourceURL: "https://momoiamcgi.com",

  // 4. Social Media Sharing Previews (Open Graph & Twitter)
  // ---------------------------------------------------------------------------
  ogImage: "/og-images/og-image.png", // 修改为相对路径，图片应在public目录
  twitter: {
    card: "summary_large_image",
    creator: "@momoiamcgi",
    title: "PrevisLens | Agent-First Product Storytelling",
    description:
      "Turn product assets into cinematic shots and visual stories with an agent-first creative tool.",
    images: ["/twitter-image.png"],
  },

  // 5. Icons & Theme Colors
  // ---------------------------------------------------------------------------
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  // 6. Page-specific Metadata Templates
  // ---------------------------------------------------------------------------
  page: {
    home: {
      title: "PrevisLens | Agent-First Product Storytelling",
      description:
      "Turn product assets into cinematic shots, visual stories, and launch-ready content with an agent-first creative tool.",
    },

  },

  // 7. Social Links
  // ---------------------------------------------------------------------------
  social: {
    twitter: "https://x.com/shuxiaoshushu",
    email: "mailto:contact@previslens.com",
    instagram: "https://www.instagram.com/momoiamcgi",
  },
}
