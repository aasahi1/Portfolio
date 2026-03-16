import { Header } from "./components/sections/Header"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"
import { Art } from "./components/sections/Art"
import { Contact } from "./components/sections/Contact"
import CloverFooter from "@/assets/clover-footer.svg?react"

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="relative pt-16 overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Art />
        <Contact />
      </main>
      <footer className="relative py-14 bg-text-main text-brand-yellow text-center overflow-hidden">
        <CloverFooter className="absolute bottom-[-40px] left-[-40px] w-48 h-48 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 space-y-3">
          <div className="text-3xl font-black tracking-tight">Amna Sahi.</div>
          <p className="text-xs font-medium opacity-60 tracking-wide">
            © 2026 Amna Sahi — built with luck, code, and design intertwined.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {["About", "Portfolio", "Skills", "Art", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-black uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-white transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App