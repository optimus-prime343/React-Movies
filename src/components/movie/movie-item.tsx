import Image from 'next/image'
import { BsHeart } from 'react-icons/bs'
import { IoMdWarning } from 'react-icons/io'

import { Movie } from '../../types/movie'
import { formatDate } from '../../utils/format-date'
import { getMovieImageUrl } from '../../utils/get-movie-image-url'
import NextLink from '../ui/next-link'
import { MovieRating } from './movie-rating'

interface MovieItemProps {
  movie: Movie
}
export const MovieItem = ({ movie }: MovieItemProps) => {
  const DefaulMoviePoster = () => (
    <div className='flex items-center bg-neutral-900 justify-center rounded-md h-[290px]'>
      <IoMdWarning />
      <p className='ml-2'>No Image Found</p>
    </div>
  )
  return (
    <div>
      <div className='relative'>
        <div className='absolute right-4 top-4 z-10 cursor-pointer'>
          <BsHeart />
        </div>
        {movie.backdrop_path ? (
          <Image
            src={getMovieImageUrl(movie.backdrop_path)}
            width={600}
            height={600}
            alt={`${movie.title} poster`}
            objectFit='cover'
            className='bg-neutral-900 rounded-md group-hover:scale-105 transition-transform duration-700'
          />
        ) : (
          <DefaulMoviePoster />
        )}
      </div>
      <div className='flex justify-between items-center gap-2'>
        <div>
          <NextLink href={`/${movie.id}`}>
            <h3 className='text-lg font-medium'>{movie.title}</h3>
          </NextLink>
          {movie.release_date ? (
            <p className='text-sm mt-2 text-neutral-400'>
              {formatDate(movie.release_date)}
            </p>
          ) : (
            <p className='mt-2'>No release date available</p>
          )}
        </div>
        <MovieRating voteAverage={movie.vote_average} />
      </div>
    </div>
  )
}
