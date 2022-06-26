import { useQuery } from 'react-query'

import { Movie } from '../types/movie'
import { axiosClient } from '../utils/axios-client'

export const useMovies = (initialMovies: Movie[] = []) => {
  return useQuery<Movie[], Error>(
    ['movies'],
    async () => {
      try {
        const { data } = await axiosClient.get<{ results: Movie[] }>(
          '/movie/popular'
        )
        return data.results
      } catch (error: any) {
        throw new Error(error.response?.data?.message ?? 'Something went wrong')
      }
    },
    { initialData: initialMovies }
  )
}
