import { StandardCaseStudy, type StudyData } from "@/components/case-studies/StandardCaseStudy"

const data: StudyData = {
  id: "grandmas-bakery", index: "05", title: "Grandma’s Bakery", eyebrow: "Small business operations · Product concept", year: "Five-hour hackathon",
  intro: "An operations concept bringing bakery inventory, ingredient costs, sales, purchasing, and specials into one workspace.",
  images: [
    { src: "/grandmas-bakery/dashboard.svg", alt: "Grandma’s Bakery dashboard concept with sales and operational priorities", caption: "Interface design export; figures are illustrative." },
    { src: "/grandmas-bakery/inventory-expiry.svg", alt: "Grandma’s Bakery inventory and expiry screen", caption: "Concept view of ingredient inventory." },
  ], liveUrl: "https://aasahi1.github.io/Ingredient-Cost-Tracking-Interface/#main",
  overview: [
    { label: "Team", value: "Janice Li (graphic design), Jorger Rubio (backend), Nyle Faridi (marketing research and content), and me. Detailed task split is not recorded." },
    { label: "Timeline", value: "Five-hour hackathon." },
    { label: "Constraints", value: "Rapid concept work. Displayed sales figures are illustrative; no live Verifone payment integration is documented." },
    { label: "My role", value: "Lead designer and front-end developer." },
  ],
  sections: [
    { text: "Grandma’s Bakery is a hackathon concept for making the daily operational picture easier for a small bakery owner to review.", evidence: "documented" },
    { text: "The dashboard and inventory exports show the proposed workspace. Their sample records are illustrative, not live business or payment data." },
    { text: "The brief describes an owner balancing stock, suppliers, ingredient costs, sales, purchasing, bills, and weekly specials. It frames information as scattered across notes, receipts, memory, and a payment terminal.", evidence: "documented" },
    { text: "The team, five-hour duration, and my lead design/front-end role are recorded. The original prompt and detailed task split are not included." },
    { text: "When information is split across tools, it can be difficult to see what needs attention and what context is needed before acting. This is a problem scenario from the brief, not a finding from bakery-owner interviews.", evidence: "hypothesis" },
    { text: "No original wireframes or sketches are included. The screen exports show the proposed concept; add early artifacts and describe what changed if they exist.", evidence: "verify" },
    { text: "The challenge was surfacing urgency without making every data point equally prominent, while connecting stock, expiry, cost, supplier, and sales information to practical decisions." },
    { text: "The record contains no competitor research or visual reference sources. Add the references and explain their influence if these were part of the hackathon work.", evidence: "verify" },
    { text: "Nyle is listed for marketing research and content, but no research method, participants, or findings are recorded. Framing questions include: What does an owner need to check first? What context supports a reorder? These are not confirmed as direct research questions.", evidence: "verify" },
    { text: "No persona is included. The bakery owner in the brief is a scenario, not a validated research persona. Framing questions: Who runs the bakery? What decision do they need to make? What frustrates them? What barriers make that decision harder? Add documented goals, routines, and pain points if available.", evidence: "verify" },
    { text: "No research findings are documented, so a direct research-to-design relationship cannot be confirmed. The interface concept groups operational information around possible actions, a direction that needs validation with bakery owners.", evidence: "hypothesis" },
    { text: "The dashboard concept groups signals such as low stock, expiry, deliveries, and bills with operational tasks. Other screens connect ingredients with supplier cost, recipes, and weekly specials. These are visible design directions; the original decision record is not included.", cards: [{ title: "Connect signals to actions", text: "A task-oriented dashboard gives the concept a practical starting point for the day." }, { title: "Keep sample data clear", text: "Sales and inventory examples are illustrative; no payment terminal connection is documented." }], images: [{ src: "/grandmas-bakery/task-dashboard.svg", alt: "Grandma’s Bakery task dashboard with operational actions", caption: "Task dashboard concept; sample records are not live business data." }, { src: "/grandmas-bakery/flavour-week.svg", alt: "Grandma’s Bakery weekly flavour planning screen", caption: "Weekly special planning concept; no demand research is documented." }] },
    { text: "No usability test method, participants, tasks, or results are available. The project record does not establish whether owners could interpret or use the concept.", evidence: "verify" },
    { text: "A second challenge is how to represent sales and customer votes without implying reliable forecasting. The interface explores weekly-special planning, but the source and validity of sample data are not documented.", evidence: "hypothesis" },
    { text: "I led design and front-end development with a backend teammate and other collaborators. The portfolio does not describe component specifications, responsive behavior, developer feedback, or a formal handoff.", evidence: "verify" },
    { text: "A personal retrospective is not included. Add what I learned from the short hackathon and what I would prioritize after observing bakery owners handle real inventory and purchasing decisions.", evidence: "verify" },
  ],
}

export function GrandmasBakeryCaseStudy() { return <StandardCaseStudy data={data} /> }
