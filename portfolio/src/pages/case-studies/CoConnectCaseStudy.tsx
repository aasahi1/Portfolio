import { StandardCaseStudy, type StudyData } from "@/components/case-studies/StandardCaseStudy"

const data: StudyData = {
  id: "co-connect", index: "02", title: "Co-Connect", eyebrow: "Financial services · Design jam concept", year: "Spring 2025 · Three weeks",
  intro: "A referral and advisor-discovery concept that connects a short goals questionnaire with advisor recommendations and a clear next step.",
  images: [
    { src: "/co-connect/matching-quiz.svg", alt: "Co-Connect questionnaire about goals and financial advice preferences", caption: "Questionnaire screen from the design-jam concept." },
    { src: "/co-connect/match-results.svg", alt: "Co-Connect advisor recommendation results", caption: "Advisor recommendation screen from the concept." },
  ], liveUrl: "https://aasahi1.github.io/Co-Connect-front-end-prototype/#/future",
  overview: [
    { label: "Team", value: "Two UX designers and two graphic designers; project materials also list content, research, and design responsibilities across teammates." },
    { label: "Timeline", value: "Three weeks; Spring 2025 Co-operators uXperience Design Jam." },
    { label: "Constraints", value: "Three-week design jam. Research methods, testing details, and measured outcomes are not documented." },
    { label: "My role", value: "UX flows, concept development, go-to-market thinking, and final pitch." },
  ],
  sections: [
    { text: "Co-Connect explores a referral-based way for people to discover financial advisors through a short questionnaire about goals and preferences.", evidence: "documented" },
    { text: "The questionnaire and advisor results show the proposed experience. The referral and landing screens are also available in the project materials." },
    { text: "The concept was developed for the Spring 2025 Co-operators uXperience Design Jam. A current client could share an invitation; the recipient could learn about the service, answer questions, and decide whether to explore advisor options.", evidence: "documented" },
    { text: "The team, three-week duration, design-jam context, and my recorded responsibilities are included in the project materials. Detailed timeline milestones are not recorded." },
    { text: "Finding a financial advisor can involve personal information and important decisions. The project framing identified word of mouth as a trusted way to begin exploring guidance; supporting study data is not available.", evidence: "hypothesis" },
    { text: "The materials include a flow diagram but no initial wireframe set. The diagram captures the proposed referral, questionnaire, and advisor journey; it is not an early screen sketch. Add an initial wireframe or before-and-after comparison if available.", images: [{ src: "/co-connect/flow.svg", alt: "Co-Connect flow from referral to questionnaire, advisor match, and follow-up", caption: "Existing journey flow; the portfolio does not include the original screen wireframes." }], evidence: "verify" },
    { text: "The design challenge was making a personal referral useful without adding pressure, and gathering enough information for recommendations while keeping the recipient in control of what to share." },
    { text: "Project artifacts include the referral flow and interface screens. The record does not identify competitor examples or visual references; add them and describe their influence if they were used.", evidence: "verify" },
    { text: "The project summary mentions word of mouth but does not document how research was conducted, who participated, or what findings emerged. Framing questions include: What makes an invitation feel trustworthy? What information helps someone explore an advisor? These are not established as questions asked in sessions.", evidence: "verify" },
    { text: "No persona is documented in the available project material. The concept considers a prospective client receiving a referral, but this is a design scenario, not a validated research persona. Framing questions: Who receives the invitation? What do they need to understand or accomplish? What makes them hesitant? What barriers prevent them from exploring an advisor? Add any evidence-based goals and motivations if available.", evidence: "verify" },
    { text: "The project framing suggests referrals may feel familiar, but no research findings are available to connect that insight to a design change. The invitation-to-questionnaire flow is the concept response to explore, not a validated result.", evidence: "hypothesis" },
    { text: "The team explored a short questionnaire before advisor recommendations, profile details for comparison, and a recipient-controlled next step. The concept also included a FutureYou Box prize draw. These decisions need research and usability validation.", cards: [{ title: "Explain the recommendation", text: "Give people enough context to understand why advisors appear and compare options." }, { title: "Keep the invitation low pressure", text: "Explain who sent it, what information is shared, and how the recipient can decline." }], images: [{ src: "/co-connect/match-results.svg", alt: "Co-Connect advisor recommendation screen", caption: "Advisor options are presented after the goals and preferences questionnaire." }] },
    { text: "No documented usability sessions, participant tasks, findings, or measurable outcomes are available. Usability results are unavailable; the prototype did not have recorded validation in the project materials.", evidence: "verify" },
    { text: "A second challenge was explaining what happens after someone selects an advisor: what information is shared and what commitment follows. The prototype links recommendations to a next step, but those expectations were not documented as tested.", evidence: "hypothesis" },
    { text: "The team developed the concept and pitch together. Project materials describe shared responsibilities across content, research, and design; formal developer collaboration, technical specifications, and implementation handoff are not recorded.", evidence: "verify" },
    { text: "The team placed second at the Spring 2025 Design Jam. My reflection is to explain each advisor match and show what information reaches an advisor before a person continues; that would be a direction to test, not a result from research.", evidence: "documented" },
  ],
}

export function CoConnectCaseStudy() { return <StandardCaseStudy data={data} /> }
