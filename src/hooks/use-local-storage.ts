import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  //passing value as function so we have save api as useState
  const setValue = (value: T | ((value: T) => T)) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value
      //save state
      setStoredValue(newValue)
      //save state to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue] as const
}
