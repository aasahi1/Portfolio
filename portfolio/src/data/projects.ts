import LurnImage from "@/assets/project-lurn.png"

export interface Project {
  id: string
  title: string
  category: "UX / Product" | "Development" | "Branding"
  description: string
  longDescription: string
  role?: string
  tools?: string[]
  timeline?: string
  tags: string[]
  image: string
  imageAlt: string
  gallery: { url: string; alt: string }[]
  color: string
  link?: string
  linkText?: string
  secondaryLink?: string
  secondaryLinkText?: string
  confidential?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: "habitat",
    title: "HabitAt",
    category: "UX / Product",
    description: "A playful household task app that turns shared chores into visible progress, rewards, and friendly accountability.",
    longDescription: "HabitAt reimagines household chores as a shared, motivating experience. Tasks live inside a visual home, so everyone can immediately see what needs attention in each room. Completing tasks earns points that can be spent on furniture, while the friend map adds a light social layer for encouragement and accountability. The concept balances a friendly game-like system with a simple task flow, helping routine responsibilities feel tangible, collaborative, and rewarding.",
    role: "UX Researcher & Product Designer",
    tools: ["Figma", "Prototyping", "User Flows", "Design Sprint"],
    timeline: "Design Sprint (1st Place)",
    tags: ["Product Design", "Gamification", "Mobile UX"],
    image: "/habitat/logo.png",
    imageAlt: "HabitAt logo shaped like a colourful home",
    gallery: [
      { url: "/habitat/onboarding.png", alt: "HabitAt welcome and onboarding screen" },
      { url: "/habitat/house-view.png", alt: "HabitAt home dashboard with room-based tasks" },
      { url: "/habitat/shop-view.png", alt: "HabitAt rewards shop with furniture available for points" },
      { url: "/habitat/friend-map.png", alt: "HabitAt friend map for social accountability" },
      { url: "/habitat/first-place.jpg", alt: "HabitAt team receiving first place at the design competition" },
    ],
    color: "bg-[#fff0a3]",
    link: "https://www.figma.com/proto/OzjSJONNdMT7Sedl1mhm1e/Design-Sprint?node-id=28-1490&p=f&viewport=279%2C200%2C0.1&t=S7T1N3xZSezhDTt3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A1210&show-proto-sidebar=1&page-id=0%3A1",
    linkText: "Explore Interactive Prototype",
    secondaryLink: "https://www.figma.com/deck/CCEY1y65tzSI8CKW8MaJmz/slides-done-in-10-mins--peak-quality-?node-id=0-1&t=GFoab7S3poxteuYh-1",
    secondaryLinkText: "View Presentation Deck",
  },
  {
    id: "co-connect",
    title: "Co-Connect",
    category: "UX / Product",
    description: "Advisor-matching tool for Co-operators — connecting clients with the right advisor before they even start looking.",
    longDescription: "Co-Connect is an advisor-matching platform built for Co-operators as part of their design competition. The insight: people aren't against getting insurance help — they just feel it's confusing, expensive, or not relevant yet. And when they do reach out, they're matched by location alone. Co-Connect flips that. A current client shares a short lifestyle quiz with a friend; the friend answers questions about communication style, goals, and life stage, and gets matched with an advisor who genuinely fits. To incentivize sharing, participants enter a draw for a 'FutureYou Box' — a curated gift basket (smart plugs, leak sensors, dashcams) that reduces future claims. Smarter leads, fewer claims, better relationships.",
    role: "Lead UX Researcher & Product Designer",
    tools: ["Figma", "Miro", "User Testing", "Design Sprint"],
    timeline: "3 Weeks (Design Sprint Winner)",
    tags: ["UX Design", "FinTech", "Design Sprint"],
    image: "/Midnight1_transparent.png",
    imageAlt: "Co-Connect app interface on mobile mockup",
    gallery: [
      { url: "/Midnight1_transparent.png", alt: "Co-Connect primary flow screens" },
      { url: "/Midnight_transparent.png", alt: "Co-Connect advisor matching results" },
      { url: "/Quiz.svg", alt: "Lifestyle quiz question flow diagram" },
      { url: "/competition/co-connect-workshop.jpg", alt: "Co-Connect team collaborating during the competition" },
      { url: "/competition/co-connect-event.jpg", alt: "Competition participants gathered at the event" },
      { url: "/competition/co-connect-team.jpg", alt: "Co-Connect team with competition mentors" }
    ],
    color: "bg-[#becb6b]",
    link: "https://www.figma.com/proto/CzCG6Vue5eq1WwsaLMbQpt/UX-JAM?page-id=0%3A1&node-id=40-1697&p=f&viewport=469%2C167%2C0.02&t=E9TNODxmOhR8zZkR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=40%3A1697",
    linkText: "View Interactive Prototype",
  },
  {
    id: "lurn",
    title: "LURN",
    category: "UX / Product",
    description: "Microlearning platform designed around how students actually retain knowledge — in small bursts, with real feedback.",
    longDescription: "LURN started with a simple question: why do students cram the night before if they know it doesn't work? A round of user interviews revealed that existing tools demanded too much at once and gave nothing back — no feedback, no sense of progress, no community. LURN is the answer: bite-sized learning cards users can complete in under five minutes, a streak system that rewards consistency without punishing breaks, and a peer feedback loop where learners comment on each other's takeaways. The UX leans heavily on progressive disclosure — never showing more than one decision at a time — and the visual system uses warm, low-pressure tones to reduce the anxiety that comes with studying.",
    role: "End-to-End Product Designer",
    tools: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    timeline: "2 Months",
    tags: ["UX Research", "Product Design", "Figma"],
    image: LurnImage,
    imageAlt: "LURN mobile microlearning interface designed by Amna Sahi",
    gallery: [
      { url: LurnImage, alt: "LURN microlearning card interface" },
      { url: "/Frame.svg", alt: "LURN modular system architecture" },
      { url: "/Quiz.svg", alt: "LURN interactive recall quiz module" }
    ],
    color: "bg-[#fde768]",
    link: "https://github.com/aasahi1",
    linkText: "View Project on GitHub",
  },
  {
    id: "icmms",
    title: "ICMMS",
    category: "UX / Product",
    description: "An enterprise operations website I designed and built from start to finish during my co-op at Alectify.",
    longDescription: "ICMMS is an enterprise operations platform from Alectify. During my co-op, I designed and built its website from the ground up—shaping the information architecture, responsive experience, visual direction, interaction patterns, and every piece of interface and marketing copy. The challenge was to make a complex operational product feel focused and approachable for the people responsible for assets, work orders, and documentation. Because the authenticated platform is protected by an NDA, this case study uses original abstract visuals and discusses only my process plus capabilities Alectify has already made public.",
    role: "Website Designer & Builder",
    tools: ["Figma Make", "Figma", "Responsive Design", "UX Writing"],
    timeline: "Alectify Co-op Term",
    tags: ["Enterprise UX", "Product Design", "NDA"],
    image: "/icmms/cover.svg",
    imageAlt: "Abstract ICMMS NDA-protected case study cover",
    gallery: [
      { url: "/icmms/cover.svg", alt: "Abstract ICMMS case study cover with no production interface" },
      { url: "/icmms/process.svg", alt: "Generalized ICMMS design process: discover, structure, prototype, and deliver" },
      { url: "/icmms/scope.svg", alt: "Portfolio-safe overview of shareable ICMMS design disciplines" },
    ],
    color: "bg-[#0b2035]",
    link: "https://icmms.ai/dashboard",
    linkText: "Visit Live Product (Login Required)",
    confidential: true,
  },
  {
    id: "meridian",
    title: "Meridian",
    category: "Development",
    description: "Patient-facing health dashboard for a Waterloo health-tech startup — making lab results make sense.",
    longDescription: "Meridian is a React-based web dashboard I designed and helped build during a health-tech contract. The core problem: patients were receiving raw lab results with no context, leading to anxious calls to clinics for numbers that were entirely normal. My role spanned UX research, interaction design, and front-end implementation. I ran contextual inquiry sessions with both patients and clinicians to understand what information actually changed behaviour. The resulting dashboard surfaces a personalised 'snapshot' — trend lines over time, plain-language explanations, and clear normal ranges — so patients can self-triage before reaching for the phone. Built with React, TypeScript, and Recharts; designed in Figma with an accessible colour system that meets WCAG AA.",
    role: "Front-End Developer & UX Designer",
    tools: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Figma"],
    timeline: "3 Months Contract",
    tags: ["React", "UX Design", "Health-Tech"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1lZGljYWwlMjBoZWFsdGglMjBkYXNoYm9hcmQlMjBzY3JlZW4lMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGludGVyZmFjZSUyMG1pbmltYWx8ZW58MHx8fHwxNzg5MTgzNjYyfDA&ixlib=rb-4.1.0&q=85",
    imageAlt: "Meridian health data visualization analytics interface photo by Luke Chesser on Unsplash",
    gallery: [
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1lZGljYWwlMjBoZWFsdGglMjBkYXNoYm9hcmQlMjBzY3JlZW4lMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGludGVyZmFjZSUyMG1pbmltYWx8ZW58MHx8fHwxNzg5MTgzNjYyfDA&ixlib=rb-4.1.0&q=85", alt: "Meridian analytics trends screen photo by Luke Chesser on Unsplash" },
      { url: "https://images.unsplash.com/photo-1586448646505-e7bcafcd83a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1lZGljYWwlMjBoZWFsdGglMjBkYXNoYm9hcmQlMjBzY3JlZW4lMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGludGVyZmFjZSUyMG1pbmltYWx8ZW58MHx8fHwxNzg5MTgzNjYyfDA&ixlib=rb-4.1.0&q=85", alt: "Meridian lab status breakdown photo by KOBU Agency on Unsplash" },
      { url: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1lZGljYWwlMjBoZWFsdGglMjBkYXNoYm9hcmQlMjBzY3JlZW4lMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGludGVyZmFjZSUyMG1pbmltYWx8ZW58MHx8fHwxNzg5MTgzNjYyfDA&ixlib=rb-4.1.0&q=85", alt: "Meridian patient portal layout photo by 1981 Digital on Unsplash" }
    ],
    color: "bg-[#fde768]",
    link: "https://github.com/aasahi1",
    linkText: "View Code on GitHub",
  },
  {
    id: "folium",
    title: "Folium",
    category: "Branding",
    description: "Brand identity and website design for an independent ceramics and print studio.",
    longDescription: "Folium is a small-batch ceramics and risograph print studio run by two artists in Kitchener. They came to me with a Squarespace site that felt generic and copy that buried the handmade nature of their work. I started with a brand audit and three rounds of competitor analysis across the indie craft space, then facilitated a values-sorting workshop with the founders to get alignment on what 'Folium' actually meant to them. The redesigned site leads with texture — full-bleed photography, an earthy but modern type system, and a shop layout that makes each piece feel like an object worth considering. The final handoff included a lightweight design system in Figma, a component map for their developer, and a photography brief so the brand holds across future shoots.",
    role: "Brand Strategist & Web Designer",
    tools: ["Brand Identity", "Design Systems", "Figma", "Typography"],
    timeline: "6 Weeks",
    tags: ["Web Design", "Branding", "Design Systems"],
    image: "https://images.pexels.com/photos/27742078/pexels-photo-27742078.jpeg",
    imageAlt: "Folium handmade artisanal pottery ceramic craft studio photo by İclal Çapoğlu Cinal on Pexels",
    gallery: [
      { url: "https://images.pexels.com/photos/27742078/pexels-photo-27742078.jpeg", alt: "Folium ceramic studio still life photo by İclal Çapoğlu Cinal on Pexels" },
      { url: "https://images.pexels.com/photos/15440783/pexels-photo-15440783.jpeg", alt: "Folium tactile ceramic cups photo by Oleg Prachuk on Pexels" },
      { url: "https://images.pexels.com/photos/31240266/pexels-photo-31240266.jpeg", alt: "Folium pottery workshop studio environment photo by Jenny Mavimiro on Pexels" }
    ],
    color: "bg-[#becb6b]",
    link: "https://github.com/aasahi1",
    linkText: "View Brand Book",
  },
]
