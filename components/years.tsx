"use client"

import { useEffect, useRef } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/* La classe est toujours en cours de travaux */

//Liste contenant les experiences
const experiences = [
    {
        title: "Txek",
        description: "Une infrastructure client serveur pour le jeu de carte Txek avec Application de comptage.",
        technologies: ["React", "Next.js", "TensorFlow"],
        position: "left-0 pr-5"
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
        <section className="mx-autborder-red-600 border-2 ">
            <div className="absolute left-1/2 w-6 h-full bg-green-500 -ml-3"></div>
            <div className="p-0 border-purple-500 border-2">
                {/* les bordures pour travailler avec le canva */
                    experiences.map((experience) => (
                        <div key={experience.title} className={`relative w-1/2 pt-10 pb-50 ${experience.position} outline-dashed outline-amber-200`}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{experience.title}</CardTitle>
                                    <CardDescription>{experience.description}</CardDescription>
                                </CardHeader>
                            </Card>
                            <span className="h-0 w-0 absolute top-[28px] z-[1] border-t-[15px] border-t-card-foreground border-b-[15px] border-b-transparent border-l-[15px] border-l-red-500 right-[5px]"></span>
                        </div>
                    ))
                }
            </div>
            {/* <canvas ref={canvasRef} className="mx-auto border-blue-700 border-2" /> */}
        </section>
    )
}

