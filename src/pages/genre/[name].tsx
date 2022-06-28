import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

import { BaseLayout } from '../../components/layouts'
import { MovieList } from '../../components/movie'
import { fetchGenreMovies } from '../../services/movie_service'
import { Movie } from '../../types/movie'

const GenreBasedMoviesPage: NextPage<{ movies: Movie[] }> = ({ movies }) => {
  const router = useRouter()
  const genre = router.query.name as string
  return (
    <BaseLayout title={`${genre} Movies`}>
      <div className='container py-2'>
        <h2 className='title mb-4'>{`${genre} Movies`}</h2>
        <MovieList movies={movies} />
      </div>
    </BaseLayout>
  )
}
export const getServerSideProps: GetServerSideProps = async context => {
  const genreId = context.query?.id as string
  const movies = await fetchGenreMovies(parseInt(genreId, 10))
  return { props: { movies } }
}
export default GenreBasedMoviesPage
