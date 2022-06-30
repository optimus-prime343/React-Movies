import { ReactNode } from 'react'

import { useLocalStorage } from '../../hooks/use-local-storage'
import { Movie } from '../../types/movie'
import { MovieContext } from './movie-context'

interface MovieContextProviderProps {
  children: ReactNode
}
export const MovieContextProvider = ({ children }: MovieContextProviderProps) => {
  const [favoriteMovies, setFavoriteMovies] = useLocalStorage<Movie[]>(
    'favoriteMovies',
    []
  )

  const addFavoriteMovie = (movie: Movie) => {
    setFavoriteMovies(prevFavorites => [movie, ...prevFavorites])
  }
  const removeFavoriteMovie = (movieId: number) => {
    setFavoriteMovies(prevFavorites =>
      prevFavorites.filter(movie => movie.id !== movieId)
    )
  }
  const isMovieFavorite = (movieId: number) => {
    return favoriteMovies.some(movie => movie.id === movieId)
  }

  const value = {
    favoriteMovies,
    addFavoriteMovie,
    removeFavoriteMovie,
    isMovieFavorite,
  }
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
