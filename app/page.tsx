import { SocialLinks } from "@/components/social-links"
import { TechStack } from "@/components/tech-stack"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"
import { Technologies } from "@/components/technologies"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 pt-20 transition-colors">
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-8">
          <div className="space-y-6">
            <h1 className="font-feather text-4xl font-bold tracking-tight md:text-6xl">
              Adryan Xls
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
  )
}

