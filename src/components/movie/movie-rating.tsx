import classNames from 'classnames'
import React from 'react'

interface MovieRatingProps {
  voteAverage: number
}
export const MovieRating = ({ voteAverage }: MovieRatingProps) => {
  const score = voteAverage * 10

  const rating = classNames(
    'flex items-center justify-center w-10 h-10 rounded-full',
    {
      'bg-red-600': score <= 50,
      'bg-yellow-600': score > 50 && score <= 74,
      'bg-green-600': score > 74,
    }
  )
  return (
    <div className={rating}>
      <p className={rating}>{score}</p>
    </div>
  )
}
