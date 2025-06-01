import { SocialLinks } from "@/components/social-links"
import { TechStack } from "@/components/tech-stack"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"
import { Technologies } from "@/components/technologies"
import { PersonStructuredData } from "@/components/structured-data"

// SEO metadata
export const metadata = {
  title: 'Adryan Cales - Portfolio',
  description: 'Portfolio personnel d\'Adryan Cales - Développeur passionné par la création de solutions innovantes',
  keywords: ['développeur', 'portfolio', 'web development', 'tech', 'innovation', 'adryan cales', 'adryan', 'cales', 'adryan cales portfolio', 'adryan cales web developer', 'adryan cales tech', 'adryan cales innovation', 'adryan cales portfolio web development', 'adryan cales portfolio tech', 'adryan cales portfolio innovation'],
  openGraph: {
    title: 'Adryan Cales - Portfolio',
    description: 'Portfolio personnel d\'Adryan Cales - Développeur passionné par la création de solutions innovantes',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function Home() {
  return (
    <>
      <PersonStructuredData
        name="Adryan cales"
        jobTitle="Développeur Web & Ingénieur Logiciel"
        image={process.env.URL + "/favicon-32x32.png"}
        url={process.env.URL || ""}
      />
      <main className="min-h-screen bg-background p-8 pt-20 transition-colors">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-8">
            <div className="space-y-6">
              <h1 className="font-feather text-4xl font-bold tracking-tight md:text-6xl">
                Adryan Cales
              </h1>
              <p className="text-lg text-muted-foreground">
                Déterminé à transformer des idées en solutions innovantes
              </p>
              <SocialLinks />
            </div>
            <TechStack />
          </div>
          <AboutMe />
          <Projects />
          <Technologies />
        </div>
      </main>
    </>
  )
}