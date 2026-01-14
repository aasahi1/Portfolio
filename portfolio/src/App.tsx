import { Header } from "./components/sections/Header"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"
import { Art } from "./components/sections/Art"
import { Contact } from "./components/sections/Contact"
import CloverFooter from "@/assets/clover-footer.svg?react"
import CloverSide from "@/assets/clover-side.svg?react"

function App() {
  return (
    <div className="bg-background-sage">
      <Header />
      <main className="relative pt-16">
        {/* Global Floating Decorations */}
        <CloverSide className="absolute top-[800px] right-[-40px] w-32 opacity-20 pointer-events-none" />
        <CloverSide className="absolute top-[2200px] left-[-40px] w-48 opacity-20 pointer-events-none rotate-90" />
        
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Art />
        <Contact />
      </main>
      <footer className="relative py-20 bg-text-main text-brand-yellow text-center overflow-hidden">
        <CloverFooter className="absolute bottom-[-50px] left-[-50px] w-64 h-64 opacity-10" />
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <div className="text-4xl font-black tracking-tight">Amna Sahi.</div>
          <p className="text-sm font-medium opacity-80">© 2026 Amna Sahi. Built with luck, code, and design intertwined.</p>
          <div className="flex justify-center gap-6 pt-4">
            {["About", "Portfolio", "Skills", "Art", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
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