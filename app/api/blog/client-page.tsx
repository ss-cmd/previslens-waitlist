
// "use client";

// import { useState } from "react";
// import { siteConfig } from "@/lib/site-config";
// import ModernCTA from "@/components/modern-cta";
// import { RecommendedReading } from "@/app/blog/RecommendedReading";


// // Reusable component for section headings
// const ArticleSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
//   <section className="space-y-4">
//     <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">{title}</h2>
//     <div className="space-y-4 text-lg text-text-secondary leading-relaxed">{children}</div>
//   </section>
// );

// // Reusable component for list items
// const ListItem = ({ children }: { children: React.ReactNode }) => (
//   <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">
//     {children}
//   </li>
// );

// // TypeScript interfaces for pricing structure
// interface SeatPricing {
//   Monthly: number;
//   Annual?: number;
// }

// interface CurrencyPricing {
//   Full: SeatPricing;
//   Dev: SeatPricing;
//   Collab: SeatPricing;
// }

// interface PlanPricing {
//   USD: CurrencyPricing;
//   EUR: CurrencyPricing;
//   GBP: CurrencyPricing;
//   JPY: CurrencyPricing;
//   CAD: CurrencyPricing;
// }

// interface Pricing {
//   Professional: PlanPricing;
//   Organization: PlanPricing;
//   Enterprise: PlanPricing;
// }

// type Plan = "Professional" | "Organization" | "Enterprise";
// type Currency = "USD" | "EUR" | "GBP" | "JPY" | "CAD";

// // Figma Billing Calculator Component
// const FigmaBillingCalculator = () => {
//   const [plan, setPlan] = useState<Plan>("Professional");
//   const [fullSeats, setFullSeats] = useState<number>(0);
//   const [devSeats, setDevSeats] = useState<number>(0);
//   const [collabSeats, setCollabSeats] = useState<number>(0);
//   const [billingCycle, setBillingCycle] = useState<"Annual" | "Monthly">("Annual");
//   const [currency, setCurrency] = useState<Currency>("USD");

//   const pricing: Pricing = {
//     Professional: {
//       USD: { Full: { Monthly: 15, Annual: 12 }, Dev: { Monthly: 15, Annual: 12 }, Collab: { Monthly: 5, Annual: 3 } },
//       EUR: { Full: { Monthly: 20, Annual: 16 }, Dev: { Monthly: 15, Annual: 12 }, Collab: { Monthly: 5, Annual: 3 } },
//       GBP: { Full: { Monthly: 18, Annual: 14 }, Dev: { Monthly: 14, Annual: 11 }, Collab: { Monthly: 5, Annual: 3 } },
//       JPY: { Full: { Monthly: 3000, Annual: 2400 }, Dev: { Monthly: 2250, Annual: 1800 }, Collab: { Monthly: 750, Annual: 450 } },
//       CAD: { Full: { Monthly: 27, Annual: 21 }, Dev: { Monthly: 20, Annual: 16 }, Collab: { Monthly: 7, Annual: 4 } },
//     },
//     Organization: {
//       USD: { Full: { Monthly: 45 }, Dev: { Monthly: 25 }, Collab: { Monthly: 5 } },
//       EUR: { Full: { Monthly: 55 }, Dev: { Monthly: 25 }, Collab: { Monthly: 5 } },
//       GBP: { Full: { Monthly: 50 }, Dev: { Monthly: 22 }, Collab: { Monthly: 5 } },
//       JPY: { Full: { Monthly: 8300 }, Dev: { Monthly: 3750 }, Collab: { Monthly: 750 } },
//       CAD: { Full: { Monthly: 75 }, Dev: { Monthly: 35 }, Collab: { Monthly: 7 } },
//     },
//     Enterprise: {
//       USD: { Full: { Monthly: 75 }, Dev: { Monthly: 35 }, Collab: { Monthly: 5 } },
//       EUR: { Full: { Monthly: 90 }, Dev: { Monthly: 35 }, Collab: { Monthly: 5 } },
//       GBP: { Full: { Monthly: 85 }, Dev: { Monthly: 32 }, Collab: { Monthly: 5 } },
//       JPY: { Full: { Monthly: 13600 }, Dev: { Monthly: 5250 }, Collab: { Monthly: 750 } },
//       CAD: { Full: { Monthly: 120 }, Dev: { Monthly: 50 }, Collab: { Monthly: 7 } },
//     },
//   };

//   const calculateCost = () => {
//     const cycle = billingCycle === "Annual" ? "Annual" : "Monthly";
//     const multiplier = billingCycle === "Annual" ? 12 : 1;
//     const planPricing = pricing[plan][currency];
//     const fullCost = fullSeats * (planPricing.Full[cycle] || planPricing.Full.Monthly);
//     const devCost = devSeats * (planPricing.Dev[cycle] || planPricing.Dev.Monthly);
//     const collabCost = collabSeats * (planPricing.Collab[cycle] || planPricing.Collab.Monthly);
//     const total = (fullCost + devCost + collabCost) * multiplier;
//     const savings = billingCycle === "Annual" && plan === "Professional" ? (fullSeats * 15 + devSeats * 15 + collabSeats * 5) * 12 - total : 0;
//     return { total, savings, fullCost, devCost, collabCost };
//   };

//   const { total, savings, fullCost, devCost, collabCost } = calculateCost();

//   return (
//     <div className="border border-gray-300 p-4 rounded-lg">
//       <h3 className="text-xl font-bold mb-4">Figma Billing Calculator (2025 Pricing)</h3>
//       <div className="space-y-4">
//         <div>
//           <label className="block mb-1">Plan:</label>
//           <select value={plan} onChange={(e) => setPlan(e.target.value as Plan)} className="border p-2 rounded w-full">
//             <option>Professional</option>
//             <option>Organization</option>
//             <option>Enterprise</option>
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1">Full Seats ($15/month, $12/month annually):</label>
//           <input
//             type="number"
//             value={fullSeats}
//             onChange={(e) => setFullSeats(Number(e.target.value))}
//             className="border p-2 rounded w-full"
//             min="0"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Dev Seats ($15/month, $12/month annually):</label>
//           <input
//             type="number"
//             value={devSeats}
//             onChange={(e) => setDevSeats(Number(e.target.value))}
//             className="border p-2 rounded w-full"
//             min="0"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Collab Seats ($5/month, $3/month annually):</label>
//           <input
//             type="number"
//             value={collabSeats}
//             onChange={(e) => setCollabSeats(Number(e.target.value))}
//             className="border p-2 rounded w-full"
//             min="0"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Billing Cycle:</label>
//           <select
//             value={billingCycle}
//             onChange={(e) => setBillingCycle(e.target.value as "Annual" | "Monthly")}
//             className="border p-2 rounded w-full"
//           >
//             <option>Annual</option>
//             <option>Monthly</option>
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1">Currency:</label>
//           <select
//             value={currency}
//             onChange={(e) => setCurrency(e.target.value as Currency)}
//             className="border p-2 rounded w-full"
//           >
//             <option>USD</option>
//             <option>EUR</option>
//             <option>GBP</option>
//             <option>JPY</option>
//             <option>CAD</option>
//           </select>
//         </div>
//         <div className="mt-4">
//           <p>
//             <strong>Total Cost ({billingCycle}):</strong> {currency} {total.toFixed(2)}
//           </p>
//           <p><strong>Breakdown:</strong></p>
//           <ul className="space-y-1">
//             <li>Full Seats: {currency} {fullCost.toFixed(2)}</li>
//             <li>Dev Seats: {currency} {devCost.toFixed(2)}</li>
//             <li>Collab Seats: {currency} {collabCost.toFixed(2)}</li>
//           </ul>
//           {savings > 0 && (
//             <p>
//               <strong>Savings with Annual Billing:</strong> {currency} {savings.toFixed(2)}/year
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function HowToSaveOnFigmaSeatsPage() {
//   const spotsLeft = 42;

//   return (
//     <div className="bg-background text-foreground">
//       {/* Article Header */}
//       <header className="py-20 text-center">
//         <div className="container mx-auto px-6">
//           <p className="font-mono text-sm text-primary font-bold tracking-wider mb-4">COST-SAVING GUIDE</p>
//           <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto text-balance">
//             Cut Figma Costs by 30%+: 5 Proven Tips for Agencies & Freelancers (2025)
//           </h1>
//           <p className="mt-6 text-xl text-text-secondary max-w-3xl mx-auto">
//             Tired of Figma’s $15/month seat costs? Discover 5 expert strategies to save 30%+ while streamlining collaboration with contractors and clients.
//           </p>
//         </div>
//       </header>

//       {/* Article Body */}
//       <main className="container mx-auto px-6 pb-24">
//         <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto space-y-8">
//           <p>
//             <strong>Figma’s seat-based pricing can strain budgets</strong>, especially for agencies and freelancers managing contractors and clients. As of March 2025, Full seats cost $15/month ($12/month annually) in the Professional plan, with similar pricing for Dev seats and $5/month ($3/month annually) for Collab seats. View seats are free but limited to commenting and viewing. This guide shares <strong>5 proven tips</strong> to cut costs by 30%+ using Figma’s updated billing model and Connected Projects feature (planned for 2025).
//           </p>
//           <p><strong>What You’ll Learn:</strong></p>
//           <ul className="space-y-2">
//             <ListItem>Audit seats to eliminate unnecessary costs.</ListItem>
//             <ListItem>Maximize free View seats for clients.</ListItem>
//             <ListItem>Use Connected Projects to avoid redundant licenses.</ListItem>
//             <ListItem>Leverage temporary seat upgrades for short-term needs.</ListItem>
//             <ListItem>Negotiate enterprise discounts for larger teams.</ListItem>
//           </ul>

//           <ArticleSection title="1. Audit Your Figma Seats to Eliminate Waste">
//             <p>
//               Many teams overpay by assigning Full seats ($15/month or $12/month annually) to users who only need to view or comment. Figma’s admin panel lets you track seat usage to optimize assignments.
//             </p>
//             <p><strong>Actionable Steps:</strong></p>
//             <ul className="space-y-2">
//               <ListItem>Log into your Figma admin panel and review seat assignments.</ListItem>
//               <ListItem>Downgrade inactive users (no edits in 30 days) to free View seats.</ListItem>
//               <ListItem>Use activity logs (Professional/Organization plans) to monitor usage.</ListItem>
//             </ul>
//             <p>
//               <strong>Example:</strong> A 10-person agency with 5 unused Full seats saves <strong>$720/year</strong> by switching to annual billing ($12/month * 5 * 12) or <strong>$900/year</strong> by using View seats ($15/month * 5 * 12).
//             </p>
//           </ArticleSection>

//           <ArticleSection title="2. Maximize Free View Seats for Clients">
//             <p>
//               View seats are free and allow commenting and viewing across Figma Design, FigJam, and Figma Slides—perfect for clients providing feedback without editing.
//             </p>
//             <p><strong>Pro Tip:</strong> Share view-only links with commenting enabled to bypass paid seats.</p>
//             <p><strong>Case Study:</strong> A freelancer saved $360/year by moving 3 clients from Full seats ($15/month * 3 * 12) to free View seats, maintaining smooth collaboration.</p>
//           </ArticleSection>

//           <ArticleSection title="3. Use Connected Projects to Avoid Redundant Licenses">
//             <p>
//               Figma’s Connected Projects feature (planned for 2025) enables cross-organization collaboration without additional licenses, ideal for freelancers and agencies working with clients.
//             </p>
//             <p><strong>Benefits:</strong></p>
//             <ul className="space-y-2">
//               <ListItem>Co-edit files using client-side seats, reducing your costs.</ListItem>
//               <ListItem>Integrates seamlessly with your Figma workspace.</ListItem>
//             </ul>
//             <p>
//               <strong>Example:</strong> An agency with 5 contractors saves <strong>$900/year</strong> by using Connected Projects instead of Full seats ($15/month * 5 * 12).
//             </p>
//           </ArticleSection>

//           <ArticleSection title="4. Leverage Temporary Seat Upgrades">
//             <p>
//               Figma’s 2025 billing model allows temporary seat upgrades (up to 3 days) for short-term edit access, with admin approval for permanent upgrades. This suits contractors on brief projects.
//             </p>
//             <p><strong>Pro Tip:</strong> Set auto-downgrade policies to revert temporary seats to View seats post-project.</p>
//             <p><strong>Savings:</strong> A 2-week project for 2 Full seats costs $1.50/day * 14 days * 2 = $42 vs. $360/year for permanent seats.</p>
//           </ArticleSection>

//           <ArticleSection title="5. Negotiate Enterprise Discounts for Larger Teams">
//             <p>
//               Teams with 10+ users can access custom pricing in Figma’s Organization ($45/month per Full seat) or Enterprise ($75/month per Full seat) plans. Contact Figma’s sales team for discounts.
//             </p>
//             <p><strong>Pro Tip:</strong> Reference competitors like Adobe XD to negotiate better rates.</p>
//           </ArticleSection>

//           <ArticleSection title="Calculate Your Figma Costs">
//             <p>
//               Use our interactive calculator to estimate your 2025 Figma bill based on your team’s needs. Input seat types and billing preferences to uncover savings.
//             </p>
//             <FigmaBillingCalculator />
//           </ArticleSection>

//           <ArticleSection title="Your Next Steps">
//             <p>
//               Start saving today: audit your seats, maximize free View seats, and prepare for Connected Projects in 2025. Use the calculator above to plan your budget, and if you're ready for a fundamentally smarter approach,{" "}
//               <a href={siteConfig.url} className="font-bold text-primary hover:underline">
//                 ForYourReference
//               </a>{" "}
//                —the collaboration platform designed to eliminate these costs entirely.
//             </p>
//           </ArticleSection>
//           <RecommendedReading
//               title="A Guide to Managing & Refunding Accidental Figma Seats"
//               description="Check out our step-by-step guide on how to request a refund for accidental seats."
//               link="/blog/manage-figma-seat-refunds" // <-- 链接到另一篇文章
//             />
//         </article>
//       </main>

//       {/* Retained CTA */}
//       <ModernCTA spotsLeft={spotsLeft} />
//     </div>
//   );
// }