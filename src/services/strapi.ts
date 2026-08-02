const STRAPI_URL = import.meta.env.VITE_STRAPI_URL ?? 'http://localhost:1337'

export async function strapiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}${path}`)
  if (!res.ok) {
    throw new Error(`Strapi request failed: ${path} (${res.status})`)
  }
  return res.json()
}

/** Strapi returns absolute media URLs once `config/server.ts` has `url` set (production),
 *  but relative ones (e.g. "/uploads/x.webp") in local dev — handle both. */
export function mediaUrl(url: string) {
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`
}
