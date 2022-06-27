import Image from 'next/image'
import Link from 'next/link'

import { Movie } from '../../types/movie'
import { formatDate } from '../../utils/format-date'
import { getMovieImageUrl } from '../../utils/get-movie-image-url'
import { MovieRating } from './movie-rating'

interface MovieListProps {
  movies: Movie[]
}
export const MovieList = ({ movies }: MovieListProps) => {
  const renderMoviesList = () => {
    return movies.map(movie => (
      <Link key={movie.id} href={`/${movie.id}`}>
        <a className='group' key={movie.id}>
          <Image
            src={getMovieImageUrl(movie.backdrop_path)}
            width={600}
            height={600}
            alt={`${movie.title} poster`}
            objectFit='cover'
            className='rounded-md group-hover:scale-105 transition-transform duration-700'
          />
          <div className='flex justify-between items-center gap-2'>
            <div>
              <h3 className='text-lg font-medium'>{movie.title}</h3>
              <p className='text-sm mt-2 text-neutral-400'>
                {formatDate(movie.release_date)}
              </p>
            </div>
            <MovieRating voteAverage={movie.vote_average} />
          </div>
        </a>
      </Link>
    ))
  }
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
      {renderMoviesList()}
    </div>
  )
}
