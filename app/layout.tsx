import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaniLand',
  description: 'Agriculture App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={font.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  )
}
