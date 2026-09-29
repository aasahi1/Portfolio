import LurnImage from "@/assets/project-lurn.png"

export interface Project {
  id: string
  title: string
  category: "UX / Product"
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
    description: "A shared household app that turns room-based chores into visible progress and meaningful rewards.",
    longDescription: "HabitAt explores how a shared home can make chores easier to notice and coordinate. Instead of starting with a flat checklist, the experience organizes tasks by room so household members can see where help is needed. Completing a task earns points that unlock furniture for a shared virtual home; a friend map adds encouragement without making the concept depend on competition. The design challenge was to make the reward loop understandable while keeping the practical task flow at its center.",
    role: "UX Researcher & Product Designer",
    tools: ["Figma", "Prototyping", "User Flows", "Design Sprint"],
    timeline: "Design sprint; exact length not recorded (1st place)",
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
    description: "A referral and advisor-matching concept that helps Co-operators start more relevant conversations earlier.",
    longDescription: "Co-Connect was a design competition concept for Co-operators. The team explored how people could get useful advice before insurance or financial planning feels urgent. An existing client shares a short lifestyle quiz with a friend; answers about goals, life stage, and communication preferences inform an advisor match and give the advisor context for a first conversation. The concept pairs this referral flow with a FutureYou Box prize draw. My work focused on research, product framing, and the end-to-end interaction flow, from invitation through match and advisor handoff.",
    role: "Lead UX Researcher & Product Designer",
    tools: ["Figma", "Miro", "User Testing", "Design Sprint"],
    timeline: "3 weeks (design sprint winner)",
    tags: ["UX Design", "FinTech", "Design Sprint"],
    image: "/Midnight1_transparent.png",
    imageAlt: "Co-Connect app interface on mobile mockup",
    gallery: [
      { url: "/Midnight1_transparent.png", alt: "Co-Connect primary flow screens" },
      { url: "/Midnight_transparent.png", alt: "Co-Connect advisor matching results" },
      { url: "/co-connect/flow.svg", alt: "Co-Connect referral, lifestyle quiz, advisor match, and warm handoff flow diagram" },
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
    description: "An inclusive learning concept that breaks assignments into manageable activities and makes progress visible.",
    longDescription: "LURN is an inclusive learning concept shaped around a Grade 4 learner who benefits from short, flexible activities and text or audio support. Students join a class, share their learning preferences, and see clear next steps in a personalized dashboard. Teacher and student flows connect assignments, practice, feedback, and progress. The design uses short learning cards and encouraging feedback to make the next action easier to start, while keeping teachers part of the learning loop. My role covered the product experience from learner framing and flows through interface design and prototyping.",
    role: "End-to-End Product Designer",
    tools: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    timeline: "2 Months",
    tags: ["UX Research", "Product Design", "Figma"],
    image: LurnImage,
    imageAlt: "LURN mobile microlearning interface designed by Amna Sahi",
    gallery: [
      { url: LurnImage, alt: "LURN microlearning card interface" },
      { url: "/lurn/learning-loop.svg", alt: "LURN student flow from joining a class through practice, feedback, and next steps" }
    ],
    color: "bg-[#fde768]",
  },
  {
    id: "icmms",
    title: "ICMMS",
    category: "UX / Product",
    description: "A responsive product website that makes a complex enterprise operations platform easier to understand.",
    longDescription: "During my co-op at Alectify, I designed and built the ICMMS website from the ground up. I shaped the information architecture, responsive layouts, visual direction, interaction patterns, and website copy to explain a complex operations product with clarity. The work moved from product and audience framing through page structure, interface design, and implementation. The authenticated platform is protected by an NDA, so this case study uses original abstract visuals and discusses only my process and information Alectify has made public.",
    role: "Website Designer & Builder",
    tools: ["Figma Make", "Figma", "Responsive Design", "UX Writing"],
    timeline: "Alectify co-op term; exact length not recorded",
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
]

// Lead with the three projects that best show playful systems and connected user journeys.
export const FEATURED_PROJECTS = ["habitat", "lurn", "co-connect"].flatMap((id) =>
  PROJECTS.filter((project) => project.id === id),
)
