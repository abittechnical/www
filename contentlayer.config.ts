import { defineDocumentType, makeSource, type ComputedFields } from 'contentlayer/source-files'
import { slugify } from './lib/slugify'
import type { Article as ArticleType } from './.contentlayer/generated'
// import rehypePrism from '@mapbox/rehype-prism'
// import remarkGfm from 'remark-gfm'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => slugify(doc),
  },
  slugAsParams: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}
export const Article = defineDocumentType(() => ({
  name: 'Article',
  // matches all `.mdx` files in the `articles` directory
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    // currently matches "frontmatter" of the sample articles from the template
    author: { type: 'string', required: true },
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
  },
  computedFields,
}))

export default makeSource({
  // remove for now until we understand its benefits
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   // rehypePlugins: [highlight],
  // },
  contentDirPath: 'articles',
  documentTypes: [Article],
})
