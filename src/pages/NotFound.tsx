import { Link } from 'react-router-dom'
import { PageContainer } from '@/components/layout/PageContainer'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-32 text-center">
      <Heading variant="eyebrow">Erreur 404</Heading>
      <Heading variant="h1">Cette page s'est fait la belle.</Heading>
      <Text variant="lead" className="max-w-md">
        La page que vous cherchez n'existe pas ou plus.
      </Text>
      <Button as={Link} to="/" className="mt-4">
        Retour à l'accueil
      </Button>
    </PageContainer>
  )
}
