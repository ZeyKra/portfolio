"use client"

import { useEffect, useRef } from "react"

import { 
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython,
  SiNextdotjs
} from 'react-icons/si'

const technologies = [
  { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
  { name: "React", color: "#61DAFB", icon: SiReact},
  { name: "Node.js", color: "#339933", icon: SiNodedotjs},
  { name: "Python", color: "#3776AB", icon: SiPython},
  { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript},
  { name: "Next.js", color: "#191919", icon: SiNextdotjs},
]

export function TechStack() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const size = Math.min(400, window.innerWidth - 40)
    canvas.width = size
    canvas.height = size

    // Calculate positions in a circle
    const centerX = size / 2
    const centerY = size / 2
    const radius = size / 3

    // Draw connecting lines
    ctx.strokeStyle = "#666"
    ctx.setLineDash([5, 5])

    technologies.forEach((_, i) => {
      const angle = (i * 2 * Math.PI) / technologies.length
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()
    })

    
    // Draw technology circles
    technologies.forEach((tech, i) => {
      const angle = (i * 2 * Math.PI) / technologies.length
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      
      ctx.beginPath()
      ctx.arc(x, y, 20, 0, 2 * Math.PI)
      ctx.fillStyle = tech.color
      
      ctx.fill()

      /*
      const img = new Image()
      img.src = `/icons/${tech.name.toLowerCase()}.svg`
      img.onload = () => {
        ctx.drawImage(img, x - 10, y - 10, 20, 20)
      }*/

    })
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} className="mx-auto" />
     </div>

  )
  
}

