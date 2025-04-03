import { ProjectDetail, type ProjectDetailProps } from "@/components/project-detail"

const projects: ProjectDetailProps[] = [
  {
    id: "txek-app",
    title: "Txek App",
    description: "Application mobile pour compter les points du jeu de cartes Txek avec des fonctionnalités de statistiques et de suivi des joueurs.",
    longDescription:
      "Ce projet est une application mobile pour compter les points du jeu de cartes Txek. Elle permet aux utilisateurs d'enregistrer leurs historiques de parties lorsque ceux-ci sont connectés . Elle est construite avec React-Native et Expo.",
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/placeholder.svg?height=300&width=600`,
    technologies: ["React-Native", "Expo"],
    githubUrl: "https://github.com/ZeyKra/Txek-app",
    features: [
      "Catégorisation automatique des tâches utilisant le traitement du langage naturel",
      "Analyses et aperçus de productivité",
      "Vues et filtres de tâches personnalisables",
      "Synchronisation multi-plateformes",
    ],
  },
  {
    id: "txek-api",
    title: "Txek API ",
    description: "Api rest pour l'application de comptage de Point du jeu Txek avec une base de donnés SurrealDB.",
    longDescription:
      "Ce projet est une api pour l'application de comptage de Point du jeu Txek avec une base de donnée SurrealDB. Elle permet aux utilisateurs de créer des comptes, de créer des projets, de créer des tâches et de les gérer. Elle est construite avec Next.js et utilise la base de donnée SurrealDB. ",
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/placeholder.svg?height=300&width=600`,
    technologies: ["Next.js", "Typescript", "SurrealDB"],
    githubUrl: "https://github.com/ZeyKra/Txek-api",
    features: [
      "Creation, modification et suppression de comptes joueurs",
      "Creation, modification et suppression de Parties & Rounds",
      "Statistiques des Joueurs",
    ],
  },
  {
    id: "txek-admin",
    title: "Txek Admin",
    description: "Interface d'administration pour l'api ainsi que la base de donnée.",
    longDescription:
      "Ce projet est une interface d'administration pour l'api ainsi que la base de donnée. Elle permet aux administrateurs de gérer les utilisateurs, les projets et les tâches. Elle est construite avec Next.js et utilise la base de donnée SurrealDB. ",
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/placeholder.svg?height=300&width=600`,
    technologies: ["Next.js", "Typescript", "shadcn/ui"],
    githubUrl: "https://github.com/ZeyKra/",
    features: [
      "Interface d'administration pour l'api",
      "Interface d'administration pour la base de donnée",
      "Statistiques et graphiques sur les Joueurs",
      "Gestion des Joueurs"
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background p-8 pt-20 transition-colors">
      <div className="mx-auto max-w-5xl space-y-16">
        <div>
          <h1 className="font-feather text-4xl font-bold tracking-tight md:text-6xl mb-4">Mes projets</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Vue détaillé des mes projets clés et leurs implémentations techniques
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} id={project.id}>
              <ProjectDetail {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

