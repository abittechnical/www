import Link from 'next/link'
import clsx from 'clsx'

// TODO: convert to cva component, fix colors
const variantStyles = {
  primary:
    'bg-[--olive-8] font-semibold text-[--olive-12] hover:bg-[--olive-9] active:bg-[--olive-8] active:text-zinc-100/70',
  secondary:
    'bg-[--olive-3] font-medium text-body hover:text-heading hover:bg-[--olive-5] active:bg-[--olive-4] active:text-heading',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & ((React.ComponentPropsWithoutRef<'button'> & { href?: undefined }) | React.ComponentPropsWithoutRef<typeof Link>)

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
