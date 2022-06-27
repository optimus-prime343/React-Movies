import { useQuery } from 'react-query'

import { fetchMovieDetail } from '../services/movie_service'
import { MovieDetail } from '../types/movie'

export const useMovieDetails = (movieId: string, initialData?: MovieDetail) => {
  return useQuery(['movie', movieId], () => fetchMovieDetail(movieId), {
    initialData,
  })
}
