import { useEffect } from 'react'

const SITE_NAME = "L'Atelier 12"

interface PageMetaOptions {
  title: string
  description?: string
  /** Set on pages that shouldn't be indexed (e.g. 404) — since this is a client-rendered SPA,
   *  the server always responds 200, so this is the only way to tell crawlers not to index it. */
  noIndex?: boolean
}

/** Sets the tab title, meta description and robots directive per page/route, restoring the
 *  previous values on unmount so navigating away doesn't leave stale meta behind. */
export function usePageMeta({ title, description, noIndex }: PageMetaOptions) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} — ${SITE_NAME}`

    let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = descriptionTag?.getAttribute('content') ?? null

    if (description) {
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta')
        descriptionTag.setAttribute('name', 'description')
        document.head.appendChild(descriptionTag)
      }
      descriptionTag.setAttribute('content', description)
    }

    let robotsTag: HTMLMetaElement | null = null
    if (noIndex) {
      robotsTag = document.createElement('meta')
      robotsTag.setAttribute('name', 'robots')
      robotsTag.setAttribute('content', 'noindex')
      document.head.appendChild(robotsTag)
    }

    return () => {
      document.title = previousTitle
      if (description && descriptionTag && previousDescription) {
        descriptionTag.setAttribute('content', previousDescription)
      }
      robotsTag?.remove()
    }
  }, [title, description, noIndex])
}
