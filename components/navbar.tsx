import Link from 'next/link'
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-background/80 px-4 py-2 backdrop-blur-sm">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Acceuil
          </Link>
        </li>
        <li>
          <Link href="/enterprise" className="text-sm font-medium hover:text-primary">
            Entreprise
          </Link>
        </li>
        <li>
          <Link href="/resume" className="text-sm font-medium hover:text-primary">
            CV
          </Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}

