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
    "PrevisLens is an agent-first creative workspace that turns product assets into cinematic directions, visual stories, and campaign-ready ideas for modern brands",

  keywords: [
    "PrevisLens",
    "agent-first creative workspace",
    "agent-first product workflow",
    "AI creative workflow",
    "AI creative agent",
    "AI creative director",
    "product creative agent",
    "product asset workflow",
    "assets to creative direction",
    "assets to product story",
    "cinematic product stories",
    "product campaign ideas",
    "product visual ideas",
    "product content workflow",
    "brand content workflow",
    "AI product content",
    "AI product marketing",
    "AI campaign creative",
    "creative direction platform",
    "product launch creative",
    "visual campaign workflow",
    "creative agent workflow",
    "modern brand creative",
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
    title: "PrevisLens | Agent-First Creative Workspace",
    description:
      "Turn product assets into cinematic directions and visual stories with an agent-first creative workflow.",
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
      title: "PrevisLens | Agent-First Creative Workspace",
      description:
      "Turn product assets into cinematic directions, visual stories, and campaign-ready ideas with an agent-first creative workspace.",
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
