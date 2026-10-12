import { ArrowRight, ExternalLink } from "lucide-react"
import { CaseStudyAnchorNav, CaseStudyFrame } from "@/components/case-studies/CaseStudyPrimitives"
import "./IcmmsCaseStudy.css"

const siteUrl = "https://icmms.ai/"
const mcimUrl = "https://mcim.io/"
const asset = "/icmms/case-study/"

const sections = [
  { href: "icmms-research", label: "Research" },
  { href: "icmms-decisions", label: "Design decisions" },
  { href: "icmms-final", label: "Final website" },
  { href: "icmms-outcome", label: "Outcome" },
]

const decisions = [
  {
    need: "Visitors needed a quick way to understand what the platform does.",
    title: "Explain the product before the detail",
    text: "I led with the product promise and a view of the platform, then introduced maintenance capabilities. This gives the later details a clear place in the story.",
    image: "icmms-home.jpg",
    alt: "iCMMS homepage introducing the maintenance platform and its operational interface",
  },
  {
    need: "A broad set of capabilities could be difficult to scan.",
    title: "Organize information for scanning",
    text: "I grouped information into clear sections and used concise headings, so visitors can skim first and spend time only on the areas that match their needs.",
    image: "pricing-page.png",
    alt: "iCMMS pricing page organizing plans and feature comparisons into clear sections",
  },
  {
    need: "Different organizations need to see how maintenance connects to their priorities.",
    title: "Connect capabilities to business needs",
    text: "I connected maintenance work to operational priorities such as asset longevity and sustainability, giving visitors a business context for the platform capabilities.",
    image: "sustainability-page.png",
    alt: "iCMMS sustainability page connecting maintenance work with asset longevity",
  },
]

function StoryImage({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const path = src.startsWith("/") ? src : `${asset}${src}`
  return <img className={`icmms-image ${className}`} src={path} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} />
}

export function IcmmsCaseStudy() {
  return (
    <CaseStudyFrame id="icmms">
      <div className="icmms-case-study">
        <header className="icmms-hero">
          <div className="icmms-hero-copy">
            <p className="icmms-eyebrow">Alectify · Enterprise software</p>
            <h1>iCMMS</h1>
            <p className="icmms-hero-title">Making complex software easier to understand.</p>
            <p className="icmms-lede">I designed and built a public-facing website to help businesses understand iCMMS maintenance software, explore its capabilities, and decide what to do next.</p>
            <div className="icmms-hero-links">
              <a className="icmms-primary-link" href={siteUrl} target="_blank" rel="noreferrer">Visit iCMMS <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
            <dl className="icmms-meta">
              <div><dt>Role</dt><dd>UX/UI designer & front-end builder</dd></div>
              <div><dt>Team</dt><dd>Myself + 2 engineers</dd></div>
              <div><dt>Duration</dt><dd>2 months</dd></div>
              <div><dt>Focus</dt><dd>Research, design & implementation</dd></div>
            </dl>
          </div>
          <figure className="icmms-hero-visual">
            <StoryImage src="icmms-laptop-hero.png" alt="Laptop mockup displaying the iCMMS website homepage" eager />
          </figure>
        </header>

        <CaseStudyAnchorNav items={sections} />

        <section className="icmms-section" id="icmms-research" aria-labelledby="icmms-research-title">
          <div className="icmms-section-heading">
            <p className="icmms-eyebrow">Challenge & research</p>
            <h2 id="icmms-research-title">Help visitors understand a complex product.</h2>
            <p>iCMMS brings maintenance, assets, and operational workflows together. The website needed to make the platform easier to understand, show its relevance to different businesses, and offer a clear next step.</p>
          </div>
          <div className="icmms-research-panel">
            <div className="icmms-research-copy">
              <h3>Learn how maintenance work happens.</h3>
              <p>I visited a client business and spoke with 35 employees across roles, including executives, technicians, field workers, vendors, and contractors. I also surveyed users about their workflows and reviewed competitor websites.</p>
            </div>
            <div className="icmms-research-stat"><strong>35</strong><span>employees interviewed across stakeholder groups</span></div>
            <ul className="icmms-methods" aria-label="Research methods">
              <li><span>01</span><strong>On-site interviews</strong><small>Multiple operational roles</small></li>
              <li><span>02</span><strong>Workflow survey</strong><small>How users work today</small></li>
              <li><span>03</span><strong>Website review</strong><small>Public competitor analysis</small></li>
            </ul>
          </div>

          <div className="icmms-competitor">
            <div className="icmms-competitor-copy">
              <p className="icmms-eyebrow">Public website competitor analysis</p>
              <h3>Make the value and next step easy to find.</h3>
              <p>Reviewing MCIM’s public website showed a useful communication pattern: state the product value early, group capabilities into understandable areas, speak to different operational contexts, and keep a demo path visible. This was a review of public marketing material, not research with MCIM customers.</p>
              <a href={mcimUrl} target="_blank" rel="noreferrer">Visit MCIM’s public website <ExternalLink size={14} aria-hidden="true" /></a>
            </div>
            <div className="icmms-competitor-observations" aria-label="Competitor review and design implication">
              <p className="icmms-eyebrow">What I looked for</p>
              <ul>
                <li>How product value appears early</li>
                <li>How capabilities are grouped</li>
                <li>How audiences find a next step</li>
              </ul>
              <div className="icmms-implication"><span>Design implication</span><strong>Guide visitors from understanding the product to exploring its relevance and contacting the business.</strong></div>
            </div>
          </div>
          <p className="icmms-takeaway"><strong>Research led to a clear opportunity.</strong> Make iCMMS easier to grasp, organize complex information into a readable sequence, and help visitors connect the platform to their work.</p>
        </section>

        <section className="icmms-section" id="icmms-decisions" aria-labelledby="icmms-decisions-title">
          <div className="icmms-section-heading">
            <p className="icmms-eyebrow">Strategy & design decisions</p>
            <h2 id="icmms-decisions-title">Turn product capabilities into a clear path through the site.</h2>
            <p>The design moves from an introduction to capabilities, then business context, and finally a way to explore or get in touch. These are design priorities informed by discovery and competitor review, not usability-test findings.</p>
          </div>
          <div className="icmms-hierarchy" aria-label="Website information hierarchy">
            <span>Product introduction</span><ArrowRight aria-hidden="true" /><span>Capabilities</span><ArrowRight aria-hidden="true" /><span>Business context</span><ArrowRight aria-hidden="true" /><span>Explore or contact</span>
          </div>
          <div className="icmms-decisions">
            {decisions.map((decision, index) => (
              <article className="icmms-decision" key={decision.title}>
                <div className="icmms-decision-copy"><span className="icmms-decision-number">0{index + 1}</span><h3>{decision.title}</h3><p className="icmms-decision-need"><strong>Communication need</strong>{decision.need}</p><p>{decision.text}</p></div>
                <figure className="icmms-decision-visual"><StoryImage src={decision.image} alt={decision.alt} /></figure>
              </article>
            ))}
          </div>
        </section>

        <section className="icmms-section icmms-final-section" id="icmms-final" aria-labelledby="icmms-final-title">
          <div className="icmms-section-heading">
            <p className="icmms-eyebrow">Final website</p>
            <h2 id="icmms-final-title">A clearer way into the iCMMS platform.</h2>
            <p>The finished site combines a product introduction with focused paths to learn about the platform, its business value, and how to take the next step.</p>
          </div>
          <details className="icmms-overview">
            <summary>Open the full-page website overview</summary>
            <figure><StoryImage src="/icmms/landing-page.svg" alt="Full-page iCMMS website design showing the final product story and page sections" /><figcaption>The complete page, shown as an overview.</figcaption></figure>
          </details>
          <div className="icmms-final-details" aria-label="Selected website details">
            <figure><StoryImage src="demo-page.png" alt="iCMMS demo request page with a form and direct contact details" /></figure>
            <figure><StoryImage src="closing-banner.png" alt="iCMMS closing banner inviting visitors to book a demo or view pricing" /></figure>
          </div>
        </section>

        <section className="icmms-section icmms-handoff-section" aria-labelledby="icmms-handoff-title">
          <div className="icmms-section-heading">
            <p className="icmms-eyebrow">Collaboration & handoff</p>
            <h2 id="icmms-handoff-title">Design with implementation in view.</h2>
            <p>I worked with two engineers and handed off Figma designs, a visual asset library, and a front-end package. They finalized the front end and connected the back end.</p>
          </div>
          <ol className="icmms-handoff-flow">
            <li><span>01</span><strong>Figma designs</strong></li>
            <li><span>02</span><strong>Visual asset library</strong></li>
            <li><span>03</span><strong>Front-end package</strong></li>
            <li><span>04</span><strong>Engineering completion</strong></li>
          </ol>
        </section>

        <section className="icmms-section icmms-outcome-section" id="icmms-outcome" aria-labelledby="icmms-outcome-title">
          <div className="icmms-section-heading">
            <p className="icmms-eyebrow">Outcome & reflection</p>
            <h2 id="icmms-outcome-title">Bring iCMMS to more prospective businesses.</h2>
            <p>The project brief reports these results in the four months following launch. They reflect the website and its business context; the redesign’s direct contribution was not measured.</p>
          </div>
          <ul className="icmms-outcome-metrics" aria-label="Reported results after launch">
            <li><strong>3,000+</strong><span>businesses reached</span></li>
            <li><strong>30,000+</strong><span>engagements</span></li>
            <li><strong>4</strong><span>new business customers</span></li>
          </ul>
          <div className="icmms-reflection">
            <h3>What I learned</h3>
            <p>Research across maintenance roles helped ground the website in real operational contexts. Next, I would test whether visitors can find the right information and understand how the platform fits their needs.</p>
          </div>
        </section>
      </div>
    </CaseStudyFrame>
  )
}
