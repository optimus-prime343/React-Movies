import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsHeart } from 'react-icons/bs'

import { IconButton } from '../ui'

export const Navbar = () => {
  return (
    <header className='sticky inset-0 z-10 bg-neutral-900/75 backdrop-blur-md border-b border-neutral-800'>
      <nav className='container flex justify-between items-center'>
        <Link href='/'>
          <a href=''>
            <Image
              src='/images/tmdb_logo.svg'
              width={160}
              height={80}
              alt='TMDB Logo'
            />
          </a>
        </Link>
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
