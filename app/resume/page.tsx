import { CVTimeline } from "@/components/cv-timeline"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mon CV | Parcour",
  description:
    "Découvrez mon CV détaillant mon parcours professionnel, mes compétences en développement web et mes expériences en tant qu'étudiant en BTS SIO SLAM.",
  keywords: [
    "CV",
    "développeur web",
    "BTS SIO",
    "SLAM",
    "React",
    "TypeScript",
    "Next.js",
    "compétences techniques",
    "expérience professionnelle",
    "portfolio",
  ],
  authors: [{ name: "Adryan Cales" }],
  openGraph: {
    title: "Mon CV | Adryan Cales",
    description: "Découvrez mon parcours professionnel et mes compétences en développement web",
    type: "website",
  },
}

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background p-8 pt-20 transition-colors">
      <div className="mx-auto max-w-3xl space-y-16">
        <div>
          <h1 className="font-feather text-4xl font-bold tracking-tight md:text-6xl mb-4">
            Mon CV
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Vue rapide de mon parcour scolaire et mes compétences<br/>
            Le cv complet peut être téléchargé depuis l&apos;accueil
          </p>
        </div>
        
        <section>
          <h2 className="font-feather text-2xl font-bold mb-6">Experiences & Etudes</h2>
          <CVTimeline />
        </section>

        <section>
          <h2 className="font-feather text-2xl font-bold mb-6">Compétences</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Maitrise du JavaScript, TypeScript, and Python</li>
            <li>Expperience avec React, Next.js, et Node.js</li>
            <li>Familier avec mes modèles de base de donnés comme MariaDB & Mysql</li>
            <li>Utilisation de Git comme outils de versioning</li>
          </ul>
        </section>

      </div>
    </main>
  )
}

