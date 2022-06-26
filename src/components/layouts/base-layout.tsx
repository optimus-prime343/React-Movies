import Head from 'next/head'
import React, { ReactNode } from 'react'

interface BaseLayoutProps {
  children: ReactNode
  title?: string
}
export const BaseLayout = ({ title = 'TMDB Movies', children }: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>{children}</>
    </>
  )
}
