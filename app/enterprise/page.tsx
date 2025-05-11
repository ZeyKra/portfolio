import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-background p-8 pt-20 transition-colors">
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-feather text-4xl font-bold tracking-tight md:text-6xl mb-4">
              Mon Entreprise
            </h1>
            <p className="text-lg text-muted-foreground">
              Le Conseil départemental des landes
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/facade.jpg?height=400&width=600`}
              alt="Enterprise logo or relevant image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <section>
          <h2 className="font-feather text-3xl font-bold mb-4">À propos de mon Enterprise</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg">
              Le Conseil départemental des Landes est une institution au service des habitants 
              et du développement du territoire landais. Acteur de proximité, il intervient dans des domaines essentiels 
              tels que l&apos;action sociale, l&apos;aménagement des infrastructures, la gestion des collèges, la culture, et 
              la préservation de l&apos;environnement. Avec une attention particulière portée aux valeurs de solidarité, 
              d&apos;innovation, et de développement durable, le Conseil départemental des Landes contribue activement à améliorer le cadre de vie et à valoriser les richesses naturelles et culturelles de ce département dynamique.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="font-feather text-3xl font-bold mb-4">Mes missions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Mes missions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Suivi des évolutions technologiques (matériels, logiciels, téléphonie IP).</li>
                  <li>Bonnes pratiques en support utilisateur et maintenance informatique</li>
                  <li>Sécurité, gestion des droits, sauvegardes, boîtes mail</li>
                  <li>Travail en équipe, autonomie, curiosité, anglais technique</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Compétences travaillées</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Autonome & esprit d'équipe</li>
                  <li>Méthodique & observateur</li>
                  <li>Mobile pour interventions sur site</li>
                  <li>Maîtrise Windows (poste & serveur)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-feather text-3xl font-bold mb-4">Notre Impact</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                Depuis sa création, le departement des landes a été un acteur majeur dans différents secteurs:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Renforcement de l&apos;accompagnement social des personnes âgées, des familles en difficulté et des personnes en situation de handicap.</li>
                <li>ensibilisation des habitants aux enjeux environnementaux à travers des programmes éducatifs.</li>
                <li>Amélioration du réseau routier et des transports en commun pour faciliter la mobilité des habitants.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
