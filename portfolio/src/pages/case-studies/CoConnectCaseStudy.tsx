import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { CaseStudyImage } from "@/components/case-studies/CaseStudyPrimitives"
import { CoConnectJourney, CoConnectValidation, CoConnectWireframes } from "@/components/case-studies/CoConnectArtifacts"
import { CoConnectLocalEditor } from "@/components/local-editor/CoConnectLocalEditor"
import "./CoConnectCaseStudy.css"

const sections = [
  { href: "opportunity", label: "Opportunity & challenge" },
  { href: "solution", label: "The solution" },
  { href: "decisions", label: "Key design decisions" },
  { href: "contribution", label: "My contribution" },
  { href: "outcome", label: "Outcome and next steps" },
]

const relatedProjects = [
  { id: "icmms", title: "ICMMS" },
  { id: "lurn", title: "Lurn" },
  { id: "habitat", title: "HabitAt" },
  { id: "grandmas-bakery", title: "Grandma’s Bakery" },
]

export function CoConnectCaseStudy() {
  return (
    <CoConnectLocalEditor><article className="co-connect-page">
      <div className="co-connect-shell">
        <nav className="co-connect-breadcrumb" aria-label="Breadcrumb">
          <Link to="/projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
        </nav>

        <header className="co-connect-hero">
          <div className="co-connect-hero-copy">
            <p className="co-connect-eyebrow">Spring 2025 · Co-operators uXperience Design Jam</p>
            <h1>Co-Connect</h1>
            <p className="co-connect-intro">Co-Connect helps people explore financial advisors through a referral, a short goals questionnaire, and a clear next step.</p>
            <dl className="co-connect-meta">
              <Meta label="My role">UX flows, concept development, go-to-market thinking and pitch</Meta>
              <Meta label="Team">2 UX designers · 2 graphic designers</Meta>
              <Meta label="Timeline">3 weeks</Meta>
              <Meta label="Outcome">2nd place · Design Jam</Meta>
            </dl>
            <a className="co-connect-cta" href="https://aasahi1.github.io/Co-Connect-front-end-prototype/#/future" target="_blank" rel="noreferrer">
              Explore the prototype <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="co-connect-hero-visuals" aria-label="Co-Connect quiz, referral, and team visuals">
            <figure className="co-connect-hero-main">
              <img src="/co-connect/matching-quiz.svg" alt="Co-Connect questionnaire asking what would make financial advice feel comfortable" />
            </figure>
            <figure className="co-connect-hero-secondary">
              <img src="/co-connect/referral-page.svg" alt="Client-facing Co-Connect page for sharing a referral" />
              <img src="/competition/co-connect-workshop.jpg" alt="The Co-Connect team working together during the Design Jam" />
            </figure>
          </div>
        </header>

        <nav className="co-connect-section-nav" aria-label="On this page">
          {sections.map((section) => <a key={section.href} href={`#${section.href}`}>{section.label}</a>)}
        </nav>

        <Section id="opportunity" number="01" eyebrow="Opportunity & challenge" title="Why explore referrals for advisor discovery?" intro="Financial advice can involve personal information and important decisions. We explored whether a referral could make it easier to start looking for an advisor.">
          <div className="co-connect-context-copy">
            <div className="co-connect-context-cards">
              <article className="co-connect-card co-connect-card-yellow"><h3>Project material</h3><p>The project summary points to word of mouth as a trusted source for guidance. It does not include research methods, participant details, or supporting study data.</p></article>
              <article className="co-connect-card co-connect-card-paper"><h3>Opportunity</h3><p>Use a referral to introduce the service, then give each person control over what they share and whether they contact an advisor.</p></article>
            </div>
            <aside className="co-connect-tension"><span>Design question</span><p>How can a short questionnaire help people explore relevant advisors while keeping their choices and information in their hands?</p></aside>
          </div>
        </Section>

        <Section id="solution" number="02" eyebrow="The solution" title="From invitation to advisor recommendations." intro="A recipient opens a referral, learns about the service, answers questions about their goals and preferences, and reviews advisor options. They can then decide whether to continue.">
          <div className="co-connect-solution-content">
            <CoConnectJourney />
            <CoConnectWireframes />
            <div className="co-connect-high-fidelity">
              <div className="co-connect-artifact-heading"><div><p className="co-connect-eyebrow">Original prototype screens</p><h3>How the concept appeared in the prototype</h3></div><p>Screens from the supplied project materials.</p></div>
              <div className="co-connect-screen-gallery">
                <CaseStudyImage src="/co-connect/landing-page.svg" alt="Co-Connect landing page introducing advisor discovery" title="Introduce the service" caption="An overview explains the service and invites people to learn more." className="co-connect-gallery-image" />
                <CaseStudyImage src="/co-connect/matching-quiz.svg" alt="Co-Connect questionnaire about what makes financial advice feel comfortable" title="Answer a short questionnaire" caption="The questions gather preferences before advisor recommendations appear." className="co-connect-gallery-image" />
                <CaseStudyImage src="/co-connect/match-results.svg" alt="Co-Connect advisor recommendations with profile cards" title="Review potential matches" caption="Recommendation cards make advisor options available to explore." className="co-connect-gallery-image" />
                <CaseStudyImage src="/co-connect/referral-page.svg" alt="Client-facing Co-Connect page for sharing a referral" title="Share a referral" caption="The client-facing page lets an existing customer share Co-Connect with someone they know." className="co-connect-gallery-image" />
              </div>
            </div>
          </div>
        </Section>

        <Section id="decisions" number="03" eyebrow="Key design decisions" title="Four choices shaped the referral-to-advisor flow." intro="The prototype shows the direction we explored. I’ve added my own notes on the trade-offs and what I would test next; these were not validated in documented usability sessions.">
          <div className="co-connect-decisions">
            <Decision number="01" title="Ask a few questions before suggesting an advisor" problem="People may not know which advisor fits what they are looking for." choice="Ask about goals and preferences before showing recommendations." rationale="The answers give people a starting point and help connect their needs to advisor options." tradeoff="More questions may improve relevance, but they take time and ask for personal information." improve="Explain why each question is asked and let people skip or edit answers." image="/co-connect/matching-quiz.svg" imageAlt="Questionnaire screen used to ask about goals and preferences" imageCaption="The questionnaire asks what kind of guidance would feel comfortable." />
            <Decision number="02" title="Give people advisor profiles to compare" problem="A recommendation without an explanation may feel arbitrary." choice="Show advisor options with a route to profile details." rationale="People can review the advisors themselves instead of treating a suggestion as a final answer." tradeoff="More information helps comparison, but a suggested match should not imply a guaranteed fit." improve="Explain why each advisor appears and let people compare options on their own terms." image="/co-connect/match-results.svg" imageAlt="Advisor recommendation screen with multiple advisor cards" imageCaption="Advisor cards let people compare profiles before choosing a next step." />
            <Decision number="03" title="Make the referral easy to understand and decline" problem="A personal invitation may feel helpful, but it can also create pressure." choice="Let an existing client share an invitation and let the recipient choose whether to continue. The concept also included a FutureYou Box prize draw." rationale="The referral introduces the service before the recipient starts the questionnaire." tradeoff="A personal connection may affect how someone responds; the prize draw may also shape how they interpret the invitation." improve="Explain who sent it, what information is shared, the prize-draw terms, and how to decline." image="/co-connect/referral-page.svg" imageAlt="Client-facing Co-Connect page where an existing customer can share a referral" imageCaption="The client-facing page lets an existing customer share Co-Connect with someone they know." />
            <Decision number="04" title="Show what happens after a person picks an advisor" problem="After reviewing a match, people need to know what continuing involves." choice="Link recommendations to advisor details and a clear next step." rationale="Showing the handoff helps people decide whether they are ready to contact someone." tradeoff="The next step must match what advisors and the organization can actually support." improve="Preview what information is shared and what commitment comes next." image="/co-connect/match-results.svg" imageAlt="Advisor match results and selection options" imageCaption="The results screen links advisor options to the next step." />
          </div>
          <div className="co-connect-alt-approach"><div><p className="co-connect-eyebrow">Alternative to explore</p><h3>Browse advisors without a referral</h3></div><p>A directory would let people start exploring without sharing personal details or responding to an invitation. They would have more control over where to look, but more work to compare options. We would need to test which starting point feels clearer and more comfortable.</p></div>
        </Section>

        <Section id="contribution" number="04" eyebrow="My contribution & collaboration" title="My role covered UX flows, concept development, and the pitch." intro="I worked with the team to connect the referral, questionnaire, advisor options, and next step into one product story.">
          <div className="co-connect-contribution">
            <article className="co-connect-card co-connect-card-paper"><h3>My contribution</h3><ul><li>I developed UX flows for the referral, questionnaire, advisor options, and follow-up.</li><li>I helped shape the concept and how a referral could introduce the service.</li><li>I contributed go-to-market thinking and presented the final pitch.</li></ul></article>
            <article className="co-connect-card co-connect-card-dark"><h3>How we worked</h3><p>Team records list content, research, and design responsibilities across my teammates. We developed the concept and pitch together; the bullets above describe my part.</p></article>
          </div>
          <aside className="co-connect-team"><div><span>CONTENT & RESEARCH</span><p>Nila Sivapragasam · Content<br />Aswina Sivaloganathan · Research</p></div><div><span>DESIGN</span><p>Iba Abbasi · Design</p></div></aside>
        </Section>

        <Section id="outcome" number="05" eyebrow="Outcome & reflection" title="Outcome and next steps" intro="Our team placed second at the Spring 2025 Co-operators uXperience Design Jam.">
          <div className="co-connect-outcome-grid">
            <article className="co-connect-card co-connect-card-dark"><h3>What we delivered</h3><p>A referral flow, goals and preferences questionnaire, advisor recommendations, prototype screens, and a final presentation.</p></article>
            <article className="co-connect-card co-connect-card-paper"><h3>What we did not measure</h3><p>The available project material does not show whether people understood the recommendations, felt comfortable sharing information, or contacted an advisor.</p></article>
          </div>
          <CoConnectValidation />
          <div className="co-connect-reflection"><h3>My takeaway</h3><p>I would add a short explanation to each advisor card and show what information reaches an advisor before someone continues. That would give people the detail they need to decide whether the match feels relevant.</p></div>
        </Section>

        <nav className="co-connect-related" aria-label="Related projects">
          <div className="co-connect-related-heading"><div><p className="co-connect-eyebrow">Keep exploring</p><h2>More selected work</h2></div><Link to="/projects">All projects <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
          <div className="co-connect-related-grid">{relatedProjects.map((project) => <Link key={project.id} to={`/projects/${project.id}`}>{project.title}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}</div>
        </nav>
      </div>
    </article></CoConnectLocalEditor>
  )
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><dt>{label}</dt><dd>{children}</dd></div>
}

function Section({ id, number, eyebrow, title, intro, children }: { id: string; number: string; eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section id={id} className="co-connect-section" aria-labelledby={`${id}-heading`}>
      <div className="co-connect-section-copy">
        <p className="co-connect-eyebrow"><span>{number}</span> {eyebrow}</p>
        <h2 id={`${id}-heading`}>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="co-connect-section-content">{children}</div>
    </section>
  )
}

function Decision({ number, title, problem, choice, rationale, tradeoff, improve, image, imageAlt, imageCaption }: { number: string; title: string; problem: string; choice: string; rationale: string; tradeoff: string; improve: string; image: string; imageAlt: string; imageCaption: string }) {
  return (
    <article className="co-connect-decision-card">
      <div className="co-connect-decision-main"><p className="co-connect-eyebrow">Decision {number}</p><h3>{title}</h3><DecisionDetail label="Question">{problem}</DecisionDetail><CaseStudyImage src={image} alt={imageAlt} title={title} caption={imageCaption} className="co-connect-decision-image" /></div>
      <div className="co-connect-decision-details"><DecisionDetail label="Choice we explored">{choice}</DecisionDetail><DecisionDetail label="Why">{rationale}</DecisionDetail><DecisionDetail label="Trade-off">{tradeoff}</DecisionDetail><DecisionDetail label="Next step">{improve}</DecisionDetail></div>
    </article>
  )
}

function DecisionDetail({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="co-connect-decision-detail"><h4>{label}</h4><p>{children}</p></div>
}
