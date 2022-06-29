import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsHeart } from 'react-icons/bs'

import { SearchMovieBar } from '../movie'
import { IconButton } from '../ui'
import NextLink from '../ui/next-link'

export const Navbar = () => {
  return (
    <header className='sticky inset-0 z-10 bg-neutral-900/75 backdrop-blur-md border-b border-neutral-800'>
      <nav className='container flex justify-between items-center'>
        <NextLink href='/'>
          <Image
            src='/images/tmdb_logo.svg'
            width={160}
            height={60}
            alt='TMDB Logo'
          />
        </NextLink>
        <SearchMovieBar className='hidden lg:flex' />
        <ul>
          <li>
            <Link href='/favorites' passHref>
              <IconButton as='a' icon={<BsHeart size={25} />} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
