import { StandardCaseStudy, type StudyData } from "@/components/case-studies/StandardCaseStudy"

const data: StudyData = {
  id: "lurn", index: "03", title: "Lurn", eyebrow: "Inclusive learning · Product concept", year: "Dates and duration need confirmation",
  intro: "An inclusive homework concept that gives students clear next steps and helps teachers see where support may be useful.",
  images: [
    { src: "/lurn/student-dashboard.png", alt: "Lurn student dashboard with weekly progress and subject choices", caption: "Student interface concept; not evidence of classroom use." },
    { src: "/lurn/mobile-dashboard.png", alt: "Lurn mobile student dashboard", caption: "Mobile student interface concept." },
  ],
  overview: [
    { label: "Team", value: "Collaborators and role split are not recorded." },
    { label: "Timeline", value: "Existing portfolio records differ; confirm the dates and duration." },
    { label: "Constraints", value: "Student and teacher needs vary. No classroom validation, accessibility evaluation, or implementation record is available." },
    { label: "My role", value: "End-to-end product designer; learner framing, flows, interface design, and prototyping." },
  ],
  sections: [
    { text: "Lurn explores a homework experience for students and teachers. The concept combines manageable learning activities with a teacher view of progress and submitted work.", evidence: "documented" },
    { text: "The student dashboard and mobile screen show the proposed student experience. A teacher-flow diagram exists, but a teacher dashboard screenshot is not included." },
    { text: "The concept responds to a learner scenario: a Grade 4 student named Ginny prefers text or audio and benefits from short activities. The portfolio does not identify the source of that scenario.", evidence: "hypothesis" },
    { text: "The existing record lists the role and design artifacts, but not collaborators, exact dates, or a reliable duration." },
    { text: "Students may need approachable instructions and manageable activities; teachers may need useful context for deciding when to help. These needs are design hypotheses, not measured findings.", evidence: "hypothesis" },
    { text: "The project record includes student and teacher flow diagrams, but no early screen wireframes or sketches. These flows show the proposed paths, not a before-and-after iteration. Add original sketches and describe what changed if they are available.", images: [{ src: "/lurn/student-flow-map.svg", alt: "Lurn student flow map", caption: "Existing student journey diagram." }, { src: "/lurn/teacher-flow-map.svg", alt: "Lurn teacher flow map", caption: "Existing teacher journey diagram; no teacher dashboard screenshot is recorded." }], evidence: "verify" },
    { text: "The challenge was supporting different ways to engage with learning without reducing a student to a fixed profile, while giving teachers context without replacing their judgment." },
    { text: "The project portfolio does not include competitor research or documented visual references. Add the source material and the specific patterns that informed the interface if available.", evidence: "verify" },
    { text: "No research sessions, participant details, or findings are documented. Framing questions include: How do students understand the next step? What context helps teachers decide when to follow up? These are not recorded as questions asked in research.", evidence: "verify" },
    { text: "The portfolio describes Ginny as a Grade 4 learner scenario who prefers text or audio and benefits from short activities. It is not documented as a research participant or representative persona. Framing questions: Who are we designing for? What does this learner need to do? What frustrates them? What barriers get in the way? Add the scenario source and any documented goals or behaviors.", evidence: "verify" },
    { text: "No research findings are recorded. The scenario suggests adjustable text/audio supports and manageable activities; whether these choices meet students' needs remains to be tested.", evidence: "hypothesis" },
    { text: "The student interface presents weekly work and subject choices. The learning-preference onboarding and teacher flow explore ways to support student choice and teacher follow-up. These are concept directions, not tested decisions.", cards: [{ title: "Keep supports adjustable", text: "Preferences such as text or audio should remain changeable rather than defining a fixed learning identity." }, { title: "Treat teacher signals as prompts", text: "Progress information should support teacher judgment, not act as a diagnosis." }], images: [{ src: "/lurn/learning-style-quiz.png", alt: "Lurn learning preference onboarding screen", caption: "The existing screen depicts a learning-style check; a next iteration could allow students to revise preferences." }, { src: "/lurn/teacher-flow.png", alt: "Lurn teacher workflow diagram", caption: "Proposed review and feedback flow, not a teacher dashboard or validated workflow." }] },
    { text: "Usability testing and accessibility evaluation are not documented. There are no participant tasks, findings, or measured outcomes in the project record.", evidence: "verify" },
    { text: "A second challenge is balancing a teacher overview with the risk of treating time spent, completion, or automated suggestions as a complete measure of learning. No final resolution is validated in the available artifacts.", evidence: "hypothesis" },
    { text: "The portfolio describes end-to-end design and prototyping, but no developer collaboration, implementation specifications, or formal handoff is recorded.", evidence: "verify" },
    { text: "A personal retrospective is not included. Add what I learned about inclusive learning design and what I would change after testing with students and teachers in an appropriately supported setting.", evidence: "verify" },
  ],
}

export function LurnCaseStudy() { return <StandardCaseStudy data={data} /> }
