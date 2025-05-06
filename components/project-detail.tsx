import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export interface ProjectDetailProps {
  id: string
  title: string
  description: string
  longDescription: string
  imageUrl: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  features: string[]
}

export function ProjectDetail({
  title,
  description,
  longDescription,
  imageUrl,
  technologies,
  liveUrl,
  githubUrl,
  features,
}: ProjectDetailProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={imageUrl || "/placeholder.svg?height=300&width=600"} alt={title} layout="fill" objectFit="cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-bold mb-2">Vue d&apos;ensemble</h3>
          <p>{longDescription}</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Fonctionalités clés</h3>
          <ul className="list-disc list-inside space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Technologie utilisées</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {githubUrl && (
          <Button variant="outline" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code Source
            </Link>
          </Button>
        )}
        {liveUrl && (
          <Button asChild>
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

