import { PDFViewer } from "@/components/pdf-viewer"

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
