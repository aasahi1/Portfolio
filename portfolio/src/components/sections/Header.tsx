import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ResumeIcon from "@/assets/icon-resume.svg?react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: "Portfolio", path: "/projects" },
    { name: "Art", path: "/art" },
    { name: "Contact", path: "/contact" },
  ]

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-brand-yellow shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 sm:px-12">
        
        {/* --- LOGO / NAME --- */}
        <Link 
          to="/" 
          className="group text-3xl sm:text-4xl font-black text-text-main tracking-tight transition-none"
        >
          <span className="group-hover:text-text-accent transition-colors duration-300">
            Amna Sahi
          </span>
          <span className="text-text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === "/projects" && location.pathname.startsWith("/projects"))
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base lg:text-lg font-black tracking-tight transition-colors ${
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
            className="hidden sm:flex bg-text-main text-brand-yellow hover:bg-brand-yellow hover:text-text-main h-8 px-4 gap-3 font-bold rounded-sm shadow-sm transition-all"
          >
            <a href="/Amna_Sahi_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <ResumeIcon className="w-4 h-4" />
              <span className="text-sm font-black">Resume</span>
            </a>
          </Button>

          <button 
            className="md:hidden text-text-main p-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-brand-yellow border-t border-text-main/10 shadow-xl py-6 px-6 space-y-4 flex flex-col animate-in slide-in-from-top-4 duration-200">
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
