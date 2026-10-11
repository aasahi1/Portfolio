import { CaseStudyAnchorNav, CaseStudyFrame, CaseStudyHero, CaseStudyImage, CaseStudySection, EvidenceLabel, TextCard } from "@/components/case-studies/CaseStudyPrimitives"

const contents = [
  { href: "context", label: "Context & opportunity" },
  { href: "decisions", label: "Product decisions" },
  { href: "experience", label: "The experience" },
  { href: "outcome", label: "Outcome & next steps" },
]

export function HabitAtCaseStudy() {
  return (
    <CaseStudyFrame id="habitat">
      <CaseStudyHero
        index="04"
        eyebrow="Shared home · Design sprint concept"
        title="HabitAt"
        summary="Make shared chores easier to see and more satisfying to finish. HabitAt organizes tasks by room, then explores how a shared virtual home could make progress tangible."
        image="/habitat/house-view.png"
        imageAlt="HabitAt shared home dashboard with room-based household tasks"
        imageCaption="A concept screen from the project portfolio. It does not represent a tested or released household app."
        supportingImages={[{ src: "/habitat/onboarding.png", alt: "HabitAt onboarding screens" }, { src: "/habitat/shop-view.png", alt: "HabitAt rewards and customization screen" }]}
        liveUrl="https://www.figma.com/proto/OzjSJONNdMT7Sedl1mhm1e/Design-Sprint?node-id=28-1490&p=f&viewport=279%2C200%2C0.1&t=S7T1N3xZSezhDTt3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A1210&show-proto-sidebar=1&page-id=0%3A1"
        liveLabel="Explore the prototype"
        metadata={[
          { label: "Format", value: "Design sprint · first place" },
          { label: "My role", value: "UX researcher & product designer" },
          { label: "Team", value: "Sprint team · individual role splits not recorded" },
          { label: "Focus", value: "Household coordination · mobile UX · reward loop" },
          { label: "Tools", value: "Figma · prototyping · user flows" },
          { label: "Timeline", value: "Exact sprint length not recorded" },
        ]}
      />

      <CaseStudyAnchorNav items={contents} />

      <CaseStudySection id="context" number="01" eyebrow="Context & opportunity" title="Turn a household checklist into shared progress." intro="HabitAt is a design-sprint concept for a shared household task app. The project framing asks how room context and visible progress might help people coordinate routine chores without losing the practical job to an elaborate game system.">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="The opportunity" tone="soft">A flat list can make it hard to see what needs doing, where it belongs, or whether someone else has already handled it. HabitAt explores making tasks visible in the context of the home.</TextCard>
          <TextCard title="The design tension">Rewards can make progress feel tangible, but setup, points, and social comparison can add work or pressure. The task itself needs to stay quick to find and finish.</TextCard>
        </div>
        <EvidenceLabel kind="hypothesis">This is the sprint’s product framing. The portfolio does not include interviews, diary studies, or household observations that validate the underlying behavior or reward preferences.</EvidenceLabel>
      </CaseStudySection>

      <CaseStudySection id="decisions" number="02" eyebrow="Product decisions" title="Keep the task visible; let motivation support it." intro="The screens show a room-based home, a rewards shop, onboarding, and a friend map. The reasoning below makes the trade-offs legible; where no research evidence is available, it is framed as product rationale rather than a finding.">
        <div className="grid gap-4">
          <Decision title="01 · Organize chores by room" problem="A shared list can hide where a task belongs and make it harder to scan the home for unfinished work." choice="Use rooms as the top-level model, so people can look at the home and its tasks together." implication="Spatial grouping can make task context easier to see, but it asks people to categorize and maintain rooms and tasks." alternative="A single chronological list could be quicker for adding one task, but gives less spatial context when deciding where help is needed." />
          <Decision title="02 · Add rewards after the core task flow" problem="A reward system can distract if users have to understand points before they can act." choice="Connect completed chores to points that can unlock furniture for the shared home." implication="The home gives progress a visible destination, while the reward economy adds rules that would need balancing and testing." alternative="A simple completion state would reduce complexity, but would not explore the sprint’s motivation concept." />
          <Decision title="03 · Make social accountability optional" problem="A friend map may encourage participation, but shared household work can become uncomfortable if progress is compared." choice="Treat the friend map as a supporting concept alongside the home and tasks, rather than the only way to make progress visible." implication="An optional social layer can support encouragement without making comparison the default; privacy and social boundaries remain to be designed." alternative="Removing social visibility would lower privacy risk, but would not answer whether people want encouragement from friends." />
        </div>
        <EvidenceLabel kind="proposal">These alternatives and trade-offs are retrospective design analysis. The project artifacts do not document a formal comparison exercise or observed preference.</EvidenceLabel>
      </CaseStudySection>

      <CaseStudySection id="experience" number="03" eyebrow="The concept experience" title="From room-level task to a home that reflects progress." intro="The supplied screens suggest a path from onboarding to a room-based task view, then from task completion to points and customization. The friend map is a parallel social concept; the exact order of these screens in the prototype should be checked before describing it as a validated user flow.">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="My contribution" tone="accent">I worked as UX researcher and product designer, shaping the concept and its mobile task, room, and reward experiences with the sprint team.</TextCard>
          <TextCard title="Team collaboration">The project was completed with a sprint team. The current portfolio record does not name collaborators or record a detailed division of responsibilities, so I’m keeping those contributions distinct from my own role.</TextCard>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Set up the home", "Introduce the shared household and make the concept understandable."],
            ["02", "Choose a room", "Scan tasks in the room context and find a useful next action."],
            ["03", "Complete and earn", "Connect a finished chore with points and visible progress."],
            ["04", "Make the home yours", "Explore furniture rewards; use the friend map only if social motivation fits."],
          ].map(([number, title, text]) => <li key={number} className="rounded-xl border border-[#2B120A]/12 bg-[#FFF0A3]/55 p-5"><span className="text-sm font-semibold text-[#AF2500]">{number}</span><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#2B120A]/80">{text}</p></li>)}
        </ol>
        <div className="grid gap-5 sm:grid-cols-2">
          <CaseStudyImage src="/habitat/onboarding.png" alt="HabitAt onboarding screen" title="Onboarding" caption="The entry point introduces the shared household concept." className="mx-auto max-h-[520px] w-full object-contain" />
          <CaseStudyImage src="/habitat/house-view.png" alt="HabitAt room-based household task dashboard" title="Room-based task view" caption="Rooms connect task visibility with the physical home." className="mx-auto max-h-[520px] w-full object-contain" />
          <CaseStudyImage src="/habitat/shop-view.png" alt="HabitAt shop screen with furniture rewards" title="Rewards and customization" caption="Points connect task completion with optional home customization." className="mx-auto max-h-[520px] w-full object-contain" />
          <CaseStudyImage src="/habitat/friend-map.png" alt="HabitAt friend map concept" title="Social encouragement" caption="A social layer appears in the concept; moderation, visibility controls, and user comfort are not documented." className="mx-auto max-h-[520px] w-full object-contain" />
        </div>
      </CaseStudySection>

      <CaseStudySection id="outcome" number="04" eyebrow="Outcome & next steps" title="A first-place concept with important questions still open." intro="HabitAt received first place in its design sprint. The portfolio contains a prototype, interface screens, and the award photo; it does not document user validation, adoption, or changes to household behavior.">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="Demonstrated outcome" tone="accent">The team completed a design-sprint concept that received first place. The available artifacts show the product direction and interface explored during the sprint.</TextCard>
          <TextCard title="Not demonstrated">No household study, usability result, repeated-use data, chore completion metric, or reward effectiveness result is documented. The concept should not be described as proven to reduce conflict or increase task completion.</TextCard>
        </div>
        <CaseStudyImage src="/habitat/first-place.jpg" alt="HabitAt team receiving first place at a design competition" title="Sprint recognition" caption="Award documentation from the project assets; this does not establish product adoption or behavior change." className="mx-auto max-h-[560px] w-full rounded-xl object-contain" />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="What I would test next">Ask households to add and assign a chore, locate a task in a room, and understand what happens when someone completes it. Compare a room-based view with a simple shared list before investing in a larger reward system.</TextCard>
          <TextCard title="What I would improve">Start with a low-friction task and ownership model. Then test whether points and furniture make shared progress more motivating without making home upkeep feel like a competition.</TextCard>
        </div>
        <EvidenceLabel kind="proposal">Proposed measures: time to add or claim a task, missed or duplicated chores, clarity about ownership, and whether household members find the reward layer useful. No results are available yet.</EvidenceLabel>
      </CaseStudySection>
    </CaseStudyFrame>
  )
}

function Decision({ title, problem, choice, implication, alternative }: { title: string; problem: string; choice: string; implication: string; alternative: string }) {
  return <article className="case-study-decision-card grid gap-4 rounded-xl border border-[#2B120A]/12 bg-[#F9F8ED] p-5 sm:grid-cols-[0.8fr_1.2fr] sm:p-6"><div><h3 className="font-semibold leading-snug">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#2B120A]/80"><strong>Problem · </strong>{problem}</p></div><div className="grid gap-3 sm:grid-cols-2"><p className="text-sm leading-relaxed text-[#2B120A]/80"><strong className="text-[#AF2500]">Choice · </strong>{choice}</p><p className="text-sm leading-relaxed text-[#2B120A]/80"><strong className="text-[#AF2500]">Implication · </strong>{implication}</p><p className="text-sm leading-relaxed text-[#2B120A]/70 sm:col-span-2"><strong>Alternative considered in retrospect · </strong>{alternative}</p></div></article>
}
