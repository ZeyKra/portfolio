import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "txek-app",
    title: "Txek App",
    description: "Une application mobile de comptage de Point du jeu Txek",
    technologies: ["React-Native", "Expo"],
  },
  {
    id: "txek-api",
    title: "Txek Api",
    description: "Une api pour l'application de comptage de Point du jeu Txek avec une base de donnés SurrealDB.",
    technologies: ["Next.js", "SurrealDB"],
  },
  {
    id: "txek-admin",
    title: "Txek Admin",
    description: "Une interface d'administration pour gérer la base de données de l'api Txek.",
    technologies: ["Next.js", "React", "Typescript"],
  },
]

export function Projects() {
  return (
    <section className="space-y-4">
      <h2 className="font-feather text-3xl font-bold">Mes Projets</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/projects#${project.id}`}>
                  Voir Plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

