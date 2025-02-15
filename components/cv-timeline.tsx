import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type TimelineItem = {
  title: string;
  date: string;
  description: string[];
}

const timelineItems: TimelineItem[] = [
  {
    title: "BTS Sience informatique aux Organisations | Slam",
    date: "2023 - Maintenant",
    description : ["Concevoir et développer une solution applicative", "Assurer la maintenance corrective ou évolutive d’une solution applicative", "Gérer les données"]
  },
  {
    title: "Baccalauréat général",
    date: "2020 - 2023",
    description : ["NSI, Mathématiques"]
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
              <ul className="list-disc ml-4">               
              {item.description.map((elm, index) => (
                <li key={index}>{elm}</li>
              ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

