import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { ReactNode } from 'react'

interface BaseLayoutProps {
  children: ReactNode
  title?: string
}
const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const BaseLayout = ({ title = 'TMDB Movies', children }: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.main
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'spring', duration: 0.8 }}
        variants={variants}
      >
        {children}
      </motion.main>
    </>
  )
}
