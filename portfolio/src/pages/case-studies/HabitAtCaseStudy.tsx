import { StandardCaseStudy, type StudyData } from "@/components/case-studies/StandardCaseStudy"

const data: StudyData = {
  id: "habitat", index: "04", title: "HabitAt", eyebrow: "Shared home · Design sprint concept", year: "Design sprint; exact dates and length not recorded",
  intro: "A shared household task concept that organizes chores by room and explores rewards for making progress visible.",
  images: [
    { src: "/habitat/house-view.png", alt: "HabitAt shared home dashboard with room-based household tasks", caption: "Concept interface; not a released household app." },
    { src: "/habitat/onboarding.png", alt: "HabitAt onboarding screen", caption: "Proposed onboarding experience." },
  ],
  liveUrl: "https://www.figma.com/proto/OzjSJONNdMT7Sedl1mhm1e/Design-Sprint?node-id=28-1490&p=f&viewport=279%2C200%2C0.1&t=S7T1N3xZSezhDTt3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A1210&show-proto-sidebar=1&page-id=0%3A1",
  overview: [
    { label: "Team", value: "Design sprint team; collaborators and individual role split are not recorded." },
    { label: "Timeline", value: "Design sprint; exact dates and length need confirmation." },
    { label: "Constraints", value: "No household research or usability results are included. Setup and rewards should not add friction to the task flow." },
    { label: "My role", value: "UX researcher and product designer; concept, mobile tasks, room model, and reward experience." },
  ],
  sections: [
    { text: "HabitAt is a design-sprint concept for coordinating shared household chores through room-based tasks, points, and a customizable virtual home.", evidence: "documented" },
    { text: "The room-based home and onboarding screens introduce the core concept. The rewards shop and friend map are additional proposed experiences." },
    { text: "The project framing considers how household members might notice, coordinate, and finish routine chores together. This need is not supported by documented household interviews.", evidence: "hypothesis" },
    { text: "The project record identifies my role and the sprint outcome. Team names and exact dates are not listed." },
    { text: "A flat list may make it difficult to see where a task belongs or whether someone has handled it. HabitAt explores room context and visible shared progress as a possible response.", evidence: "hypothesis" },
    { text: "The available portfolio contains interface screens and a prototype, but no early sketches or wireframes. Add the first concepts and explain their evolution if available.", evidence: "verify" },
    { text: "The design challenge was keeping household tasks quick to find and complete while exploring points, furniture rewards, and a social layer without making chores feel competitive." },
    { text: "The project materials do not document a competitor review or visual inspiration. Add references and describe how they shaped the design if that work was done.", evidence: "verify" },
    { text: "Although my role is recorded as UX researcher, research methods, participant details, and findings are not included. Framing questions include: How do people coordinate chores? Which task view feels easiest to scan? These are not confirmed as asked research questions.", evidence: "verify" },
    { text: "No user persona or validated household profile is included. Framing questions: Who shares the home? What household task do they need to coordinate? What frustrates them? What prevents them from completing or claiming a task? Add documented goals, routines, and behaviors if a persona was created; these questions are not research findings.", evidence: "verify" },
    { text: "No research findings are documented, so a research-to-design link cannot be established from the available record. Room grouping and rewards remain concept hypotheses.", evidence: "verify" },
    { text: "The concept organizes chores by room, connects completion to points and furniture, and includes a friend map. These choices explore household context and motivation; their usefulness and comfort were not evaluated.", cards: [{ title: "Start with task context", text: "Rooms connect task visibility to places in the home." }, { title: "Keep motivation in support", text: "Rewards and social encouragement should not obstruct the practical task." }], images: [{ src: "/habitat/house-view.png", alt: "HabitAt room-based task dashboard", caption: "Room grouping is the core task-visibility direction." }, { src: "/habitat/shop-view.png", alt: "HabitAt furniture rewards shop", caption: "Points connect completed chores with home customization." }] },
    { text: "No usability sessions, participants, tasks, or findings are documented. Product usability and reward preferences remain untested.", evidence: "verify" },
    { text: "A distinct challenge is deciding whether social visibility should encourage participation or create privacy concerns and unwanted comparison. The concept includes a friend map, but privacy controls and user comfort are not documented.", evidence: "hypothesis" },
    { text: "The work was completed with a sprint team, but developer involvement, implementation specifications, responsive behavior, and formal handoff are not recorded.", evidence: "verify" },
    { text: "The project record does not include a personal reflection. Add what I learned about shared household coordination and what I would revise after observing households use the concept.", evidence: "verify" },
  ],
}

export function HabitAtCaseStudy() { return <StandardCaseStudy data={data} /> }
