import type { ReactNode } from "react"

const journey = [
  { title: "Receive a referral", detail: "An existing client shares an invitation." },
  { title: "Explore the service", detail: "The recipient chooses whether to continue." },
  { title: "Share useful context", detail: "Goals and preferences shape a potential match." },
  { title: "Compare advisors", detail: "Review suggested advisors and their profiles." },
  { title: "Choose a next step", detail: "The experience makes the handoff clear." },
]

const wireframes = [
  { step: "01", name: "Invitation", eyebrow: "A personal introduction", title: "Someone thought this could help.", variant: "invite" },
  { step: "02", name: "Service introduction", eyebrow: "Meet Co-Connect", title: "Find guidance that fits your life.", variant: "intro" },
  { step: "03", name: "Goals & preferences", eyebrow: "A few questions", title: "What matters to you right now?", variant: "quiz" },
  { step: "04", name: "Advisor recommendations", eyebrow: "A potential match", title: "Explore advisors who fit.", variant: "matches" },
  { step: "05", name: "Advisor profile", eyebrow: "Get to know your advisor", title: "See how they can support you.", variant: "profile" },
  { step: "06", name: "Warm handoff", eyebrow: "Your next step", title: "Continue when you are ready.", variant: "handoff" },
]

export function CoConnectJourney() {
  return (
    <figure className="cc-journey">
      <figcaption className="cc-artifact-caption">
        <span>End-to-end concept</span>
        <p>The journey follows a referral from invitation through advisor review and a possible conversation.</p>
      </figcaption>
      <ol className="cc-journey-steps">
        {journey.map((item, index) => (
          <li className="cc-journey-step" key={item.title}>
            <span className="cc-journey-number">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </li>
        ))}
      </ol>
      <p className="cc-artifact-note">Conceptual reconstruction from the supplied prototype screens and project description.</p>
    </figure>
  )
}

export function CoConnectWireframes() {
  return (
    <section className="cc-wireframe-board" aria-labelledby="cc-wireframes-heading">
      <div className="cc-wireframe-heading">
        <div>
          <p className="co-connect-eyebrow">From introduction to handoff</p>
          <h3 id="cc-wireframes-heading">A connected set of key screens</h3>
        </div>
        <p>Illustrative wireframes with sample content, reconstructed to explain the concept. They are not historical deliverables.</p>
      </div>
      <div className="cc-wireframe-grid">
        {wireframes.map((screen) => (
          <article className="cc-wireframe" key={screen.step}>
            <div className="cc-wireframe-top"><span>CO-OPERATORS</span><span>{screen.step} / 06</span></div>
            <div className={`cc-wireframe-screen cc-wireframe-${screen.variant}`}>
              <p className="cc-wireframe-eyebrow">{screen.eyebrow}</p>
              <h4>{screen.title}</h4>
              <WireframeContent variant={screen.variant} />
            </div>
            <h4 className="cc-wireframe-label"><span>{screen.step}</span>{screen.name}</h4>
          </article>
        ))}
      </div>
    </section>
  )
}

function WireframeContent({ variant }: { variant: string }) {
  if (variant === "invite") return <><p className="cc-wireframe-copy">An existing client invited you to learn about the service.</p><div className="cc-wireframe-message"><b>Explore Co-Connect</b><i>Referral shared by a client</i></div><WireButton>View invitation</WireButton><WireText>Decline invitation</WireText></>
  if (variant === "intro") return <><div className="cc-wireframe-image cc-wireframe-portrait" /><p className="cc-wireframe-copy">Explore financial guidance based on your goals.</p><WireButton>See how it works</WireButton><WireText>What to expect</WireText></>
  if (variant === "quiz") return <><p className="cc-wireframe-copy">Your answers help suggest advisors to explore.</p><WireChoice>Planning for a life change</WireChoice><WireChoice>Managing my finances</WireChoice><WireChoice>Understanding my options</WireChoice><WireButton>Continue</WireButton></>
  if (variant === "matches") return <><p className="cc-wireframe-copy">Review why these advisors may be a fit.</p><AdvisorRow initials="AM" name="Alex Morgan" detail="Planning · Family goals" /><AdvisorRow initials="JT" name="Jordan Taylor" detail="Savings · First home" /><WireText>How we suggest a match</WireText></>
  if (variant === "profile") return <><AdvisorRow initials="AM" name="Alex Morgan" detail="Financial advisor" /><div className="cc-wireframe-lines"><i /><i /><i /></div><WireText>Approach · Experience · Areas of focus</WireText><WireButton>Choose this advisor</WireButton></>
  return <><p className="cc-wireframe-copy">You decide what happens next and what you share.</p><div className="cc-wireframe-message"><b>Request a conversation</b><i>Your details are shown before you continue.</i></div><WireButton>Review and continue</WireButton><WireText>Back to advisor profile</WireText></>
}

function WireButton({ children }: { children: ReactNode }) { return <span className="cc-wire-button">{children}</span> }
function WireText({ children }: { children: ReactNode }) { return <span className="cc-wire-text">{children}</span> }
function WireChoice({ children }: { children: ReactNode }) { return <span className="cc-wire-choice"><i />{children}</span> }
function AdvisorRow({ initials, name, detail }: { initials: string; name: string; detail: string }) {
  return <div className="cc-wire-advisor"><span>{initials}</span><div><b>{name}</b><i>{detail}</i></div><em aria-hidden="true">›</em></div>
}

export function CoConnectValidation() {
  const checks = [
    { question: "Can people understand and decline the invitation?", signal: "They can say who sent it and what happens if they continue." },
    { question: "Do the questions feel clear and relevant?", signal: "They understand why details are requested and can skip or edit answers." },
    { question: "Can people compare the advisor suggestions?", signal: "They can explain why an advisor appeared and find information to compare options." },
    { question: "Is the next step clear?", signal: "They know what information is shared and whether continuing requests a conversation." },
  ]
  return (
    <section className="cc-validation" aria-labelledby="cc-validation-heading">
      <div className="cc-validation-heading">
        <p className="co-connect-eyebrow">Proposed validation · not conducted</p>
        <h3 id="cc-validation-heading">What I would learn before launch</h3>
        <p>I would use scenario-based sessions to find confusion, pressure, or uncertainty about what happens next.</p>
      </div>
      <ol className="cc-validation-list">
        {checks.map((item, index) => <li key={item.question}><span>0{index + 1}</span><div><h4>{item.question}</h4><p>{item.signal}</p></div></li>)}
      </ol>
    </section>
  )
}
