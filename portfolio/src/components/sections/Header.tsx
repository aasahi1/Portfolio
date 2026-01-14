import { Button } from "@/components/ui/button"
import ResumeIcon from "@/assets/icon-resume.svg?react"

export function Header() {
  const navItems = ["About", "Portfolio", "Skills", "Art", "Contact"]

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-brand-yellow shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="text-4xl font-black text-text-main tracking-tight">Amna Sahi.</div>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-black text-text-main hover:text-text-accent transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        <Button className="bg-text-main text-brand-yellow hover:bg-text-main/90 h-7 px-4 gap-3 font-medium rounded-sm shadow-sm">
          <ResumeIcon className="w-3.5 h-3.5" />
          <span className="text-[12.25px]">Resume</span>
        </Button>
      </div>
    </header>
  )
}