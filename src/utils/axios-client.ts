import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY ?? '',
  },
})
