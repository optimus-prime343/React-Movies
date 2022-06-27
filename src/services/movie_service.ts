import { Movie, MovieDetail } from '../types/movie'
import { axiosClient } from '../utils/axios-client'

interface VideosResponse {
  results: {
    site: string
    key: string
  }[]
}

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await axiosClient.get<{ results: Movie[] }>('/movie/popular')
    return data.results
  } catch (error: any) {
    throw new Error(error.response?.data?.message ?? 'Error fetching popular movies')
  }
}

const fetchMovieVidoes = async (movieId: string): Promise<string[]> => {
  const { data } = await axiosClient.get<VideosResponse>(`/movie/${movieId}/videos`)

  const youtubeVideos = data.results.filter(data => data.site === 'YouTube')
  const youtubeVideosKey = youtubeVideos.map(youtubeVideo => youtubeVideo.key)
  return youtubeVideosKey
}

export const fetchMovieDetail = async (id: string): Promise<MovieDetail> => {
  try {
    const [videoUrls, response] = await Promise.all([
      fetchMovieVidoes(id),
      axiosClient.get(`/movie/${id}`),
    ])
    return { videoUrls, ...response.data }
  } catch (error: any) {
    throw new Error(error.response?.data?.message ?? 'Error fetching movie details')
  }
}
