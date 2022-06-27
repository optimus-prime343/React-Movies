import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { BaseLayout } from '../components/layouts'
import { MovieVideos } from '../components/movie'
import { FullPageLoader } from '../components/ui'
import { useMovieDetails } from '../hooks/use-movie-details'
import { fetchMovieDetail } from '../services/movie_service'
import { MovieDetail } from '../types/movie'
import { getMovieImageUrl } from '../utils/get-movie-image-url'

const MovieDetailPage: NextPage<{ initialMovieDetails: MovieDetail }> = ({
  initialMovieDetails,
}) => {
  const router = useRouter()
  const movieId = router.query.id as string
  const { data: movie, isLoading } = useMovieDetails(movieId, initialMovieDetails)
  if (!movie) return null
  if (isLoading) return <FullPageLoader />
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
    const initialMovieDetails = await fetchMovieDetail(id)
    return { props: initialMovieDetails }
  } catch (error: any) {
    return {
      props: { initialMovieDetails: null },
    }
  }
}
export default MovieDetailPage
