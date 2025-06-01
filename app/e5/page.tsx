import { PDFViewer } from "@/components/pdf-viewer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Document E5 | Portfolio BTS SIO SLAM",
  description:
    "Document E5 du BTS SIO SLAM présentant les situations professionnelles réalisées en entreprise et les compétences acquises.",
  keywords: [
    "BTS SIO",
    "SLAM",
    "document E5",
    "portfolio",
    "situations professionnelles",
    "compétences",
    "alternance",
  ],
}


export default function E6Page() {
  // Replace this with the actual path to your PDF file
  const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_PATH}/e5.pdf`
  const pdfTitle = "Document E5"

  return (
    <main className="min-h-screen bg-background p-8 pt-20 transition-colors">
      <div className="mx-auto max-w-5xl space-y-8">
        <h1 className="font-feather text-4xl font-bold tracking-tight md:text-6xl mb-4">Document E5</h1>
        <p className="text-lg text-muted-foreground">
          Cette version ne comporte pas l&apos;attestation de présence en entreprise ni le contrat de travail pour raison de confidentialités.
        </p>

        <PDFViewer pdfUrl={pdfUrl} title={pdfTitle}/>

      </div>
    </main>
  )
}
