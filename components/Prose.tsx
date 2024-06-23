'use client'
import { cx } from '@/lib/utils'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  Image,
}

export function Prose({ className, content }: { className?: string; content: string }) {
  const MdxContent = useMDXComponent(content)
  return (
    <div className={cx(className, 'prose dark:prose-invert prose-headings:font-heading')}>
      <MdxContent components={components} />
    </div>
  )
}
