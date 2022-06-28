import { GetServerSideProps, NextPage } from 'next'

import { BaseLayout } from '../components/layouts/base-layout'
import { MovieGenreList, MovieList } from '../components/movie'
import { fetchMovieGenres, fetchPopularMovies } from '../services/movie_service'
import { Movie } from '../types/movie'

const HomePage: NextPage<{ movies: Movie[]; genres: string[] }> = ({
  movies,
  genres,
}) => {
  return (
    <BaseLayout>
      <div className='container my-2'>
        <MovieGenreList genres={genres} />
        <h1 className='title my-4'>Popular Movies</h1>
        <MovieList movies={movies} />
      </div>
    </BaseLayout>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [movies, genres] = await Promise.all([
      fetchPopularMovies(),
      fetchMovieGenres(),
    ])
    return { props: { movies, genres } }
  } catch (error: any) {
    return { props: { initialMovies: [] } }
  }
}

export default HomePage
