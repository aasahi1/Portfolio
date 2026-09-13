import { Outlet, Link } from "react-router-dom"
import { Header } from "./sections/Header"
import CloverFooter from "@/assets/clover-footer.svg?react"

export function Layout() {
  const footerLinks = [
    { name: "About", path: "/#about" },
    { name: "Portfolio", path: "/projects" },
    { name: "Skills", path: "/#skills" },
    { name: "Art", path: "/art" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <div className="bg-background min-h-screen flex flex-col w-full selection:bg-brand-yellow selection:text-text-main">
      <Header />
      <main className="relative pt-16 flex-1 w-full overflow-x-hidden flex flex-col">
        <Outlet />
      </main>
      <footer className="relative z-20 w-full pt-16 pb-24 bg-text-main text-brand-yellow text-center overflow-hidden border-t border-black/10">
        <CloverFooter className="absolute bottom-[-30px] left-[-30px] w-56 h-56 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <Link to="/" className="inline-block text-3xl sm:text-4xl font-black tracking-tight hover:text-white transition-colors">
            Amna Sahi<span className="text-text-accent">.</span>
          </Link>
          <p className="text-xs sm:text-sm font-medium opacity-80 max-w-md mx-auto">
            © 2026 Amna Sahi. Built with luck, code, and design intertwined.
          </p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-7 pt-4">
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-xs font-bold uppercase tracking-widest opacity-75 hover:opacity-100 hover:text-white transition-all py-1"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
