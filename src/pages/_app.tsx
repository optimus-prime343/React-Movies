import 'nprogress/nprogress.css'
import '../styles/globals.css'

import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'

import { Navbar } from '../components/layouts'
import { MovieContextProvider } from '../context/movie-context'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // show a loading progress bar when navigating between different pages
    router.events.on('routeChangeStart', NProgress.start)
    router.events.on('routeChangeComplete', NProgress.done)
    return () => {
      router.events.off('routeChangeStart', NProgress.start)
      router.events.off('routeChangeComplete', NProgress.done)
    }
  }, [router])
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <MovieContextProvider>
          <Component {...pageProps} />
        </MovieContextProvider>
      </AnimatePresence>
    </>
  )
}

export default MyApp
