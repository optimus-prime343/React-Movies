import { NextPage } from 'next'

import { BaseLayout } from '../components/layouts/base-layout'
import { MovieList } from '../components/movie'
import { useMovies } from '../hooks/use-movies'

const HomePage: NextPage = () => {
  const { data: movies = [] } = useMovies()
  return (
    <BaseLayout>
      <div className='container py-6'>
        <h1 className='title mb-4'>Popular Movies</h1>
        <MovieList movies={movies} />
      </div>
    </BaseLayout>
  )
}

export default HomePage
