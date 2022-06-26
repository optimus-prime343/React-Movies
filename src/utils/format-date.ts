export const formatDate = (date: string | Date) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return dateFormatter.format(date instanceof Date ? date : new Date(date))
}
