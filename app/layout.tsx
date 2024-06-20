import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { headingFont, sansFont, monoFont } from '@/styles/fonts'
import { cx } from '@/lib/utils'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Spencer Sharp',
    default: 'Spencer Sharp - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cx('h-full', headingFont.variable, sansFont.variable, monoFont.variable)}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-page text-body antialiased">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
