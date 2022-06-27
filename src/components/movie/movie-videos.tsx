import 'swiper/css'
import 'swiper/css/navigation'

import { Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

interface MovieVideosProps {
  embedIds: string[]
}
export const MovieVideos = ({ embedIds }: MovieVideosProps) => {
  const renderVideos = () => {
    return embedIds.map((embedId, index) => (
      <SwiperSlide key={index}>
        <iframe
          loading='lazy'
          className='aspect-video snap-center'
          width={400}
          height={300}
          src={`https://www.youtube.com/embed/${embedId}`}
          allow='allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"'
          allowFullScreen
        />
      </SwiperSlide>
    ))
  }
  return (
    <Swiper
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={3}
    >
      {renderVideos()}
    </Swiper>
  )
}
