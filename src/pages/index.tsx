import { GetServerSideProps, NextPage } from 'next'

import { BaseLayout } from '../components/layouts/base-layout'
import { MovieGenreList, MovieList, SearchMovieBar } from '../components/movie'
import { fetchMovieGenres, fetchPopularMovies } from '../services/movie_service'
import { Movie } from '../types/movie'
import { MovieGenre } from '../types/movie-genre'

const HomePage: NextPage<{ movies: Movie[]; genres: MovieGenre[] }> = ({
  movies,
  genres,
}) => {
  return (
    <BaseLayout>
      <div className='container my-2'>
        <SearchMovieBar className='min-w-full mb-4 lg:hidden' />
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
