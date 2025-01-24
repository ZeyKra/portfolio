import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type TimelineItem = {
  title: string;
  date: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: "BTS Sience informatique aux Organisations | Slam",
    date: "2023 - Maintenant",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam asperiores ipsum provident porro tempora odit quia odio, aut minus, voluptatem reiciendis dolores impedit maxime incidunt molestiae similique molestias architecto eos!"
  }
]

export function CVTimeline() {
  return (
    <div className="space-y-8">
      {timelineItems.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="w-px h-full bg-border"></div>
            <div className="w-4 h-4 rounded-full bg-primary"></div>
          </div>
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{item.title}</span>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

