export function PersonStructuredData({
    name,
    jobTitle,
    image,
    url,
  }: {
    name: string
    jobTitle: string
    image: string
    url: string
  }) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name,
            jobTitle,
            image,
            url,
            sameAs: [
              "https://github.com/zeykra",
              "https://www.linkedin.com/in/adryancales",
            ],
          }),
        }}
      />
    )
  }
  
  export function PortfolioStructuredData({
    projects,
  }: {
    projects: Array<{
      name: string
      description: string
      url: string
      image: string
      technologies: string[]
    }>
  }) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: project.name,
                description: project.description,
                url: project.url,
                image: project.image,
                applicationCategory: "WebApplication",
                operatingSystem: "Any",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                keywords: project.technologies.join(", "),
              },
            })),
          }),
        }}
      />
    )
  }
  
