import { useQuery } from 'react-query'

import { axiosClient } from '../utils/axios-client'

export const useGenres = () => {
  return useQuery<string[], Error, undefined>(['genres'], async () => {
    try {
      const { data } = await axiosClient.get<{ id: number; name: string }[]>(
        '/genre/movie/list'
      )
      const genres = data.map(({ name }) => name)
      return genres
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? 'Something went wrong')
    }
  })
}
