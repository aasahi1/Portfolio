import { ArrowRight, ExternalLink } from "lucide-react"
import { CaseStudyAnchorNav, CaseStudyFrame } from "@/components/case-studies/CaseStudyPrimitives"
import "./CoConnectCaseStudy.css"

const prototypeUrl = "https://aasahi1.github.io/Co-Connect-front-end-prototype/"
const asset = "/co-connect/case-study/"

const sections = [
  { href: "study-1", label: "Challenge & research" },
  { href: "study-2", label: "Three-week process" },
  { href: "study-3", label: "Concept development" },
  { href: "study-4", label: "Design decisions" },
  { href: "study-5", label: "Prototype & outcome" },
]

const weeks = [
  {
    week: "Week 1",
    title: "Research & ideation",
    text: "Interview advisors, current clients, and prospective clients; explore ways to make advisor discovery easier to approach.",
    phases: ["Initial research", "Ideation"],
  },
  {
    week: "Week 2",
    title: "Structure & iteration",
    text: "Map the experience from invitation to recommendations, then refine the low-fidelity flow and screen structure.",
    phases: ["App structure", "Lo-fi testing & revision"],
  },
  {
    week: "Week 3",
    title: "Prototype & pitch",
    text: "Bring the selected direction into a final-fidelity prototype and prepare the concept for the judging panel.",
    phases: ["Delivery", "Final presentation"],
  },
]

const decisions = [
  {
    title: "Start with a trusted introduction",
    text: "An existing client can share a referral, giving someone a familiar way into the experience. The invitation explains what the referral does and leaves the next step to the recipient.",
    image: "co-connect-referrals.jpg",
    alt: "Co-Connect referral page with an introduction and options to preview or copy a demo link",
  },
  {
    title: "Ask about priorities before showing advisors",
    text: "A short questionnaire gives people a guided way to share their goals, circumstances, and preferences without needing to know what kind of advisor to search for.",
    image: "co-connect-review-answers.jpg",
    alt: "Co-Connect questionnaire review screen summarizing a person's goals and preferences",
  },
  {
    title: "Make recommendations easier to compare",
    text: "Advisor recommendations include context about experience, communication, and meeting preferences. People can review the options and decide whether to continue.",
    image: "co-connect-match-results.jpg",
    alt: "Co-Connect advisor recommendation page with match details and comparison controls",
  },
]

function StoryImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img className={`cc-image ${className}`} src={`${asset}${src}`} alt={alt} loading="lazy" />
}

export function CoConnectCaseStudy() {
  return (
    <CaseStudyFrame id="co-connect">
      <div className="cc-case-study">
        <header className="cc-hero">
          <div className="cc-hero-copy">
            <p className="cc-eyebrow">Co-operators uXperience Design Jam | Spring 2025</p>
            <h1>Co-Connect</h1>
            <p className="cc-hero-title">Making financial guidance feel more personal.</p>
            <p className="cc-lede">A referral-based advisor discovery concept that pairs a thoughtful introduction with a short goals questionnaire and recommendations people can explore at their own pace.</p>
            <a className="cc-prototype-link" href={prototypeUrl} target="_blank" rel="noreferrer">
              Explore the working prototype <ExternalLink size={15} aria-hidden="true" />
            </a>
            <dl className="cc-meta">
              <div><dt>My role</dt><dd>User research, UX design, pitch presenter</dd></div>
              <div><dt>Team</dt><dd>4 people | 2 UX, 2 graphic designers</dd></div>
              <div><dt>Timeline</dt><dd>3 weeks</dd></div>
              <div><dt>Result</dt><dd>2nd place | 30 teams</dd></div>
            </dl>
          </div>
          <div className="cc-hero-visual">
            <StoryImage src="co-connect-landing.jpg" alt="Co-Connect landing page introducing financial guidance and advisor matching" className="cc-hero-shot" />
          </div>
        </header>

        <CaseStudyAnchorNav items={sections} />

        <section className="cc-section cc-context" id="study-1" aria-labelledby="cc-context-title">
          <div className="cc-section-heading">
            <p className="cc-eyebrow">The challenge</p>
            <h2 id="cc-context-title">Make the first step toward financial guidance feel easier.</h2>
            <p>Co-operators wanted to explore ways to reach new clients without a large acquisition budget. For prospective clients, finding an advisor can feel intimidating when they are unsure what kind of help they need or how to evaluate their options.</p>
          </div>
          <div className="cc-research">
            <div className="cc-research-copy">
              <h3>Research the relationship, not just the search.</h3>
              <p>I interviewed people on both sides of the advisor relationship to understand how someone finds guidance, what helps them feel confident, and whether a trusted introduction could make reaching out feel more approachable.</p>
              <ul className="cc-participants" aria-label="Research participants">
                <li><strong>3</strong><span>financial advisors</span></li>
                <li><strong>10</strong><span>current clients</span></li>
                <li><strong>19</strong><span>prospective clients</span></li>
              </ul>
              <p className="cc-small-note">Participants were recruited through Co-operators mentors, personal networks, and survey responses.</p>
            </div>
            <StoryImage src="co-connect-team-workshop.jpg" alt="Design jam participants working together around tables during a workshop" className="cc-research-photo" />
          </div>
          <div className="cc-question-row">
            <span>Research focus</span>
            <p>How do people choose an advisor? What information builds confidence? What makes financial guidance feel intimidating? Could a referral make it easier to begin?</p>
          </div>
        </section>

        <section className="cc-section cc-timeline-section" id="study-2" aria-labelledby="cc-timeline-title">
          <div className="cc-section-heading">
            <p className="cc-eyebrow">Three-week process</p>
            <h2 id="cc-timeline-title">From discovery to a pitch-ready prototype.</h2>
            <p>The three-week Design Jam moved from research and idea selection to an iterated prototype and final pitch.</p>
          </div>
          <ol className="cc-timeline">
            {weeks.map((item) => (
              <li className="cc-week" key={item.week}>
                <span className="cc-week-label">{item.week}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>{item.phases.map((phase) => <li key={phase}>{phase}</li>)}</ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="cc-section cc-concept-section" id="study-3" aria-labelledby="cc-concept-title">
          <div className="cc-section-heading">
            <p className="cc-eyebrow">Concept development</p>
            <h2 id="cc-concept-title">Connect a referral to a useful next step.</h2>
            <p>We explored AI agents, gamification, and referrals. The team chose a referral-based experience that continues beyond the invitation, with a FutureYou Box prize draw tailored to the recipient's financial goals.</p>
          </div>
          <div className="cc-concept-layout">
            <div className="cc-concept-options" aria-label="Concept directions explored">
              <div><span>Explored</span><strong>AI agents</strong></div>
              <div><span>Explored</span><strong>Gamification</strong></div>
              <div className="cc-selected-option"><span>Selected direction</span><strong>Referrals with guided discovery</strong></div>
            </div>
            <StoryImage src="co-connect-how-it-works.jpg" alt="Co-Connect feature page showing four ways the service can support clients" className="cc-concept-image" />
          </div>
          <div className="cc-concept-statement">
            <span>The concept</span>
            <p>A client shares an invitation. The recipient chooses what to share, answers questions about their priorities, and explores advisor matches before deciding whether to connect.</p>
          </div>
        </section>

        <section className="cc-section cc-decisions-section" id="study-4" aria-labelledby="cc-decisions-title">
          <div className="cc-section-heading">
            <p className="cc-eyebrow">Key design decisions</p>
            <h2 id="cc-decisions-title">Give people context and control at each decision.</h2>
            <p>Three choices shaped the core experience: make the referral transparent, make the questions approachable, and make the recommendations understandable.</p>
          </div>
          <div className="cc-decisions">
            {decisions.map((decision) => (
              <article className="cc-decision" key={decision.title}>
                <div className="cc-decision-copy">
                  <span className="cc-decision-mark" aria-hidden="true" />
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </div>
                <StoryImage src={decision.image} alt={decision.alt} className="cc-decision-image" />
              </article>
            ))}
          </div>
        </section>

        <section className="cc-section cc-prototype-section" id="study-5" aria-labelledby="cc-prototype-title">
          <div className="cc-section-heading">
            <p className="cc-eyebrow">Prototype & outcome</p>
            <h2 id="cc-prototype-title">A connected concept, ready to explore.</h2>
            <p>The prototype brings the landing page, referral, questionnaire, and advisor recommendations into one experience. It demonstrates the proposed flow; the matching rules and usability outcomes were not formally validated in the project record.</p>
            <a className="cc-prototype-link" href={prototypeUrl} target="_blank" rel="noreferrer">Open the prototype <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="cc-prototype-gallery">
            <StoryImage src="co-connect-feature-overview.jpg" alt="Co-Connect page introducing the product’s main guidance features" />
          </div>
          <div className="cc-outcome">
            <div className="cc-result">
              <p className="cc-eyebrow">Design Jam outcome</p>
              <strong>2<sup>nd</sup></strong>
              <span>place among 30 teams</span>
              <p>Our four-person team presented to five Co-operators executives. The work was evaluated on design, presentation, and implementation.</p>
            </div>
            <div className="cc-outcome-photos">
              <StoryImage src="co-connect-event-team.jpg" alt="Design Jam participants gathered together after the event" />
              <StoryImage src="co-connect-mentor-team.jpg" alt="Project team and mentors together at the design event" />
            </div>
          </div>
          <div className="cc-reflection">
            <h3>What I'd explore next</h3>
            <p>I would test whether people understand why an advisor appears, whether the comparison gives enough context, and what they expect to happen after requesting an introduction. I would also examine the feasibility and clarity of the referral incentive.</p>
          </div>
        </section>
      </div>
    </CaseStudyFrame>
  )
}
