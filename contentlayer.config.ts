import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from 'remark-gfm'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: post => `/articles/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({
  mdx: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [highlight],
  },
  contentDirPath: 'articles',
  documentTypes: [Article],
})
