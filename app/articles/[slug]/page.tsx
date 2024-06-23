import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { allArticles } from 'contentlayer/generated'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

const getArticleFromParams = async (params: ArticlePageProps['params']) => {
  const slug = params?.slug
  const article = allArticles.find(article => article.slug === slug)

  if (!article) {
    null
  }

  return article
}

// Nextjs special function to generate static paths for dynamic routes
export const generateStaticParams = async (): Promise<ArticlePageProps['params'][]> =>
  allArticles.map(article => ({
    slug: article.slug,
  }))

// nextjs special function to generate metadata for each static path
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleFromParams(params)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
  }
}

// TODO: make default export
const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await getArticleFromParams(params)

  if (!article) {
    notFound()
  }

  return (
    <article>
      <header className="flex flex-col">
        <h1 className="mt-6 font-heading text-4xl font-medium tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {article.title}
        </h1>
        <time
          dateTime={article.date}
          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3">{formatDate(article.date)}</span>
        </time>
      </header>
      <Prose className="mt-8" content={article.body.code} />
    </article>
  )
}

export default ArticlePage
