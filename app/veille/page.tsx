import { VeilleCard } from "@/components/veille-card"

const VeillePosts = [
  {
    title: "Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium, eos quae laborum, soluta ea reiciendis, excepturi voluptatibus quo dolores quam voluptates. Ea ipsa pariatur voluptatum omnis est animi dolor!",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/ai-web-dev",
  },
  {
    title: "Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium, eos quae laborum, soluta ea reiciendis, excepturi voluptatibus quo dolores quam voluptates. Ea ipsa pariatur voluptatum omnis est animi dolor!",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/ai-web-dev",
  },
  {
    title: "Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium, eos quae laborum, soluta ea reiciendis, excepturi voluptatibus quo dolores quam voluptates. Ea ipsa pariatur voluptatum omnis est animi dolor!",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/ai-web-dev",
  },
  {
    title: "Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium, eos quae laborum, soluta ea reiciendis, excepturi voluptatibus quo dolores quam voluptates. Ea ipsa pariatur voluptatum omnis est animi dolor!",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/ai-web-dev",
  },
  {
    title: "Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium, eos quae laborum, soluta ea reiciendis, excepturi voluptatibus quo dolores quam voluptates. Ea ipsa pariatur voluptatum omnis est animi dolor!",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/ai-web-dev",
  },
  {
    title: "Lorem ipsum dolor",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium, eos quae laborum, soluta ea reiciendis, excepturi voluptatibus quo dolores quam voluptates. Ea ipsa pariatur voluptatum omnis est animi dolor!",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "https://example.com/ai-web-dev",
  },
]

export default function VeillePage() {
  return (
    <main className="min-h-screen bg-background p-8 pt-20 transition-colors">
      <div className="mx-auto max-w-6xl space-y-8">
        <h1 className="font-feather text-4xl font-bold tracking-tight md:text-6xl mb-4">Mes habitudes et outils de veilles</h1>
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

