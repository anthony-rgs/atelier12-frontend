import { useSyncExternalStore } from 'react'

function subscribeFactory(query: string) {
  return (onChange: () => void) => {
    const mql = window.matchMedia(query)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }
}

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribeFactory(query),
    () => window.matchMedia(query).matches,
    () => false,
  )
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 768px)')
}

export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
