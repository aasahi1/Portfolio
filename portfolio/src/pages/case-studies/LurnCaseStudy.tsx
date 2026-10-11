import { CaseStudyAnchorNav, CaseStudyFrame, CaseStudyHero, CaseStudyImage, CaseStudySection, EvidenceLabel, TextCard } from "@/components/case-studies/CaseStudyPrimitives"

const contents = [
  { href: "context", label: "Context & needs" },
  { href: "decisions", label: "Design decisions" },
  { href: "experiences", label: "Student & teacher" },
  { href: "evidence", label: "Validation & reflection" },
]

export function LurnCaseStudy() {
  return (
    <CaseStudyFrame id="lurn">
      <CaseStudyHero
        index="03"
        eyebrow="Learning · Inclusive product concept"
        title="Lurn"
        summary="Where you yearn to learn. Lurn explores a homework experience that gives students clear next steps while helping teachers see where support may be needed."
        image="/lurn/student-dashboard.png"
        imageAlt="Lurn student dashboard with weekday progress, subject choices, and navigation"
        imageCaption="Student interface from the existing portfolio assets. This is a design artifact, not evidence of classroom use."
        supportingImages={[{ src: "/lurn/mobile-dashboard.png", alt: "Lurn mobile student dashboard" }, { src: "/lurn/teacher-flow.png", alt: "Lurn teacher journey flow" }]}
        availabilityNote="No shareable prototype URL is recorded in this portfolio."
        metadata={[
          { label: "Format", value: "Inclusive learning product concept" },
          { label: "My role", value: "End-to-end product designer" },
          { label: "Team", value: "Collaborators and role split not recorded" },
          { label: "Focus", value: "Student experience · teacher insight · accessibility" },
          { label: "Tools", value: "Figma · user flows · prototyping" },
          { label: "Artifacts", value: "Interface screens · student and teacher flows" },
          { label: "Timeline", value: "Existing records differ; duration not stated" },
        ]}
      />

      <CaseStudyAnchorNav items={contents} />

      <CaseStudySection id="context" number="01" eyebrow="Context & needs" title="Give students a next step without reducing them to a profile." intro="Lurn is an inclusive homework concept with student-facing learning and a teacher-facing view. It asks how a product can make work approachable for students while giving teachers useful context without replacing their judgment.">
        <div className="grid gap-4 md:grid-cols-2">
          <TextCard title="Student needs · hypotheses" tone="soft">Students may benefit from clear instructions, manageable steps, and choices in how they engage with an activity. Needs vary by student, subject, moment, and environment; a single learning preference should not stand in for a learner’s whole experience.</TextCard>
          <TextCard title="Teacher needs · hypotheses">Teachers may need to see where a student is progressing or may need help, then decide what support is appropriate. A dashboard should make its signals understandable and avoid presenting time spent or completion as a complete measure of learning.</TextCard>
        </div>
        <EvidenceLabel kind="hypothesis">These needs are design hypotheses drawn from the project description and learner scenario. The current portfolio assets do not document research with students, teachers, caregivers, or accessibility specialists.</EvidenceLabel>
        <p className="text-sm leading-relaxed text-[#2B120A]/85">The existing portfolio describes a Grade 4 learner profile named Ginny who prefers text or audio and benefits from short activities. That profile can focus a design exercise, but it should not be presented as a research participant or generalized to students with different learning and sensory needs.</p>
        <p className="text-xs leading-relaxed text-[#2B120A]/70">The original brief and the source of the learner profile are not included in the portfolio record. The profile is a design scenario, not a documented participant or representative research sample.</p>
      </CaseStudySection>

      <CaseStudySection id="decisions" number="02" eyebrow="Design decisions" title="Keep choice and interpretation with the learner and teacher." intro="The interface screens and flow diagrams show a concept, not evidence that the intended support worked. These first-pass rationales connect visible artifacts with the product directions in the supplied brief.">
        <div className="grid gap-4">
          <Decision title="01 · Offer preferences without fixing a learning identity" problem="The concept includes a learning-style onboarding check. A one-time label can imply that a student has one fixed way to learn and may narrow their choices." choice="Retrospective direction: treat text, audio, pace, and other supports as adjustable preferences. Let students change them when an activity or moment calls for something different." tradeoff="More choice supports agency, but an overly long setup can create friction. Keep the initial choices lightweight and make them available later." validate="Ask students to change a preference during an activity and explain what will happen. Include assistive-technology review and varied access needs." />
          <Decision title="02 · Make the next action visible" problem="A student returning to an assignment may need to understand what to do next without scanning a dense dashboard." choice="The existing student screen organizes the week and presents subject choices. Its visual path and labels should be reviewed to see whether the next action is clear." tradeoff="Colorful subject tiles may make options distinctive, but overlapping shapes and color-coded status can add visual load or depend on color recognition." validate="Test task comprehension with students using varied reading, attention, and sensory needs. Check color contrast, focus order, zoom, and whether labels communicate status without color." />
          <Decision title="03 · Treat teacher signals as prompts, not verdicts" problem="Time spent, progress, and areas of difficulty can help a teacher investigate, but each is an incomplete signal." choice="The teacher flow diagram shows a teacher reviewing a dashboard and submitted work, then deciding whether to comment or ask for another submission." tradeoff="Summaries can save scanning, but a score or automated suggestion may misrepresent the student’s understanding or hide context." validate="Ask teachers to interpret sample dashboard states and explain what they would do next. Compare interpretation with student work and teacher judgment; do not use a metric as a diagnosis." />
          <Decision title="04 · Keep rewards and AI subordinate to learning" problem="Coins, accessories, reactions, and AI suggestions may motivate or support activity, but can also distract, expose student data, or create pressure." choice="Treat these as optional concept directions requiring separate design and safety review. Keep teacher control over any recommendation and avoid claiming AI or filtering works without a verified implementation." tradeoff="Removing social and reward features may reduce one engagement route; adding them raises questions about moderation, privacy, consent, and what behavior is being rewarded." validate="Test whether rewards distract from task goals, inspect privacy and safeguarding requirements, and evaluate recommendations for accuracy, bias, explainability, and human override." />
        </div>
        <EvidenceLabel kind="proposal">The preference controls, simpler alternatives, and evaluation criteria above are retrospective design analysis, not documented historical alternatives or research findings.</EvidenceLabel>
      </CaseStudySection>

      <CaseStudySection id="experiences" number="03" eyebrow="The student & teacher experiences" title="Two views, one learning loop." intro="The repository contains student interface images and student/teacher flow diagrams. It does not contain a clearly identified teacher-dashboard screenshot, so the two experiences are shown with different kinds of evidence.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl bg-[#94B86D]/20 p-4 sm:p-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#220500]">Student experience · interface screen</p>
            <CaseStudyImage src="/lurn/student-dashboard.png" alt="Student dashboard showing a weekly route and subject choices" title="Lurn student dashboard" caption="A weekly overview and subject choices are visible in the supplied screen. The image alone does not show how students interpreted it." className="mx-auto max-h-[600px] w-full rounded-lg object-contain" />
          </div>
          <div className="rounded-2xl bg-[#94B86D]/20 p-4 sm:p-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#220500]">Teacher experience · flow artifact</p>
            <CaseStudyImage src="/lurn/teacher-flow.png" alt="Teacher flow diagram showing dashboard review, assignment review, feedback, and next assignment planning" title="Lurn teacher flow" caption="Existing teacher flow artifact. It describes a proposed workflow; it is not a teacher dashboard screenshot or proof that automated analysis is implemented." className="mx-auto max-h-[600px] w-full rounded-lg object-contain" />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <CaseStudyImage src="/lurn/learning-style-quiz.png" alt="Lurn learning preference onboarding screen" title="Lurn preference onboarding" caption="The existing onboarding screen is described as a learning-style check. A next iteration should let students revise preferences instead of assigning a fixed label." className="mx-auto max-h-[500px] w-full object-contain" />
          <CaseStudyImage src="/lurn/profile-customization.svg" alt="Lurn profile customization screen with learner avatar and accessory choices" title="Profile and customization" caption="A learner can personalize an avatar in the supplied screen; the role of customization in learning motivation has not been evaluated." className="mx-auto max-h-[500px] w-full object-contain" />
          <CaseStudyImage src="/lurn/student-community.svg" alt="Lurn student community screen with class artwork" title="Student community" caption="The supplied class gallery explores peer visibility. Moderation, privacy, and social participation requirements are not documented." className="mx-auto max-h-[500px] w-full object-contain" />
          <CaseStudyImage src="/lurn/activity-complete.svg" alt="Lurn completed word activity screen" title="Practice activity" caption="The exercise screen gives a concrete view of the proposed practice interaction." className="mx-auto max-h-[500px] w-full object-contain" />
          <CaseStudyImage src="/lurn/activity-interruption.svg" alt="Lurn return reminder shown over a word activity" title="Return reminder" caption="The interruption state is visible in the supplied screen. Timing and interruption preferences would need learner testing." className="mx-auto max-h-[500px] w-full object-contain" />
          <CaseStudyImage src="/lurn/student-flow-map.svg" alt="Student flow diagram for weekly learning, practice, and progress" title="Student flow map" caption="Supplied student flow artifact; confirm whether this matches the final prototype sequence." className="mx-auto max-h-[600px] w-full object-contain" />
          <CaseStudyImage src="/lurn/teacher-flow-map.svg" alt="Teacher flow diagram for assigning work and reviewing student progress" title="Teacher flow map" caption="Supplied teacher flow artifact; the portfolio does not include a clearly identified teacher dashboard capture." className="mx-auto max-h-[600px] w-full object-contain" />
        </div>
        <EvidenceLabel kind="documented">The repository contains student interface screens and student/teacher flow diagrams. No shareable prototype URL or teacher dashboard capture is included in the current project record.</EvidenceLabel>
      </CaseStudySection>

      <CaseStudySection id="evidence" number="04" eyebrow="Outcome, validation & reflection" title="Accessibility is something to evaluate with learners." intro="The portfolio contains design screens and flow artifacts. It does not document classroom use, usability tests, student or teacher feedback, or measured learning outcomes.">
        <TextCard title="My contribution" tone="accent">I led the product design work, connecting the learner scenario to student and teacher flows, interface decisions, and the prototype direction. The portfolio does not identify individual collaborator responsibilities.</TextCard>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="Documented outcome · design artifacts">The current portfolio includes student screens, a role-selection and learning-preference flow, a student flow, a teacher flow, and a community concept screen. These show the scope explored; they do not establish learning or classroom outcomes.</TextCard>
          <TextCard title="Not yet evidenced">There are no documented participant findings, accessibility evaluations, teacher feedback, learning results, AI analyses, or evidence that social filtering is functional.</TextCard>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="Proposed evaluation with students" tone="accent">With appropriate school approval, caregiver consent, student assent, privacy safeguards, and accessible sessions, check whether students understand instructions, can complete a learning task, and can find or adjust the support they need. Provide multiple ways to participate and avoid treating one learner’s response as representative.</TextCard>
          <TextCard title="Proposed evaluation with teachers">Ask teachers to interpret the dashboard, identify where they would follow up, and compare any recommendation with the student’s work and their own context. Check whether signals support action or simply add another set of numbers to review.</TextCard>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="Evidence to collect">Task understanding and completion, navigation errors, requests for help, cognitive or sensory friction reported by participants, teacher interpretation accuracy, and whether the suggested next step is useful. These are proposed measures, not findings.</TextCard>
          <TextCard title="What I would revisit">I would replace fixed learning-style labels with adjustable supports, test the visual system with students who have varied needs, and keep AI-assisted suggestions clearly separate from teacher decisions. Any social feedback would need privacy, moderation, and human oversight before it moved beyond a concept.</TextCard>
        </div>
        <p className="text-xs leading-relaxed text-[#2B120A]/70">The project materials do not include a personal retrospective or a reliable timeline. This page keeps its conclusions to the design implications visible in the artifacts.</p>
        <EvidenceLabel kind="verify">Before publication, add the correct project duration, original brief, team members and responsibilities, and a personal lesson from the work.</EvidenceLabel>
      </CaseStudySection>
    </CaseStudyFrame>
  )
}

function Decision({ title, problem, choice, tradeoff, validate }: { title: string; problem: string; choice: string; tradeoff: string; validate: string }) {
  return <article className="case-study-decision-card grid gap-4 rounded-xl border border-[#2B120A]/12 bg-[#F9F8ED] p-5 sm:grid-cols-[0.8fr_1.2fr] sm:p-6"><div><h3 className="font-semibold leading-snug text-[#2B120A]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#2B120A]/85">{problem}</p></div><div className="grid gap-3 sm:grid-cols-2"><div><p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#AF2500]">Direction</p><p className="mt-1 text-sm leading-relaxed text-[#2B120A]/85">{choice}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#AF2500]">Trade-off</p><p className="mt-1 text-sm leading-relaxed text-[#2B120A]/85">{tradeoff}</p></div><div className="sm:col-span-2"><p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#AF2500]">Evidence to seek · proposed</p><p className="mt-1 text-sm leading-relaxed text-[#2B120A]/85">{validate}</p></div></div></article>
}
