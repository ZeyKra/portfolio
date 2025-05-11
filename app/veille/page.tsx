import { VeilleCard } from "@/components/veille-card"

const VeillePosts = [
  {
    title: "Feedly",
    description:"Suivi des dernières actualités, tendances, innovations et analyses dans le domaine de ia, à travers des sources fiables et spécialisées.",
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/feedly.jpg?height=200&width=300`,
    link: "https://feedly.com/",
  },
  {
    title: "Youtube",
    description:"Suivis des mise a jour de frameworks, langages, outils et technologies en IA, graces aux chaines comme Fireship, Th3eo, ThePrimeTime",
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/youtube.jpg?height=200&width=300`,
    link: "https://www.youtube.com/",
  },
  {
    title: "Twitter/X",
    description:"Suivi des dernières actualités, de certaines technologies, des nouveau repo github a partir de comptes tels que @ThePrimeTime, @GithubProjects",
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/x.png?height=200&width=300`,
    link: "https://x.com/",
  }
]

export default function VeillePage() {
  return (
    <main className="min-h-screen bg-background p-8 pt-20 transition-colors">
      <div className="mx-auto max-w-6xl space-y-8">
        <h1 className="font-feather text-4xl font-bold tracking-tight md:text-6xl mb-4">Mes passions et ma veille technologique</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Pour rester à jour dans le domaine du développement web, j&apos;utilise plusieurs outils et plateformes. Je suis régulièrement des newsletters techniques, 
          consulte des sites spécialisés comme Dev.to et Medium, et participe à des communautés sur Discord et GitHub. 
          Je m&apos;informe également via Twitter/X où je suis des développeurs influents et des comptes tech. Pour organiser ces informations, 
          j&apos;utilise Notion comme base de connaissances personnelle.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VeillePosts.map((post, index) => (
            <VeilleCard key={index} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}

