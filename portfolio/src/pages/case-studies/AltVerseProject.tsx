import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

const tools = [
  { label: "TouchDesigner", href: "https://www.linkedin.com/company/touchdesigner/" },
  { label: "Python", href: "https://www.linkedin.com/company/learn-python-programming/" },
  { label: "Adobe Photoshop", href: "https://www.linkedin.com/company/adobe/" },
  { label: "Adobe Illustrator", href: "https://www.linkedin.com/company/adobe/" },
]

export function AltVerseProject() {
  return (
    <article className="relative isolate w-full flex-1 overflow-hidden bg-background pb-16 pt-8 sm:pb-20 md:pt-12">
      <div className="container relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <Link to="/projects" className="mb-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white/60 px-4 text-sm font-bold text-text-main transition-colors hover:bg-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-main">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Projects
        </Link>

        <header className="grid items-center gap-8 rounded-[2rem] bg-[#f8e8f7] p-5 sm:gap-12 sm:p-8 md:grid-cols-[1.05fr_.95fr] md:p-10">
          <div className="max-w-xl py-2 sm:py-4">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-text-accent">Immersive exhibition · THEMUSEUM · 2025</p>
            <h1 className="text-5xl font-black leading-[.98] tracking-tight text-text-main sm:text-6xl lg:text-7xl">ALT-VERSE</h1>
            <p className="mt-5 text-xl font-bold leading-snug text-text-main sm:text-2xl">An interactive art display exploring surveillance, AI, and humanity.</p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-text-main/85 sm:text-lg">
              My first immersive art exhibition, presented at <a className="font-bold underline decoration-text-accent underline-offset-4 hover:text-text-accent" href="https://www.linkedin.com/company/themuseum/" target="_blank" rel="noreferrer">THEMUSEUM</a> in Kitchener.
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-text-main/15 py-5 sm:grid-cols-3">
              <div><dt className="text-[10px] font-black uppercase tracking-[.14em] text-text-main/65">My role</dt><dd className="mt-1 text-sm font-bold leading-snug text-text-main">Immersive artist &amp; space planning</dd></div>
              <div><dt className="text-[10px] font-black uppercase tracking-[.14em] text-text-main/65">Exhibition</dt><dd className="mt-1 text-sm font-bold leading-snug text-text-main">February 12–23, 2025</dd></div>
              <div><dt className="text-[10px] font-black uppercase tracking-[.14em] text-text-main/65">Medium</dt><dd className="mt-1 text-sm font-bold leading-snug text-text-main">Interactive projection</dd></div>
            </dl>
          </div>
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-white/65 p-3 sm:min-h-[440px] sm:p-5">
            <img src="/alt-verse/alt-verse-exhibition.jpg" alt="Poster for ALT-VERSE, an immersive art exhibition at THEMUSEUM in February 2025" className="max-h-[560px] w-full rounded-lg object-contain transition-transform duration-500 hover:scale-[1.015]" fetchPriority="high" />
          </div>
        </header>

        <section className="grid gap-8 py-12 sm:py-16 md:grid-cols-[.75fr_1.25fr] md:gap-14" aria-labelledby="alt-verse-about">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-text-accent">About the work</p>
            <h2 id="alt-verse-about" className="mt-3 text-3xl font-black leading-tight tracking-tight text-text-main sm:text-4xl">A room that invites people to look closer.</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-text-main/85 sm:text-lg">
            <p>Using TouchDesigner, Python, Adobe Photoshop, and Illustrator, I created an interactive art display that touched on questions of surveillance, AI, and humanity.</p>
            <p>I spent time researching and planning for the scale of the exhibition space, helping the work translate into an immersive, shared experience.</p>
            <div className="flex flex-wrap gap-2 pt-1" aria-label="Tools used">
              {tools.map((tool) => <a key={tool.label} href={tool.href} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-brand-yellow/55 px-4 text-sm font-bold text-text-main transition-colors hover:bg-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-main">{tool.label}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>)}
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 sm:gap-6" aria-label="ALT-VERSE exhibition installation photographs">
          <img src="/alt-verse/alt-verse-installation-1.jpg" alt="Visitors standing among interactive projections in the dim ALT-VERSE gallery" loading="lazy" className="h-full min-h-64 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.01] sm:min-h-80" />
          <img src="/alt-verse/alt-verse-installation-2.jpg" alt="Projection artwork covering the walls as visitors explore the ALT-VERSE exhibition" loading="lazy" className="h-full min-h-64 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.01] sm:min-h-80" />
        </section>

        <aside className="mt-12 rounded-2xl bg-brand-light/30 p-6 sm:mt-16 sm:p-8">
          <p className="max-w-3xl text-base font-medium leading-relaxed text-text-main/85 sm:text-lg">I’m so thankful to everyone who attended the show, my instructor Xuan Ye, and all the technicians who worked tirelessly to install these pieces.</p>
        </aside>

        <div className="mt-10 border-t border-text-main/15 pt-6 text-right">
          <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-black text-text-main underline decoration-text-accent underline-offset-4 hover:text-text-accent">Explore all Projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  )
}
