import LurnImage from "@/assets/project-lurn.png"

export interface Project {
  id: string
  title: string
  category?: string
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

// Keep the full catalog here so archived case studies can be restored without rebuilding their entries.
const PROJECT_CATALOG: Project[] = [
  {
    id: "habitat",
    title: "HabitAt",
    category: "",
    description: "A shared household app that makes managing chores fun through room-based tasks, gamified progress, and rewards.",
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
    category: "",
    description: "A referral-based discovery experience helping people explore financial guidance on their own terms.",
    longDescription: "Created during the Co-operators uXperience Design Jam, Co-Connect pairs a trusted introduction with a short goals questionnaire and explainable advisor recommendations. The four-person team interviewed advisors, current clients, and prospective clients, then shaped the concept into a connected prototype. The project placed second among 30 teams.",
    role: "User Research, UX Design & Pitch Presenter",
    tools: ["Figma", "Miro", "Interview Research", "Prototyping"],
    timeline: "3 weeks | 2nd of 30 teams",
    tags: ["UX Design", "FinTech", "Design Sprint"],
    image: "/co-connect/case-study/co-connect-laptop-hero.png",
    imageAlt: "Laptop mockup displaying the Co-Connect landing page",
    gallery: [
      { url: "/co-connect/case-study/co-connect-referrals.jpg", alt: "Co-Connect referral page with a thoughtful introduction" },
      { url: "/co-connect/case-study/co-connect-review-answers.jpg", alt: "Co-Connect questionnaire review screen" },
      { url: "/co-connect/case-study/co-connect-match-results.jpg", alt: "Co-Connect advisor recommendation page" },
      { url: "/co-connect/case-study/co-connect-team-workshop.jpg", alt: "Design Jam participants collaborating in a workshop" },
      { url: "/co-connect/case-study/co-connect-event-team.jpg", alt: "Design Jam participants gathered at the event" },
      { url: "/co-connect/case-study/co-connect-mentor-team.jpg", alt: "Project team and mentors at the event" }
    ],
    color: "bg-[#becb6b]",
    link: "https://aasahi1.github.io/Co-Connect-front-end-prototype/",
    linkText: "Explore the working prototype",
  },
  {
    id: "lurn",
    title: "LURN",
    category: "",
    description: "An inclusive learning platform that transforms assignments into manageable activities, making learning more accessible and engaging for diverse learners.",
    longDescription: "LURN is an inclusive learning concept shaped around a Grade 4 learner who benefits from short, flexible activities and text or audio support. Students join a class, share their learning preferences, and see clear next steps in a personalized dashboard. Teacher and student flows connect assignments, practice, feedback, and progress. The design uses short learning cards and encouraging feedback to make the next action easier to start, while keeping teachers part of the learning loop. My role covered the product experience from learner framing and flows through interface design and prototyping.",
    role: "End-to-End Product Designer",
    tools: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    timeline: "6-hour designathon",
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
    category: "",
    description: "A public-facing website designed to make complex maintenance software easier to understand and explore.",
    longDescription: "At Alectify, I designed and built a public iCMMS website over two months with two engineers. I spoke with 35 employees across operational roles, surveyed user workflows, and reviewed competitor sites. The work connected product messaging, capability pages, and clear paths for prospective customers to learn more.",
    role: "UX/UI Designer & Front-End Builder",
    tools: ["UX Research", "Competitor Analysis", "Figma", "Front-End Development"],
    timeline: "2 months",
    tags: ["Enterprise UX", "B2B", "Website Design"],
    image: "/icmms/case-study/icmms-laptop-hero.png",
    imageAlt: "Laptop mockup displaying the iCMMS marketing website",
    gallery: [
      { url: "/icmms/case-study/sustainability-page.png", alt: "iCMMS sustainability page design" },
      { url: "/icmms/case-study/demo-page.png", alt: "iCMMS demo request page design" },
    ],
    color: "bg-[#0b2035]",
    link: "https://icmms.ai/",
    linkText: "Visit iCMMS",
  },
  {
    id: "grandmas-bakery",
    title: "Grandma’s Bakery",
    category: "",
    description: "An operations concept connecting bakery inventory, ingredient costs, sales, and weekly specials.",
    longDescription: "A five-hour hackathon concept for making small-bakery operations easier to review. The available project brief describes inventory, supplier costs, recipes, sales, purchasing, and specials; sales data is illustrative and no payment-terminal integration is documented.",
    role: "Lead Designer & Front-end Developer",
    tools: ["Figma", "React", "Python", "Illustrator", "Canva"],
    timeline: "5-hour hackathon",
    tags: ["Product Design", "Small Business", "Rapid Prototyping"],
    image: "/grandmas-bakery/dashboard.svg",
    imageAlt: "Grandma’s Bakery operations dashboard design",
    gallery: [
      { url: "/grandmas-bakery/dashboard.svg", alt: "Bakery operations dashboard with sales and tasks" },
      { url: "/grandmas-bakery/task-dashboard.svg", alt: "Bakery task dashboard with operational actions" },
      { url: "/grandmas-bakery/inventory-expiry.svg", alt: "Bakery inventory and ingredient expiry screen" },
      { url: "/grandmas-bakery/recipes.svg", alt: "Bakery recipe and ingredient cost screen" },
      { url: "/grandmas-bakery/flavour-week.svg", alt: "Bakery flavour of the week concept" },
      { url: "/grandmas-bakery/sales-and-votes.svg", alt: "Bakery sales and flavour voting screen" },
    ],
    color: "bg-[#fff5e7]",
    link: "https://aasahi1.github.io/Ingredient-Cost-Tracking-Interface/#main",
    linkText: "Open live prototype",
  },
]

export const PROJECTS: Project[] = PROJECT_CATALOG.filter((project) => !["habitat", "grandmas-bakery"].includes(project.id))

// Order the full case-study set by the portfolio's current storytelling priority.
export const FEATURED_PROJECTS = ["icmms", "co-connect", "lurn"].flatMap((id) =>
  PROJECTS.filter((project) => project.id === id),
)
