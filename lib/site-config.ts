// This type definition is used for type-safety and auto-completion.
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  // 1. Core Site Information
  // ---------------------------------------------------------------------------
  name: "PrevisLens",
  url: "https://www.previslens.com", // Your final production domain

  // 2. SEO Metadata (Crucial for Google and LLMs)
  // ---------------------------------------------------------------------------
  // NEW DESCRIPTION: Directly addressing the pain from the tweet.
  description:
    "Tired of paying hundreds for Figma seats for contractors who just drop in a few files? ForYourReference is the visual workspace that works like Google Docs—free for contributors. A shared canvas for moodboards where anyone can add ideas, without the extra seat costs.",

  // NEW KEYWORDS: Infused with high-intent phrases from the tweet.
  keywords: [
    // High-intent keywords from user search
    "Figma alternative",
    "figma seat pricing",
    "Figma alternative for contractors",
    "visual workspace collaboration",
    "Google Docs for images",

    // Core category keywords
    "moodboard tool",
    "storyboard tool",
    "online collaboration tool",
    "brainstorming tool",

    // Pain point / solution keywords
    "reduce Figma costs",
    "save on software seats",
    "unlimited free contributors",
    "share moodboard with client",
    "collect feedback without login",

    // Your unique value proposition keywords
    "AI moodboard generator",
    "bias-free collaboration",
    "pre-production canvas",

    "creative interface",
    "creative workflow",
    "design productivity",
    "prototyping tool",
    "generative AI",
    "curation",
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
    title: "Stop Paying Figma Tax 💸", // 使用更吸引眼球的、适合Twitter的标题
    description:
      "Tired of the $400/mo Figma bill for people who just drop in photos? ForYourReference is the visual workspace that works like Google Docs—free for contributors.",
    images: ["/twitter-image.png"], // 修改为相对路径，图片应在public目录
  },

  // 5. Icons & Theme Colors
  // ---------------------------------------------------------------------------
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
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
      // NEW HOME TITLE: Uses the core search term "Figma Alternative".
      // title: "ForYourReference | AI-Powered Visual Collaboration for Teams",
      title: "ForYourReference | Your Team's Visual Workspace, Without the Seat Costs",
      description:
      "Tired of paying for extra seats for contractors who just drop in a few files? ForYourReference is the visual workspace that works like Google Docs—free for contributors. A shared canvas for moodboards and creative research, without the seat costs.",
    },

  },

  // 7. Social Links
  // ---------------------------------------------------------------------------
  social: {
    twitter: "https://x.com/shuxiaoshushu",
    email: "mailto:contact@foryourref.com",
    instagram: "https://www.instagram.com/momoiamcgi",
  },
}
