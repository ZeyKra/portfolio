import { Card } from "@/components/ui/card"
import { 
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiMysql,
  SiDocker,SiGit, 
} from 'react-icons/si'

import { DiJava, DiRust } from "react-icons/di"

const technologies = [
  { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
  { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
  { name: "React", color: "#61DAFB", icon: SiReact },
  { name: "Node.js", color: "#339933", icon: SiNodedotjs },
  { name: "Python", color: "#3776AB", icon: SiPython },
  { name: "Java", color: "#00599C", icon: DiJava},
  { name: "SQL", color: "#4479A1", icon: SiMysql },
  { name: "Docker", color: "#2496ED", icon: SiDocker },
  { name: "Git", color: "#F05032", icon: SiGit },
  { name: "Rust", color: "#191919", icon: DiRust },
]

export function Technologies() {
  return (
    <section className="space-y-4">
      <h2 className="font-feather text-3xl font-bold">Mes technologies</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((tech) => (
          <Card 
            key={tech.name} 
            className="flex aspect-square items-center justify-center p-4 transition-transform hover:scale-105"
            style={{ backgroundColor: tech.color }}
          >
            <tech.icon className="h-12 w-12 text-white" aria-hidden="true" />
            <span className="sr-only">{tech.name}</span>
          </Card>
        ))}
      </div>
    </section>
  )
}

