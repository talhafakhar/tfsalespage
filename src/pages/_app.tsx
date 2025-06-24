import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Montserrat, Poppins, Playfair_Display, Space_Grotesk, Outfit } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['400', '500', '600', '700', '800'],
})

// Navigation font - Clean, readable
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-nav',
  weight: ['400', '500', '600'],
})

// Button font - Strong, action-oriented
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-button',
  weight: ['400', '500', '600', '700', '800'],
})

// Heading font - Elegant, authoritative
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

// Modern alternative fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-modern',
  weight: ['400', '500', '600', '700'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})
export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={`${montserrat.variable} ${inter.variable} ${poppins.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable} ${outfit.variable}`}>
        <Component {...pageProps} />
      </div>
  )
}