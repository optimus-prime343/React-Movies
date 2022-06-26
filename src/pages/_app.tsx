import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Navbar } from '../components/layouts'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
