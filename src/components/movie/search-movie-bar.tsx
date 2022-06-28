import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { KeyboardEvent, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export const SearchMovieBar = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [inputFocused, setInputFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const searchContainer = classNames(
    'min-w-[25rem] border border-transparent flex items-center bg-neutral-800 px-4 py-2 rounded-2xl transition-all duration-500',
    { 'bg-black border-cyan-600': inputFocused }
  )
  const handleSearchContainerClick = () => {
    // automatically focus the input element when clicked anywhere in search container
    inputRef.current?.focus()
  }
  //redirect to the search page when the user presses the enter key
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && query.length > 0) {
      router.push({ pathname: '/search-results', query: { q: query } })
    }
  }
  return (
    <div onClick={handleSearchContainerClick} className={searchContainer}>
      <BsSearch />
      <input
        placeholder='Search for a movie'
        className='flex-1 bg-transparent focus:outline-none pl-4'
        value={query}
        onChange={event => setQuery(event.currentTarget.value)}
        ref={inputRef}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        onKeyDownCapture={handleKeyDown}
      />
    </div>
  )
}
