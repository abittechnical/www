import type { LocalDocument } from 'contentlayer/source-files'
import createSlug from 'slugify'
import type { Article } from 'contentlayer/generated'
/** TODO: define a function that takes a string and returns a slugified version of it
 *   - if the article has no slug defined, it should be generated:
 *      - if the filename/file-folder_name is slugifyible, use that
 *      - otherwise, generate a slug from the contents of the file (use OpenAi?)
 */
export function slugify(article: LocalDocument): string {
  /**
   * - if the article has no slug defined, it should be generated:
   * - if the filename/file-folder_name is slugifyible, use that
   *  *
   */
  if (article.slug) return createSlug(article.slug)
  const str = article._raw.sourceFileDir
  return createSlug(str)
}
