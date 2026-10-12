import { CaseStudyAnchorNav, CaseStudyFrame, CaseStudyHero, CaseStudyImage, CaseStudySection, EvidenceLabel, TextCard } from "@/components/case-studies/CaseStudyPrimitives"

const sectionTitles = [
  "Project introduction", "Final product screenshots", "Context", "Project overview", "The problem",
  "Initial wireframes or sketches", "Design challenge", "Research and visual inspiration", "User research",
  "User persona", "How research changed the design", "Key design decisions", "Usability testing and results",
  "Second design challenge", "Collaboration with developers and handoff", "Reflections",
]
const sectionEyebrows = [
  "Project snapshot", "The finished experience", "Background", "At a glance", "The opportunity",
  "Early exploration", "Design direction", "Inspiration", "Discovery", "Audience", "Research impact",
  "Design rationale", "Validation", "Next challenge", "Delivery", "Looking back",
]

export type StudyImage = { src: string; alt: string; caption?: string }
export type StudyData = {
  id: "icmms" | "co-connect" | "lurn" | "habitat" | "grandmas-bakery"
  index: string
  title: string
  eyebrow: string
  intro: string
  year: string
  images: StudyImage[]
  overview: { label: string; value: string }[]
  sections: { text: string; cards?: { title: string; text: string }[]; images?: StudyImage[]; evidence?: "documented" | "hypothesis" | "proposal" | "verify" }[]
  liveUrl?: string
}

export function StandardCaseStudy({ data }: { data: StudyData }) {
  const nav = sectionTitles.map((label, i) => ({ href: `study-${i + 1}`, label }))
  return <CaseStudyFrame id={data.id}>
    <CaseStudyHero
      eyebrow={data.eyebrow}
      showEyebrow={data.id !== "icmms"}
      title={data.title}
      summary={data.intro}
      image={data.images[0]?.src}
      imageAlt={data.images[0]?.alt}
      metadata={data.overview.slice(0, 3)}
      liveUrl={data.liveUrl}
      liveLabel="Explore the project"
    />
    <CaseStudyAnchorNav items={nav} />
    {sectionTitles.map((title, i) => {
      const details = data.sections[i]
      return <CaseStudySection key={title} id={`study-${i + 1}`} eyebrow={sectionEyebrows[i]} title={title} className={i % 2 === 1 ? "case-study-section--alternate" : ""} intro={i === 0 ? `${data.title} · ${data.year}` : undefined}>
        {i === 1 ? <div className="grid gap-5 sm:grid-cols-2">{data.images.slice(0, 2).map((image) => <CaseStudyImage key={image.src} src={image.src} alt={image.alt} title={image.alt} className="mx-auto max-h-[520px] w-full rounded-xl object-contain" />)}</div>
          : i === 3 ? <div className="grid gap-4 sm:grid-cols-2">{data.overview.map((item) => <TextCard key={item.label} title={item.label}>{item.value}</TextCard>)}</div>
          : <>
            {!details.evidence && <p>{details.text}</p>}
            {details.cards && <div className="grid gap-4 sm:grid-cols-2">{details.cards.map((card) => <TextCard key={card.title} title={card.title}>{card.text}</TextCard>)}</div>}
            {details.images && <div className="grid gap-5 sm:grid-cols-2">{details.images.map((image) => <CaseStudyImage key={image.src} src={image.src} alt={image.alt} title={image.alt} className="mx-auto max-h-[520px] w-full rounded-xl object-contain" />)}</div>}
            {details.evidence && <EvidenceLabel kind={details.evidence}>{details.text}</EvidenceLabel>}
          </>}
      </CaseStudySection>
    })}
  </CaseStudyFrame>
}
