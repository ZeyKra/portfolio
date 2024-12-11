import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Txek",
    description: "Une infrastructure client serveur pour le jeu de carte Txek avec Application de comptage.",
    technologies: ["React", "Next.js", "TensorFlow"],
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia non facilis accusamus quam libero .",
    technologies: ["Lorem", "Ipsum", "Dolore"],
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia non facilis accusamus quam libero .",
    technologies: ["Lorem", "Ipsum", "Dolore"],
  }
]

export function Projects() {
  return (
    <section className="space-y-4">
      <h2 className="font-feather text-3xl font-bold">Mes Projets</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

