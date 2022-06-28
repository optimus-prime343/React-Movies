import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'

import { BaseLayout } from '../components/layouts'
import { MovieVideos } from '../components/movie'
import { fetchMovieDetail } from '../services/movie_service'
import { MovieDetail } from '../types/movie'
import { getMovieImageUrl } from '../utils/get-movie-image-url'

const MovieDetailPage: NextPage<{ movieDetail: MovieDetail }> = ({
  movieDetail: movie,
}) => {
  if (!movie) return null
  return (
    <BaseLayout title={movie.title ?? 'Loading..'}>
      <div
        className='min-h-[90vh] bg-cover py-2'
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0,0,0,.80),rgba(0,0,0,.95)), url(${getMovieImageUrl(
            movie.backdrop_path
          )})`,
        }}
      >
        <div className='container'>
          <Image
            src={getMovieImageUrl(movie.poster_path)}
            width={400}
            height={600}
            alt={`${movie.title} poster`}
            objectFit='cover'
            className='rounded-md'
          />
          <div className='max-w-2xl mt-4 mb-6'>
            <h2 className='title'>{movie.title}</h2>
            <p className='mt-2 text-neutral-400'>{movie.overview}</p>
          </div>
          <MovieVideos embedIds={movie.videoUrls} />
        </div>
      </div>
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id as string
    const movieDetail = await fetchMovieDetail(id)
    return { props: { movieDetail } }
  } catch (error: any) {
    return {
      props: { movieDetail: null },
    }
  }
}
export default MovieDetailPage
