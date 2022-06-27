import { Movie } from '../../types/movie'
import { MovieItem } from './movie-item'

interface MovieListProps {
  movies: Movie[]
}
export const MovieList = ({ movies }: MovieListProps) => {
  const renderMoviesList = () => {
    return movies.map(movie => <MovieItem key={movie.id} movie={movie} />)
  }
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
      {renderMoviesList()}
    </div>
  )
}
