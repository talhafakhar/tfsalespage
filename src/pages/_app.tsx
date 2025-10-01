import "@/styles/globals.css";
import "@/styles/fonts.css";
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={`font-syne`}>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
  )
}
