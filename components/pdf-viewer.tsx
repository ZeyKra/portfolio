"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink } from "lucide-react"

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [isMounted, setIsMounted] = useState(false)
  const objectRef = useRef<HTMLObjectElement>(null)
  const [objectFailed, setObjectFailed] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Vérifier si l'objet s'est chargé correctement
    const checkObjectLoaded = () => {
      if (objectRef.current) {
        try {
          // Si nous ne pouvons pas accéder au contentDocument, il a probablement échoué à charger
          const doc = objectRef.current.contentDocument || objectRef.current.contentWindow?.document
          if (!doc) {
            setObjectFailed(true)
          }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          // Les erreurs CORS ou autres seront capturées ici
          setObjectFailed(true)
        }
      }
    }

    // Vérifier après un délai pour permettre le chargement
    const timer = setTimeout(checkObjectLoaded, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] border rounded-lg bg-muted">
        <p>Chargement du PDF...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="w-full border rounded-lg overflow-hidden bg-white shadow-sm">
        {!objectFailed ? (
          <object
            ref={objectRef}
            data={`${pdfUrl}?t=${Date.now()}`} // Ajouter un paramètre de requête pour éviter la mise en cache
            type="application/pdf"
            className="w-full h-[70vh]"
            aria-label={title}
          >
            <div className="flex flex-col items-center justify-center h-[70vh] p-8 text-center">
              <FileText className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold mb-2">PDF Viewer Not Available</h3>
              <p className="text-muted-foreground mb-6">
                Votre navigateur ne prend pas en charge le lecteur PDF. Veuillez utiliser un navigateur plus récent.
              </p>
            </div>
          </object>
        ) : (
          // Solution de repli vers la balise embed si l'objet échoue
          <embed
            src={`${pdfUrl}?t=${Date.now()}`}
            type="application/pdf"
            className="w-full h-[70vh]"
            aria-label={title}
          />
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" asChild>
          <a href={pdfUrl} download>
            <Download className="mr-2 h-5 w-5" />
            Télécharger le PDF
          </a>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-5 w-5" />
            Ouvrir dans un nouvel onglet ou une nouvelle fenetre
          </a>
        </Button>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>Si le PDF ne s&apos;affiche pas correctement, veuillez utiliser le boutton télécharger ou ouvrir dans un autre onglet.</p>
      </div>
    </div>
  )
}
