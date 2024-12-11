import { Github, Linkedin,  } from 'lucide-react'
import Link from "next/link"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ZeyKra_",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/adryan-cales-569460280/",
    label: "LinkedIn",
  }
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="rounded-lg bg-muted p-2.5 transition-colors hover:bg-muted/80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon className="h-5 w-5" />
          <span className="sr-only">{link.label}</span>
        </Link>
      ))}
    </div>
  )
}

