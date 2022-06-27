import { GetServerSideProps, NextPage } from 'next'

import { BaseLayout } from '../components/layouts/base-layout'
import { MovieGenreList, MovieList } from '../components/movie'
import { useGenres } from '../hooks/use-genres'
import { useMovies } from '../hooks/use-movies'
import { fetchPopularMovies } from '../services/movie_service'
import { Movie } from '../types/movie'

const HomePage: NextPage<{ initialMovies: Movie[] }> = ({ initialMovies }) => {
  const { data: movies = [] } = useMovies(initialMovies)
  const { data: genres = [] } = useGenres()
  return (
    <BaseLayout>
      <div className='container py-6'>
        <MovieGenreList genres={genres} />
        <h1 className='title my-4'>Popular Movies</h1>
        <MovieList movies={movies} />
      </div>
    </BaseLayout>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const movies = await fetchPopularMovies()
    return { props: { initialMovies: movies } }
  } catch (error: any) {
    return { props: { initialMovies: [] } }
  }
}

export default HomePage
