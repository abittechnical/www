import { format } from 'date-fns'

export function formatDate(dateString: string) {
  return format(dateString, 'MMMM d, yyyy')
}
