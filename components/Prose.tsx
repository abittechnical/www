import clsx from 'clsx'

export function Prose({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={clsx(className, 'prose prose-headings:font-heading dark:prose-invert')} {...props} />
}
