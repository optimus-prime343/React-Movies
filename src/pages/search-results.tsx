import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

import { BaseLayout } from '../components/layouts'
import { MovieList } from '../components/movie'
import { searchMovies } from '../services/movie_service'
import { Movie } from '../types/movie'

const SearchMoviesResultsPage: NextPage<{ movies: Movie[] }> = ({ movies }) => {
  const router = useRouter()
  const query = router.query.q
  return (
    <BaseLayout title={`Search results for ${query}`}>
      <div className='container py-2'>
        <h2 className='title mb-4'>
          Showing search results for <span className='text-cyan-600'>{query}</span>
        </h2>
        <MovieList movies={movies} />
      </div>
    </BaseLayout>
  )
}
export const getServerSideProps: GetServerSideProps = async context => {
  const query = context.query.q as string
  try {
    const movies = await searchMovies(query)
    return { props: { movies } }
  } catch (error) {
    return { props: { movies: [] } }
  }
}
export default SearchMoviesResultsPage
