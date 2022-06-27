import { useQuery } from 'react-query'

import { fetchPopularMovies } from '../services/movie_service'
import { Movie } from '../types/movie'

export const useMovies = (initialMovies: Movie[] = []) => {
  return useQuery<Movie[], Error>(['movies'], () => fetchPopularMovies(), {
    initialData: initialMovies,
  })
}
