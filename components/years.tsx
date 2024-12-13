"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

//Liste contenant les experiences
const experiences = [
    {
        title: "Txek",
        description: "Une infrastructure client serveur pour le jeu de carte Txek avec Application de comptage.",
        technologies: ["React", "Next.js", "TensorFlow"],
        position: "left-0"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia non facilis accusamus quam libero .",
        technologies: ["Lorem", "Ipsum", "Dolore"],
        position: "left-1/2"
    },
    {
        title: "Txek",
        description: "Une infrastructure client serveur pour le jeu de carte Txek avec Application de comptage.",
        technologies: ["React", "Next.js", "TensorFlow"],
        position: "left-0"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia non facilis accusamus quam libero .",
        technologies: ["Lorem", "Ipsum", "Dolore"],
        position: "left-1/2"
    },
]

export function Years() {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const size = Math.min(500, window.outerWidth)
        canvas.width = size
        canvas.height = size

        // Draw connecting lines
        ctx.strokeStyle = "#00000"//"#666"
        ctx.setLineDash([5, 5])

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);

        ctx.stroke()
    }, [])

    return (
        <section className="">
            <div className="">
                {/* les bordures pour travailler avec le canva */
                    experiences.map((experience, i) => (
                        <div key={experience.title} className={`relative w-1/2 pt-10 pb-50 ${experience.position}`}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{experience.title}</CardTitle>
                                    <CardDescription>{experience.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    ))
                }
            </div>
            <canvas ref={canvasRef} className="mx-auto border-blue-700 border-2" />
        </section>
    )
}

