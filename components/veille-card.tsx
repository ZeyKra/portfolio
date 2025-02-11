import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface VeilleCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

export function VeilleCard({ title, description, imageUrl, link }: VeilleCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="aspect-video relative">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

