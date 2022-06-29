import { Carousel } from '../ui'

interface MovieVideosProps {
  embedIds: string[]
}
export const MovieVideos = ({ embedIds }: MovieVideosProps) => {
  const renderVideos = () => {
    return embedIds.map((embedId, index) => (
      <iframe
        key={index}
        loading='lazy'
        className='aspect-video snap-center'
        width={400}
        height={300}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow='allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"'
        allowFullScreen
      />
    ))
  }
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Official Youtube Videos</h2>
      {embedIds.length > 0 ? (
        <Carousel>{renderVideos()}</Carousel>
      ) : (
        <p>No Videos Found</p>
      )}
    </div>
  )
}
