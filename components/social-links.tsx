import { Github, Linkedin, Download  } from 'lucide-react'
import Link from "next/link"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ZeyKra",
    label: "GitHub",
    size: "h-5 w-5",
    showText: true
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/adryan-cales-569460280/",
    label: "LinkedIn",
    size: "h-5 w-5",
    showText: true
  },
  {
    icon: Download,
    href: `/cv.pdf`, // Chemin vers le fichier CV dans le dossier public
    label: "Telecharger mon cv",
    size: "h-5 w-5",
    showText: true,
    download: true // Ajouter l'attribut download
  }
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="rounded-lg bg-muted p-2.5 transition-colors hover:bg-muted/80 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
          download={link.download} // Ajouter l'attribut download conditionnellement
        >
          <link.icon className={link.size} />
          {link.showText ? (
            <span className="text-sm font-medium">{link.label}</span>
          ) : (
            <span className="sr-only">{link.label}</span>
          )}
        </Link>
      ))}
    </div>
  )
}

