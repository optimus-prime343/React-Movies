import classNames from 'classnames'
import { useRouter } from 'next/router'

import { MovieGenre } from '../../types/movie-genre'
import NextLink from '../ui/next-link'

interface MovieGenreListProps {
  genres: MovieGenre[]
}
export const MovieGenreList = ({ genres }: MovieGenreListProps) => {
  const router = useRouter()
  const link = (genre: string) =>
    classNames(
      'whitespace-nowrap bg-neutral-800 px-4 py-1 rounded-2xl snap-center hover:bg-neutral-700 transition-colors duration-500',
      { 'bg-white text-black': router.pathname === `/genre/${genre}` }
    )
  const renderGenreList = () => {
    return genres.map((genre, index) => (
      <NextLink
        href={`/genre/${genre.name}?id=${genre.id}`}
        key={index}
        className={link(genre.name)}
      >
        {genre.name}
      </NextLink>
    ))
  }
  return <div className='carousel-container'>{renderGenreList()}</div>
}
