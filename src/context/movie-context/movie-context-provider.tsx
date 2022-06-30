import { ReactNode, useState } from 'react'

import { Movie } from '../../types/movie'
import { MovieContext } from './movie-context'

interface MovieContextProviderProps {
  children: ReactNode
}
export const MovieContextProvider = ({ children }: MovieContextProviderProps) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([])

  const addFavoriteMovie = (movie: Movie) => {
    setFavoriteMovies(prevFavorites => [movie, ...prevFavorites])
  }
  const removeFavoriteMovie = (movieId: number) => {
    setFavoriteMovies(prevFavorites =>
      prevFavorites.filter(movie => movie.id !== movieId)
    )
  }

  const value = {
    favoriteMovies,
    addFavoriteMovie,
    removeFavoriteMovie,
  }
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
