import type { ReactNode } from 'react'
import { Container } from '@/components/Container'
import { BackButton } from '@/components/back-button'

const ArticleLayout = ({ children }: { children: ReactNode }) => (
  <Container className="mt-16 lg:mt-32">
    <div className="xl:relative">
      <div className="mx-auto max-w-2xl">
        <BackButton />
        {children}
      </div>
    </div>
  </Container>
)

export default ArticleLayout
