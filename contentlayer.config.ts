import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// import rehypePrism from '@mapbox/rehype-prism'
// import remarkGfm from 'remark-gfm'

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
  computedFields: {
    slug: { type: 'string', resolve: post => `/articles/${post._raw.flattenedPath}` },
  },
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
