import { defineConfig } from 'cva'
import { twMerge } from 'tailwind-merge'

export const { cx, cva, compose } = defineConfig({
  hooks: {
    onComplete: className => twMerge(className),
  },
})
