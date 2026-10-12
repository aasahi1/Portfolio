import { ArrowRight, ExternalLink } from "lucide-react"
import { CaseStudyAnchorNav, CaseStudyFrame } from "@/components/case-studies/CaseStudyPrimitives"
import "./LurnCaseStudy.css"

const asset = "/lurn/"

const sections = [
  { href: "lurn-context", label: "Challenge & learner" },
  { href: "lurn-concept", label: "Concept & flows" },
  { href: "lurn-decisions", label: "Design decisions" },
  { href: "lurn-outcome", label: "Outcome & reflection" },
]

const decisions = [
  {
    title: "Make the next step clear",
    text: "The concept organizes longer assignments into shorter activities. Students can focus on one step and see how it fits into the larger task.",
    image: "activity-interruption.svg",
    alt: "Lurn activity interface concept showing a student activity",
  },
  {
    title: "Let students shape how they learn",
    text: "The onboarding and customization concepts offer ways to make learning feel more relevant. Preferences should remain flexible, rather than becoming fixed labels for a learner.",
    image: "profile-customization.svg",
    alt: "Lurn student profile customization concept",
  },
  {
    title: "Connect the student and teacher experience",
    text: "The student and teacher journeys belong to one learning experience: students work through activities while teachers organize and deliver them.",
    image: "teacher-flow.png",
    alt: "Lurn teacher flow showing the proposed assignment and classroom journey",
  },
]

function StoryImage({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <img className={`lurn-image ${className}`} src={`${asset}${src}`} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} />
}

export function LurnCaseStudy() {
  return (
    <CaseStudyFrame id="lurn">
      <div className="lurn-case-study">
        <header className="lurn-hero">
          <div className="lurn-hero-copy">
            <p className="lurn-eyebrow">Inclusive learning · UX/UI Designathon</p>
            <h1>Lurn</h1>
            <p className="lurn-hero-title">Making learning feel more manageable.</p>
            <p className="lurn-lede">An inclusive learning concept that makes assignments more accessible, engaging, and easier to approach for students with diverse learning needs.</p>
            <dl className="lurn-meta">
              <div><dt>Role</dt><dd>Lead designer</dd></div>
              <div><dt>Project type</dt><dd>UX/UI Designathon</dd></div>
              <div><dt>Timeline</dt><dd>6 hours</dd></div>
              <div><dt>Team</dt><dd>1 researcher, 1 graphic designer, 2 ux designers</dd></div>
            </dl>
          </div>
          <figure className="lurn-hero-visual">
            <StoryImage src="Assets.png" alt="Lurn teacher classroom dashboard showing weekly activity and subject choices" eager />
          </figure>
        </header>

        <CaseStudyAnchorNav items={sections} />

        <section className="lurn-section" id="lurn-context" aria-labelledby="lurn-context-title">
          <div className="lurn-section-heading">
            <p className="lurn-eyebrow">The challenge</p>
            <h2 id="lurn-context-title">Help students find a place to begin.</h2>
            <p>Long instructions and complex assignments can feel overwhelming when a student is managing focus, planning, or different learning formats. Lurn explores breaking work into smaller, structured activities while giving teachers a way to organize learning.</p>
          </div>

          <div className="lurn-research">
            <div className="lurn-research-copy">
              <p className="lurn-eyebrow">Broader research context</p>
              <h3>Inclusive learning calls for flexibility and support.</h3>
              <p>These public sources frame the design challenge. They are broader context, not research conducted for Lurn.</p>
            </div>
            <div className="lurn-source-list">
              <a href="https://www.ohrc.on.ca/en/main-barriers-education-students-disabilities-fact-sheet" target="_blank" rel="noreferrer"><strong>Ontario Human Rights Commission</strong><span>Barriers to accessible education include delays in accommodation and access to support.</span><ExternalLink size={15} aria-hidden="true" /></a>
              <a href="https://www.cdc.gov/child-development/about/developmental-disability-basics.html" target="_blank" rel="noreferrer"><strong>U.S. Centers for Disease Control and Prevention</strong><span>CDC estimates about 1 in 6 U.S. children ages 3–17 have one or more developmental disabilities. This is general context, not a Lurn finding.</span><ExternalLink size={15} aria-hidden="true" /></a>
            </div>
          </div>

          <article className="lurn-persona">
            <div className="lurn-persona-profile">
              <p className="lurn-eyebrow">Design persona</p>
              <h3>Ginny Martin</h3>
              <p>Age 9 · Grade 4 · Calgary, Canada</p>
            </div>
            <div className="lurn-persona-details">
              <p>Ginny has ADHD and can find it hard to stay focused on long assignments, especially when distractions arise. Her scenario helped keep the concept grounded in clear, manageable work.</p>
              <p><strong>Goals</strong>Complete assignments without feeling overwhelmed; learn in short steps; stay motivated through games and personalization.</p>
              <p><strong>Needs</strong>Clear instructions, achievable steps, text and audio options, and an engaging experience that supports focus.</p>
            </div>
          </article>
        </section>

        <section className="lurn-section" id="lurn-concept" aria-labelledby="lurn-concept-title">
          <div className="lurn-section-heading">
            <p className="lurn-eyebrow">Concept & flows</p>
            <h2 id="lurn-concept-title">Make the next step clear and achievable.</h2>
            <p>The student journey moves from an assignment into shorter activities and visible progress. The teacher journey supports organizing and delivering those activities.</p>
          </div>
          <div className="lurn-journey" aria-label="Assignment to activity to progress concept">
            <strong>Assignment</strong><ArrowRight aria-hidden="true" /><strong>Short activities</strong><ArrowRight aria-hidden="true" /><strong>Visible progress</strong>
          </div>
          <div className="lurn-flow-visuals">
            <figure><StoryImage src="student-flow-map.svg" alt="Lurn student flow diagram showing the proposed student learning path" /></figure>
            <figure><StoryImage src="teacher-flow-map.svg" alt="Lurn teacher flow diagram showing the proposed classroom and assignment path" /></figure>
          </div>
        </section>

        <section className="lurn-section" id="lurn-decisions" aria-labelledby="lurn-decisions-title">
          <div className="lurn-section-heading">
            <p className="lurn-eyebrow">Key design decisions</p>
            <h2 id="lurn-decisions-title">Support focus, choice, and teaching.</h2>
          </div>
          <div className="lurn-decisions">
            {decisions.map((decision) => (
              <article className="lurn-decision" key={decision.title}>
                <div className="lurn-decision-copy"><span className="lurn-decision-mark" aria-hidden="true" /><h3>{decision.title}</h3><p>{decision.text}</p></div>
                <StoryImage src={decision.image} alt={decision.alt} className="lurn-decision-image" />
              </article>
            ))}
          </div>
        </section>

        <section className="lurn-section lurn-outcome-section" id="lurn-outcome" aria-labelledby="lurn-outcome-title">
          <div className="lurn-section-heading">
            <p className="lurn-eyebrow">Outcome & reflection</p>
            <h2 id="lurn-outcome-title">A six-hour concept for more approachable learning.</h2>
            <p>The designathon brought assignment breakdown, student engagement, and teacher workflows into one concept. The project materials do not document user testing or measured learning outcomes.</p>
          </div>
          <div className="lurn-identity" aria-label="Lurn visual identity colors"><span className="lurn-swatch" data-color="lavender">Lavender <code>#CFA4CC</code></span><span className="lurn-swatch" data-color="blue">Baby blue <code>#9FC4E8</code></span><span className="lurn-swatch" data-color="poppy">Poppy <code>#EE5A36</code></span><span className="lurn-swatch" data-color="green">Forest green <code>#1A9562</code></span><span className="lurn-swatch" data-color="yellow">Golden yellow <code>#FCCA59</code></span></div>
          <div className="lurn-showcase">
            <figure><StoryImage src="student-dashboard.png" alt="Lurn student dashboard concept with weekly progress and subject choices" /></figure>
            <figure><StoryImage src="iPhone 16 - 1.jpg" alt="Lurn mobile student dashboard with weekly activities and subject cards" /></figure>
            <figure><StoryImage src="teacher-interface.svg" alt="Lurn teacher interface concept showing the classroom dashboard" /></figure>
          </div>
          <div className="lurn-reflection"><h3>Next steps</h3><p>I would test both workflows with students and teachers, then use their feedback to refine the activity structure and accessibility options.</p></div>
        </section>
      </div>
    </CaseStudyFrame>
  )
}
