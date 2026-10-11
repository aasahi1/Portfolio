import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ResumeIcon from "@/assets/icon-resume.svg?react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Art", path: "/art" },
  ]

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-brand-yellow shadow-sm">
      <div className="container relative mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:px-[52px]">
        
        {/* --- LOGO / NAME --- */}
        <Link 
          to="/" 
          className="group text-[26px] md:text-[34px] font-black text-text-main tracking-tight transition-none"
        >
          <span className="group-hover:text-text-accent transition-colors duration-300">
            Amna Sahi
          </span>
          <span className="text-text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-4 md:flex xl:absolute xl:left-[523px] xl:gap-[35px]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === "/projects" && location.pathname.startsWith("/projects"))
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-bold tracking-tight transition-colors xl:text-[18px] ${
                  isActive ? "text-text-accent" : "text-text-main hover:text-text-accent"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden sm:flex h-[30px] w-[108px] gap-2 rounded-[7px] bg-text-main px-3 font-bold text-brand-yellow shadow-sm transition-all hover:bg-text-main/85"
          >
            <a href="/Amna_Sahi_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <ResumeIcon className="h-[14px] w-[14px]" />
              <span className="text-xs font-black">Resume</span>
            </a>
          </Button>

          <button
            className="relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center text-text-main md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="block" size={32} strokeWidth={2.5} /> : <Menu className="block" size={32} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden absolute top-16 left-0 w-full bg-brand-yellow border-t border-text-main/10 shadow-xl py-6 px-6 space-y-4 flex flex-col animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-text-main hover:text-text-accent transition-colors py-2"
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            className="w-full bg-text-main text-brand-yellow h-12 gap-3 font-bold rounded-sm"
          >
            <a href="/Amna_Sahi_Resume.pdf" target="_blank">
              <ResumeIcon className="w-5 h-5" />
              <span className="text-lg font-black">Resume</span>
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
