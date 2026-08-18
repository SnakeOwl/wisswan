import type { Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import  './BURGER_CUCUMBER.module.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const viewport: Viewport = {
  colorScheme: 'light',
  // colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'white' },
    // { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
      <div className={`BURGER_CUCUMBER bg-background ${inter.variable} ${oswald.variable}`}>
        {children}
      </div>
    
  )
}
