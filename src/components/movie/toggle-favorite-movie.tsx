import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { ReactNode } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

import { useMovies } from '../../context/movie-context'
import { Movie } from '../../types/movie'

interface ToggleFavoriteMovieProps {
  movie: Movie
}
const variants = {
  initial: {
    opacity: 1,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
}
export const ToggleFavoriteMovie = ({ movie }: ToggleFavoriteMovieProps) => {
  const controls = useAnimation()
  const { addFavoriteMovie, removeFavoriteMovie, isMovieFavorite } = useMovies()

  const handleAddToFavorite = () => {
    addFavoriteMovie(movie)
    controls.set('animate')
  }
  const handleRemoveFromFavorite = () => {
    removeFavoriteMovie(movie.id)
    controls.set('animate')
  }

  const AnimationWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <motion.div animate={controls} variants={variants}>
        {children}
      </motion.div>
    )
  }
  return (
    <AnimatePresence>
      {isMovieFavorite(movie.id) ? (
        <AnimationWrapper>
          <BsHeartFill className='fill-red-600' onClick={handleRemoveFromFavorite} />
        </AnimationWrapper>
      ) : (
        <AnimationWrapper>
          <BsHeart onClick={handleAddToFavorite} />
        </AnimationWrapper>
      )}
    </AnimatePresence>
  )
}
