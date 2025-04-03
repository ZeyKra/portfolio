import { Card } from "@/components/ui/card"
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiMysql,
  SiDocker, SiGit,
} from 'react-icons/si'

import { DiJava, DiRust } from "react-icons/di"
import Link from "next/link"

const technologies = [
  { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", color: "#3178C6", icon: SiTypescript, url: "https://www.typescriptlang.org/" },
  { name: "React", color: "#61DAFB", icon: SiReact, url: "https://reactjs.org/" },
  { name: "Node.js", color: "#339933", icon: SiNodedotjs, url: "https://nodejs.org/" },
  { name: "Python", color: "#3776AB", icon: SiPython, url: "https://www.python.org/" },
  { name: "Java", color: "#00599C", icon: DiJava, url: "https://www.java.com/" },
  { name: "SQL", color: "#4479A1", icon: SiMysql, url: "https://www.mysql.com/" },
  { name: "Docker", color: "#2496ED", icon: SiDocker, url: "https://www.docker.com/" },
  { name: "Git", color: "#F05032", icon: SiGit, url: "https://git-scm.com/" },
  { name: "Rust", color: "#191919", icon: DiRust, url: "https://www.rust-lang.org/" },
]

export function Technologies() {
  return (
    <section className="space-y-4">
      <h2 className="font-feather text-3xl font-bold">Mes technologies</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((tech) => (
          <Link key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer">
            <Card
              className="flex aspect-square items-center justify-center p-4 transition-transform hover:scale-105 cursor-pointer"
              style={{ backgroundColor: tech.color }}
            >
              <tech.icon className="h-12 w-12 text-white" aria-hidden="true" />
              <span className="sr-only">{tech.name}</span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

