import { useQuery } from 'react-query'

import { axiosClient } from '../utils/axios-client'

interface GenreResponse {
  id: number
  name: string
}

export const useGenres = () => {
  return useQuery<string[], Error, undefined>(['genres'], async () => {
    try {
      const { data } = await axiosClient.get<{ genres: GenreResponse[] }>(
        '/genre/movie/list'
      )
      const genres = data.genres.map(({ name }) => name)
      return genres
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? 'Something went wrong')
    }
  })
}
