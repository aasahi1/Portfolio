import { CaseStudyAnchorNav, CaseStudyFrame, CaseStudyHero, CaseStudyImage, CaseStudySection, EvidenceLabel, TextCard } from "@/components/case-studies/CaseStudyPrimitives"

const contents = [
  { href: "context", label: "Context & scope" },
  { href: "structure", label: "Information structure" },
  { href: "decisions", label: "Design decisions" },
  { href: "delivery", label: "Build & evidence" },
]

export function IcmmsCaseStudy() {
  return (
    <CaseStudyFrame id="icmms">
      <CaseStudyHero
        index="01"
        eyebrow="Enterprise operations · Marketing website"
        title="ICMMS"
        summary="Making a connected maintenance platform easier to understand. I designed and built the ICMMS website during my Alectify co-op, translating a complex product into a clearer, responsive story."
        image="/icmms/landing-page.svg"
        imageAlt="ICMMS website landing page design, supplied as a full-page SVG export"
        imageCaption="Supplied website design export. Authenticated product screens and customer data are intentionally excluded."
        supportingImages={[{ src: "/icmms/maintenance-page.svg", alt: "ICMMS maintenance page design" }, { src: "/icmms/sustainability-page.svg", alt: "ICMMS sustainability page design" }]}
        liveUrl="https://icmms.ai/dashboard"
        liveLabel="Open ICMMS product"
        availabilityNote="Product access requires login. This case study stays within public-facing website material."
        metadata={[
          { label: "Context", value: "Alectify co-op" },
          { label: "My role", value: "Website designer & builder" },
          { label: "Scope", value: "Information architecture · responsive UI · UX writing" },
          { label: "Tools", value: "Figma · Figma Make" },
          { label: "Timeline", value: "Co-op term · exact dates not recorded" },
          { label: "Constraint", value: "Authenticated product protected by NDA" },
        ]}
      />

      <CaseStudyAnchorNav items={contents} />

      <CaseStudySection id="context" number="01" eyebrow="Context & scope" title="Make a complex product legible before the first conversation." intro="ICMMS is an enterprise operations platform with connected maintenance responsibilities. The website needed to help a first-time visitor grasp the product’s value without exposing confidential platform workflows or overwhelming them with feature detail.">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="The communication problem" tone="soft">A technically dense platform can be difficult to explain in a short visit. The site needed a clear entry point, a useful hierarchy, and enough detail for visitors to decide what to explore next.</TextCard>
          <TextCard title="The working constraint">The authenticated product is NDA-protected. My public portfolio can show the marketing experience and my design/build contribution, but it cannot reproduce internal screens, customer information, or private performance metrics.</TextCard>
        </div>
        <EvidenceLabel kind="hypothesis">The available record does not include user interviews or analytics. The need for clearer product explanation is the project framing, not a measured research finding.</EvidenceLabel>
      </CaseStudySection>

      <CaseStudySection id="structure" number="02" eyebrow="Information structure" title="Give visitors a route from the promise to the detail." intro="The supplied page exports show a product-led website spanning the main introduction, maintenance capabilities, sustainability messaging, and pricing. Together they provide concrete evidence of the public-facing scope without exposing authenticated product UI.">
        <div className="rounded-2xl border border-[#2B120A]/12 bg-[#F9F8ED] p-5 sm:p-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#AF2500]">Content path Â· retrospective reading</p><h3 className="mt-2 text-lg font-semibold text-[#2B120A] sm:text-xl">Four pages answer four different questions.</h3></div>
            <span className="text-xs text-[#2B120A]/65">Reconstructed from supplied page exports</span>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["01", "Understand", "The landing page introduces the product and its promise."],
              ["02", "Explore", "The maintenance page gives a focused view of a core capability."],
              ["03", "Consider", "The sustainability page gives this product theme its own space."],
              ["04", "Evaluate", "The pricing page supports a visitor assessing fit and next steps."],
            ].map(([number, title, text]) => <li key={number} className="relative min-w-0 rounded-xl border border-[#2B120A]/12 bg-white/70 p-4 sm:p-5"><span className="font-inter text-sm text-[#AF2500]">{number}</span><h4 className="mt-2 font-semibold text-[#2B120A]">{title}</h4><p className="mt-2 text-sm leading-relaxed text-[#2B120A]/75">{text}</p></li>)}
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-[#2B120A]/65">This is a case-study interpretation of the page set, not a recovered sitemap, validated visitor journey, or original project artifact.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <CaseStudyImage src="/icmms/landing-page.svg" alt="Full-page ICMMS landing page design" title="ICMMS landing page" caption="The entry page introduces the product and establishes the visual direction." className="mx-auto max-h-[650px] w-full object-contain" />
          <CaseStudyImage src="/icmms/maintenance-page.svg" alt="Full-page ICMMS maintenance capability page" title="Maintenance capability" caption="A deeper page gives a focused view of a core product area." className="mx-auto max-h-[650px] w-full object-contain" />
          <CaseStudyImage src="/icmms/sustainability-page.svg" alt="Full-page ICMMS sustainability page design" title="Sustainability story" caption="A distinct page gives sustainability its own place in the product narrative." className="mx-auto max-h-[650px] w-full object-contain" />
          <CaseStudyImage src="/icmms/pricing-page.svg" alt="Full-page ICMMS pricing page design" title="Pricing and evaluation" caption="Pricing content supports visitors evaluating fit and next steps." className="mx-auto max-h-[650px] w-full object-contain" />
        </div>
      </CaseStudySection>

      <CaseStudySection id="decisions" number="03" eyebrow="Design decisions" title="Explain outcomes first, then reveal the system behind them." intro="These design rationales are a retrospective reading of the supplied website artifacts and the recorded project scope. The repository does not contain a decision log or earlier alternatives, so they are not presented as documented research conclusions.">
        <div className="grid gap-4">
          <Decision title="01 · Lead with an understandable promise" problem="A first-time visitor may not know the category or why the platform matters." choice="Use a direct landing-page story to establish the product’s purpose before asking visitors to parse its modules." implication="This reduces the amount of context needed to begin exploring, while the detailed pages remain available for visitors who need proof and specifics." alternative="A feature-first index could expose breadth sooner, but would make the visitor do more work to understand the product as a whole." />
          <Decision title="02 · Separate distinct questions into focused pages" problem="Capability, sustainability, and pricing content answer different evaluation questions." choice="Give these topics dedicated page treatments that remain part of one coherent site." implication="Visitors can scan a relevant topic without losing the shared visual language; the additional pages also increase navigation and content-maintenance needs." alternative="One long all-in-one page would reduce navigation, but could bury the detail and make the story harder to scan." />
          <Decision title="03 · Use responsive hierarchy as a product feature" problem="A dense enterprise story can become difficult to read when a desktop layout is simply compressed." choice="Design a responsive experience with clear sections, contrast, and controlled content density." implication="The same product narrative can work across device sizes, though the available artifacts do not include breakpoint specifications or mobile test results." alternative="A desktop-first page could preserve more information at once, but would increase small-screen scanning and navigation effort." />
        </div>
      </CaseStudySection>

      <CaseStudySection id="delivery" number="04" eyebrow="Contribution, delivery & evidence" title="Carry the website from structure through build." intro="The project record identifies me as the website designer and builder, with ownership spanning information architecture, visual direction, responsive layouts, interactions, and copy. Specific collaborator names, code stack details, testing, and post-launch outcomes are not recorded in the portfolio.">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="My contribution" tone="accent">I shaped the site structure and content, developed the visual direction, designed responsive pages and interactions, and built the website. This describes my recorded scope; it does not assign unrecorded work to teammates.</TextCard>
          <TextCard title="What the artifacts establish">The supplied exports document four public-facing page designs. They show the website’s breadth and presentation; they do not establish conversion, acquisition, reduced support effort, or how visitors used the site.</TextCard>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="Validation that would strengthen this story">Compare first-time visitor comprehension of the product before and after the site, test whether people can find the page that answers their question, and review mobile readability with representative prospects.</TextCard>
          <TextCard title="What I would measure next">Track qualified next-step actions and page-level engagement only after defining what counts as a useful product inquiry. Pair analytics with short usability sessions so a click is not mistaken for understanding.</TextCard>
        </div>
        <EvidenceLabel kind="documented">The portfolio record supports an end-to-end website design/build contribution. No quantitative outcome or usability result is documented here.</EvidenceLabel>
      </CaseStudySection>
    </CaseStudyFrame>
  )
}

function Decision({ title, problem, choice, implication, alternative }: { title: string; problem: string; choice: string; implication: string; alternative: string }) {
  return <article className="case-study-decision-card grid gap-4 rounded-xl border border-[#2B1205]/10 bg-[#F9F8ED] p-5 sm:grid-cols-[0.8fr_1.2fr] sm:p-6"><div><h3 className="font-semibold leading-snug">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#2B1205]/80"><strong>Problem · </strong>{problem}</p></div><div className="grid gap-3 sm:grid-cols-2"><p className="text-sm leading-relaxed text-[#2B1205]/80"><strong className="text-[#AF2500]">Choice · </strong>{choice}</p><p className="text-sm leading-relaxed text-[#2B1205]/80"><strong className="text-[#AF2500]">Implication · </strong>{implication}</p><p className="text-sm leading-relaxed text-[#2B1205]/70 sm:col-span-2"><strong>Alternative considered in retrospect · </strong>{alternative}</p></div></article>
}
