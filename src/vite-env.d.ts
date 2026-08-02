/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the Strapi backend, e.g. https://api.latelier12.fr in production.
   *  Falls back to http://localhost:1337 in dev when unset. */
  readonly VITE_STRAPI_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
