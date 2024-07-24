import { Inter } from 'next/font/google'
import '../styles/globals.css'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}