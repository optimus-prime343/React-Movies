import { useQuery } from 'react-query'

import { Movie } from '../types/movie'
import { axiosClient } from '../utils/axios-client'

interface VideosResponse {
  results: {
    site: string
    key: string
  }[]
}
interface MovieDetail extends Movie {
  videoUrls: string[]
}

const fetchMovieVidoes = async (movieId: string): Promise<string[]> => {
  const { data } = await axiosClient.get<VideosResponse>(`/movie/${movieId}/videos`)

  const youtubeVideos = data.results.filter(data => data.site === 'YouTube')
  const youtubeVideosKey = youtubeVideos.map(youtubeVideo => youtubeVideo.key)
  return youtubeVideosKey
}

export const useMovieDetails = (movieId: string) => {
  return useQuery<MovieDetail, Error>(['movie-detail', movieId], async () => {
    try {
      const [videos, response] = await Promise.all([
        fetchMovieVidoes(movieId),
        axiosClient.get<Movie>(`/movie/${movieId}`),
      ])
      return { videoUrls: videos, ...response.data }
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? 'Something went wrong')
    }
  })
}
