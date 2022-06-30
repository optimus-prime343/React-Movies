import { Fragment, HTMLAttributes, useEffect, useRef } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element[]
}

export const Carousel = ({ children, ...rest }: CarouselProps) => {
  const slidesContainer = useRef<HTMLDivElement | null>(null)

  const handleSlideClick = (direction: 'left' | 'right') => {
    if (slidesContainer.current) {
      const { current } = slidesContainer
      const { clientWidth, scrollLeft } = current
      const newScrollLeft =
        direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    }
  }

  const carouselSlides = children.map((child, index) => (
    <Fragment key={index}>{child}</Fragment>
  ))

  useEffect(() => {
    if (!slidesContainer.current) return
    const { current } = slidesContainer

    const handleMouseWheel = (event: WheelEvent) => {
      event.preventDefault()
      if (event.deltaY < 0) return handleSlideClick('left')
      handleSlideClick('right')
    }

    current.addEventListener('wheel', handleMouseWheel, { passive: false })
    return () => {
      current.removeEventListener('wheel', handleMouseWheel)
    }
  }, [])

  return (
    <div className='flex items-center justify-between gap-2' {...rest}>
      <BsChevronLeft onClick={() => handleSlideClick('left')} />
      <div
        ref={slidesContainer}
        className='flex w-full gap-2 overflow-hidden transition-all duration-700'
      >
        {carouselSlides}
      </div>
      <BsChevronRight onClick={() => handleSlideClick('right')} />
    </div>
  )
}
