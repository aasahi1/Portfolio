import { CaseStudyAnchorNav, CaseStudyFrame, CaseStudyHero, CaseStudyImage, CaseStudySection, EvidenceLabel, TextCard } from "@/components/case-studies/CaseStudyPrimitives"

const contents = [
  { href: "context", label: "Context & problem" },
  { href: "decisions", label: "Product decisions" },
  { href: "structure", label: "Information structure" },
  { href: "evidence", label: "Evidence & next steps" },
]

export function GrandmasBakeryCaseStudy() {
  return (
    <CaseStudyFrame id="grandmas-bakery">
      <CaseStudyHero
        index="05"
        eyebrow="Small business operations · Product concept"
        title="Grandma’s Bakery"
        summary="Turning daily bakery operations into clearer decisions. Ingredient & Sales brings the information a small bakery owner may need to check into one proposed workspace."
        image="/grandmas-bakery/dashboard.svg"
        imageAlt="Grandma’s Bakery dashboard concept showing sales, tasks, and operational priorities"
        imageCaption="Supplied full-page dashboard design export. The sales figures are illustrative, not live business data."
        supportingImages={[{ src: "/grandmas-bakery/task-dashboard.svg", alt: "Grandma?s Bakery task dashboard" }, { src: "/grandmas-bakery/inventory-expiry.svg", alt: "Grandma?s Bakery inventory and expiry screen" }]}
        liveUrl="https://aasahi1.github.io/Ingredient-Cost-Tracking-Interface/#main"
        liveLabel="Open live prototype"
        metadata={[
          { label: "Format", value: "5-hour hackathon" },
          { label: "My role", value: "Lead designer & front-end developer" },
          { label: "Team", value: "Janice Li (graphic design) · Jorger Rubio (backend) · Nyle Faridi (marketing research & content)" },
          { label: "Tools", value: "Figma · React · Python · Illustrator · Canva" },
          { label: "Platform", value: "Web concept" },
          { label: "Evidence", value: "Prototype details need review" },
        ]}
      />

      <CaseStudyAnchorNav items={contents} />

      <CaseStudySection id="context" number="01" eyebrow="Context & problem" title="Make the next operational decision easier to see." intro="The project brief describes a bakery owner balancing stock, suppliers, costs, sales, and plans for the next special. The challenge is to connect those concerns without turning a quick check into another bookkeeping task.">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="My contribution" tone="accent">I led product design and front-end development during the five-hour hackathon, shaping the concept and building the interface direction.</TextCard>
          <TextCard title="Team collaboration">The project record lists Janice Li on graphic design, Jorger Rubio on backend, and Nyle Faridi on marketing research and content. These are the recorded work areas; the repository does not describe a more detailed task split.</TextCard>
        </div>
        <p className="text-base leading-relaxed text-[#2B120A]/85">The brief’s “Grandma’s Wishlist” frames a series of connected situations: cream becomes more expensive, ingredients approach expiry, a supplier delivery is expected, or an idea for a seasonal flavour needs to be weighed against cost and uncertain demand. Today, the scenario describes information split across handwritten notes, receipts, memory, and a standalone payment terminal.</p>
        <EvidenceLabel kind="hypothesis">These are problem scenarios from the project brief, not documented interviews with bakery owners. The need to bring the information together is a product hypothesis until tested with people who run small bakeries.</EvidenceLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="The decision behind the screens" tone="soft">When time is limited, what needs attention first—and what information is needed before acting? The interface concept groups operational signals around decisions such as replenish, compare, prepare, and review.</TextCard>
          <TextCard title="The design tension">A bakery needs enough detail to compare quantities, costs, dates, and sales. Putting all of it on one dashboard can create a dense surface that is harder to scan. The design challenge is to make urgency legible without making every data point equally loud.</TextCard>
        </div>
        <p className="text-xs leading-relaxed text-[#2B120A]/70">The repository does not include the original prompt or research notes. The scenarios above come from the project brief, not interviews with bakery owners.</p>
      </CaseStudySection>

      <CaseStudySection id="decisions" number="02" eyebrow="Design decisions" title="Connect signals to actions, not just to more data." intro="The project overview points toward an operational workspace. These decision narratives are first-pass interpretations of that direction; confirm that they match the screens and choices made during the hackathon.">
        <div className="grid gap-4">
          <Decision title="01 · Surface what may need attention" problem="Low stock, an approaching expiry, an overdue bill, and an incoming delivery compete for a busy owner’s attention." choice="A dashboard could sort or group alerts by urgency and connect each signal to its next action, so the owner can scan first and open detail only when needed." tradeoff="A high-priority list is faster to scan, but a fixed priority rule can hide context. A full inventory table preserves detail but asks the owner to search for the exception." validate="Ask bakery owners to locate an expiring item, an item to reorder, and the reason each was flagged. Observe omissions and whether they agree with the priority." />
          <Decision title="02 · Keep cost and stock in the same decision" problem="A price change is difficult to act on if the owner must separately find supplier prices, on-hand quantity, and the product that uses the ingredient." choice="The concept can connect ingredient quantity and supplier cost to the operational choice—compare a source, adjust a purchase, or revisit a product’s cost." tradeoff="More comparison context can support a decision, while too many columns and price histories can slow entry and scanning. A simpler item view may be easier to use during a delivery." validate="Give participants a realistic price-change scenario and ask them to explain which information they used and what action they would take. Do not treat a correct arithmetic result as proof the workflow is understandable." />
          <Decision title="03 · Treat sales as planning context" problem="Sales and sell-through can inform what to prepare, but past sales alone do not explain ingredient availability, seasonality, or changing customer interest." choice="The brief connects sales information with weekly-special planning and potential returning flavours. Customer voting is a proposed input, not evidence of demand." tradeoff="Combining sales, stock, and interest may make planning more informed, but can imply a forecast the prototype does not support." validate="Test whether an owner can distinguish recorded sales from illustrative data and describe what additional context they would need before planning production." />
          <Decision title="04 · Keep payment integration in the future column" problem="The brief describes manual reconciliation between a standalone Verifone terminal and a handwritten sales ledger." choice="A Verifone connection is a proposed direction for reducing duplicated entry; the supplied project notes explicitly say displayed sales figures are illustrative and are not connected to Verifone." tradeoff="Integration might reduce manual reconciliation, but raises feasibility, data quality, permissions, and error-recovery questions. A prototype should not imply a live connection." validate="First map the current reconciliation task with an owner. Then assess integration feasibility and test a clearly labeled, non-connected concept before making an implementation claim." />
        </div>
        <EvidenceLabel kind="proposal">These decision rationales are retrospective analysis of the supplied concept. The project record does not show a comparison test or participant feedback.</EvidenceLabel>
      </CaseStudySection>

      <CaseStudySection id="structure" number="03" eyebrow="Information structure" title="A task path through the operational picture." intro="The project brief groups work across inventory, sales, specials, purchasing, supplier activity, bills, and payments. The flow below is a case-study model derived from that brief—not a verified map of the current prototype navigation.">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Notice", "Review low stock, expiry risks, deliveries, or bills that may need attention."],
            ["02", "Understand", "Open the relevant ingredient, supplier, cost, or sales context."],
            ["03", "Decide", "Compare a possible purchase or consider what to prepare next."],
            ["04", "Record", "Update the relevant operational record; any payment integration remains unverified."],
          ].map(([number, title, text]) => <li key={number} className="rounded-xl border border-[#2B120A]/20 bg-[#94B86D]/20 p-5"><span className="font-inter text-sm text-[#AF2500]">{number}</span><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#2B120A]/85">{text}</p></li>)}
        </ol>
        <p className="text-xs leading-relaxed text-[#2B120A]/70">This is a case-study model based on the project brief, not a verified map of the deployed prototype’s navigation.</p>
        <div className="grid gap-5 md:grid-cols-2">
          <CaseStudyImage src="/grandmas-bakery/task-dashboard.svg" alt="Grandma’s Bakery task dashboard showing daily operational actions" title="Daily task view" caption="A task-oriented home view gives the concept a practical starting point for the day." className="mx-auto max-h-[600px] w-full object-contain" />
          <CaseStudyImage src="/grandmas-bakery/inventory-expiry.svg" alt="Grandma’s Bakery inventory and expiry management screen" title="Inventory and expiry" caption="Ingredient quantities, expiry information, and supplier context appear together in this design export." className="mx-auto max-h-[600px] w-full object-contain" />
          <CaseStudyImage src="/grandmas-bakery/recipes.svg" alt="Grandma’s Bakery recipe and ingredient cost view" title="Recipes and costs" caption="The recipe view connects ingredients to recipe cost; the underlying records are illustrative." className="mx-auto max-h-[600px] w-full object-contain" />
          <CaseStudyImage src="/grandmas-bakery/flavour-week.svg" alt="Grandma’s Bakery flavour of the week planning screen" title="Plan a weekly flavour" caption="A separate flow explores selecting and presenting a weekly special." className="mx-auto max-h-[600px] w-full object-contain" />
          <CaseStudyImage src="/grandmas-bakery/sales-and-votes.svg" alt="Grandma’s Bakery sales and customer flavour voting screen" title="Sales and flavour votes" caption="Sales and voting concepts are shown together; the portfolio does not establish that these values came from a live payment system." className="mx-auto max-h-[600px] w-full object-contain" />
          <CaseStudyImage src="/grandmas-bakery/dashboard.svg" alt="Grandma’s Bakery operational dashboard with cost and sales summaries" title="Operational overview" caption="A broader overview combines cost and sales summaries with operational tasks." className="mx-auto max-h-[600px] w-full object-contain" />
        </div>
      </CaseStudySection>

      <CaseStudySection id="evidence" number="04" eyebrow="Outcome, validation & reflection" title="An operational concept whose impact still needs testing." intro="The project artifacts include full-page interface design exports and a prototype link. They do not establish owner adoption, time saved, waste reduced, or a live payment integration.">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="What is supported" tone="accent">The project is described as an ingredient and sales concept created in a five-hour hackathon. The brief names inventory, costs, sales, purchasing, bills, weekly specials, and a proposed Verifone integration. It also states that displayed sales figures are illustrative and are not connected to Verifone.</TextCard>
          <TextCard title="What is not established">No user-testing results, owner feedback, usage metrics, revenue change, waste reduction, time savings, or live payment integration are documented here. Prototype behavior should be checked before any feature is described as working.</TextCard>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextCard title="Proposed usability check">With bakery owners, test finding an expiring ingredient, deciding what to reorder, locating a supplier cost change, and checking an upcoming delivery or bill. Record task completion, time, errors, and whether people can explain the signal they acted on. These are future measures, not results.</TextCard>
          <TextCard title="Next iteration">I would first validate the daily priorities with bakery owners, then test whether the information grouping supports real busy-period decisions. I would investigate weekly-special planning and the data and permission requirements for any payment integration only after the core workflow is clear.</TextCard>
        </div>
        <EvidenceLabel kind="verify">To complete this story, add the original brief, confirm the team role names and responsibilities, and share a personal retrospective. Keep all sample sales and inventory records labeled as illustrative.</EvidenceLabel>
      </CaseStudySection>
    </CaseStudyFrame>
  )
}

function Decision({ title, problem, choice, tradeoff, validate }: { title: string; problem: string; choice: string; tradeoff: string; validate: string }) {
  return <article className="case-study-decision-card grid gap-4 rounded-xl border border-[#2B120A]/12 bg-[#F9F8ED] p-5 sm:grid-cols-[0.8fr_1.2fr] sm:p-6"><div><h3 className="font-semibold leading-snug text-[#2B120A]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#2B120A]/85">{problem}</p></div><div className="grid gap-3 sm:grid-cols-2"><div><p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#AF2500]">Direction</p><p className="mt-1 text-sm leading-relaxed text-[#2B120A]/85">{choice}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#AF2500]">Trade-off</p><p className="mt-1 text-sm leading-relaxed text-[#2B120A]/85">{tradeoff}</p></div><div className="sm:col-span-2"><p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#AF2500]">Evidence to seek · proposed</p><p className="mt-1 text-sm leading-relaxed text-[#2B120A]/85">{validate}</p></div></div></article>
}
