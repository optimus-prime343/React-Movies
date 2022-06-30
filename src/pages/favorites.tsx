import { BaseLayout } from '../components/layouts'
import { MovieList } from '../components/movie'
import { useMovies } from '../context/movie-context'

const FavoritesMoviePage = () => {
  const { favoriteMovies } = useMovies()
  return (
    <BaseLayout title='Favorite Movies'>
      <div className='container py-2'>
        <h2 className='title mb-4'>Your Favorite Movies</h2>
        {favoriteMovies.length === 0 && (
          <p className='bg-neutral-800 w-fit px-4 py-2 rounded-md'>
            You dont have any favorite movies
          </p>
        )}
        <MovieList movies={favoriteMovies} />
      </div>
    </BaseLayout>
  )
}

export default FavoritesMoviePage
