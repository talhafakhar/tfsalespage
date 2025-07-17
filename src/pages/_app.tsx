// _app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Montserrat, Poppins, Playfair_Display, Space_Grotesk, Outfit } from 'next/font/google'
import { useEffect, useState } from 'react'
import GlobalLoading from '@/components/Common/GlobalLoading'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-nav',
  weight: ['400', '500', '600'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-button',
  weight: ['400', '500', '600', '700', '800'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

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
  const [isVisible, setIsVisible] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const first = setTimeout(() => {
      setIsShow(false);
    }, 2500);

    return () => {
      clearTimeout(first);
    };
  }, []);

  const handleSpinnerAnimationEnd = () => {
    setShowSpinner(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };

  if (showSpinner) {
    return <GlobalLoading isVisible={isShow} onAnimationEnd={handleSpinnerAnimationEnd} />;
  }

  return (
      <div className={`${montserrat.variable} ${inter.variable} ${poppins.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable} ${outfit.variable}`}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Component {...pageProps} />
        </div>
      </div>
  )
}