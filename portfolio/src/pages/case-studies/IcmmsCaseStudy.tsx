import { StandardCaseStudy, type StudyData } from "@/components/case-studies/StandardCaseStudy"

const data: StudyData = {
  id: "icmms", index: "01", title: "ICMMS", eyebrow: "Enterprise operations · Marketing website", year: "Alectify co-op term (dates to confirm)",
  intro: "A public-facing website that helps businesses understand ICMMS maintenance and asset-management software and decide what to explore next.",
  images: [
    { src: "/icmms/landing-page.svg", alt: "ICMMS marketing website landing page" },
    { src: "/icmms/maintenance-page.svg", alt: "ICMMS maintenance product page" },
  ], liveUrl: "https://icmms.ai/dashboard",
  overview: [
    { label: "Team", value: "Me as website designer and builder; two backend engineers are listed in the project record. Names and work split are not recorded." },
    { label: "Timeline", value: "Alectify co-op term; exact dates and duration need confirmation." },
    { label: "Constraints", value: "The authenticated product is covered by an NDA. Public case-study material is limited to marketing pages and approved information." },
    { label: "My role", value: "Lead website designer and builder; information architecture, responsive layouts, visual direction, interactions, and copy." },
  ],
  sections: [
    { text: "ICMMS is an enterprise operations platform. During my Alectify co-op, I designed and built its public marketing website to make the product easier to understand before a sales conversation.", evidence: "documented" },
    { text: "The supplied landing and maintenance pages are the clearest public-facing examples. They are original project exports; no replacement or fabricated screens are used." },
    { text: "The platform supports maintenance and asset-management work. The website introduces its capabilities, applications, sustainability story, and pricing for prospective business customers.", evidence: "documented" },
    { text: "Project, role, and team details are recorded in the portfolio. Exact co-op dates and collaborator names are not available." },
    { text: "A technically dense product can be difficult for a first-time visitor to understand. The website needed to communicate value and help visitors find relevant detail without exposing confidential workflows or overwhelming them.", evidence: "hypothesis" },
    { text: "The repository contains page exports and a generalized process graphic, but no original wireframes or sketches. Add an early artifact and explain what changed if one is available.", evidence: "verify" },
    { text: "The challenge was balancing enough product detail for business evaluation with a clear, approachable story. Responsive layouts also needed to preserve hierarchy across screen sizes." },
    { text: "The available record documents page design work, not competitor studies or a formal visual-inspiration review. Add sources and explain their influence if documented." , evidence: "verify" },
    { text: "No interviews, surveys, or usability research records are included. Research questions used to frame the work can be added here; none are documented as questions asked to participants.", evidence: "verify" },
    { text: "No research-based persona is recorded. A prospective business evaluator is the audience implied by the marketing site, not a validated persona. Framing questions: Who evaluates the product? What must they understand or accomplish? What frustrates them? What prevents them from moving forward? Add the source persona and evidence if one was created.", evidence: "verify" },
    { text: "No documented research findings or validated design changes are available. The page structure connects the product introduction to focused capability and pricing pages; the impact of that structure was not measured.", evidence: "hypothesis" },
    { text: "The supplied page set shows a product-led landing page alongside dedicated maintenance, sustainability, and pricing pages. This separates different evaluation topics; the original decision record is not available.", cards: [{ title: "Lead with the product", text: "Introduce the product before asking visitors to compare features." }, { title: "Give detail its own space", text: "Use focused pages for distinct product and evaluation questions." }], images: [{ src: "/icmms/pricing-page.svg", alt: "ICMMS pricing page design export", caption: "A dedicated pricing page supports product evaluation; its effect was not tested." }] },
    { text: "No usability testing method, participant details, tasks, or results are documented. Testing results are unavailable in the current project record.", evidence: "verify" },
    { text: "A second distinct challenge is working within confidentiality limits while still showing meaningful design work. The public marketing experience can be shared; authenticated platform screens and private metrics cannot.", evidence: "documented" },
    { text: "The project record describes me as both designer and builder and lists two backend engineers. It does not document handoff materials, developer feedback, component specifications, or the engineers' implementation scope.", evidence: "verify" },
    { text: "The portfolio record contains no personal retrospective. Add what I learned from designing for a complex product and what I would change after observing prospective customers use the site.", evidence: "verify" },
  ],
}

export function IcmmsCaseStudy() { return <StandardCaseStudy data={data} /> }
