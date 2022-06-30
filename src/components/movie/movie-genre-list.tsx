import { MovieGenre } from '../../types/movie-genre'
import { Carousel } from '../ui'
import NextLink from '../ui/next-link'

interface MovieGenreListProps {
  genres: MovieGenre[]
}
export const MovieGenreList = ({ genres }: MovieGenreListProps) => {
  const renderGenreList = () => {
    return genres.map((genre, index) => (
      <NextLink
        href={`/genre/${genre.name}?id=${genre.id}`}
        key={index}
        className={
          'whitespace-nowrap bg-neutral-800 px-4 py-1 rounded-2xl snap-center hover:bg-neutral-700 transition-colors duration-500'
        }
      >
        {genre.name}
      </NextLink>
    ))
  }
  return <Carousel>{renderGenreList()}</Carousel>
}
