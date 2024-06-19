import localFont from 'next/font/local'
import { IBM_Plex_Mono, JetBrains_Mono } from 'next/font/google'

export const sansFont = localFont({
  src: [
    { path: './fonts/geliat-alt/Geliat-AltBlack.woff', weight: '900' },
    { path: './fonts/geliat-alt/Geliat-AltBlack.woff2', weight: '900' },
    {
      path: './fonts/geliat-alt/Geliat-AltBlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltBlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    { path: './fonts/geliat-alt/Geliat-AltBold.woff', weight: '800' },
    { path: './fonts/geliat-alt/Geliat-AltBold.woff2', weight: '800' },
    {
      path: './fonts/geliat-alt/Geliat-AltBoldItalic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    { path: './fonts/geliat-alt/Geliat-AltMedium.woff', weight: '500' },
    {
      path: './fonts/geliat-alt/Geliat-AltMedium.woff2',
      weight: '500',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltMediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltMediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltRegular.woff',
      weight: '400',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltRegular.woff2',
      weight: '400',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltSemiBold.woff',
      weight: '600',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltSemiBold.woff2',
      weight: '600',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltSemiBoldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/geliat-alt/Geliat-AltSemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})
export const headingFont = localFont({
  src: [
    { path: './fonts/visby/VisbyCF-Heavy.woff', weight: '900' },
    { path: './fonts/visby/VisbyCF-Heavy.woff2', weight: '900' },
    { path: './fonts/visby/VisbyCF-Bold.woff', weight: '800' },
    { path: './fonts/visby/VisbyCF-Bold.woff2', weight: '800' },
    { path: './fonts/visby/VisbyCF-Medium.woff', weight: '500' },
    {
      path: './fonts/visby/VisbyCF-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/visby/VisbyCF-Regular.woff',
      weight: '400',
    },
    {
      path: './fonts/visby/VisbyCF-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/visby/VisbyCF-DemiBold.woff',
      weight: '600',
    },
    {
      path: './fonts/visby/VisbyCF-DemiBold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
})

export const bluuNextFont = localFont({
  src: [
    {
      path: './fonts/bluu-next/bluunext-bold-webfont.woff',
      weight: '400',
    },
    {
      path: './fonts/bluu-next/bluunext-bold-webfont.woff2',
      weight: '400',
    },
    {
      path: './fonts/bluu-next/bluunext-bold.ttf',
      weight: '400',
    },
  ],
  variable: '--font-heading',
})
export const bluuNextTitlingFont = localFont({
  src: [
    {
      path: './fonts/bluu-next/bluunext-titling.woff',
      weight: '400',
    },
    {
      path: './fonts/bluu-next/bluunext-titling.woff2',
      weight: '400',
    },
    {
      path: './fonts/bluu-next/bluunext-titling.ttf',
      weight: '400',
    },
  ],
  variable: '--font-heading-titling',
})

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-mono',
})
export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})
