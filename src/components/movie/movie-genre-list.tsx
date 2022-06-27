import 'swiper/css'

interface MovieGenreListProps {
  genres: string[]
}
export const MovieGenreList = ({ genres }: MovieGenreListProps) => {
  const renderGenreList = () => {
    return genres.map((genre, index) => (
      <button
        key={index}
        className='bg-neutral-800 px-4 py-1 rounded-2xl snap-center hover:bg-neutral-700 transition-colors duration-500'
      >
        {genre}
      </button>
    ))
  }
  return (
    <div className='flex gap-2 items-center overflow-x-scroll snap-x snap-mandatory'>
      {renderGenreList()}
    </div>
  )
}
