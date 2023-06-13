export const formattedDateHeader = new Intl.DateTimeFormat('ru',{
  weekday: "long",
  day: 'numeric',
  month: 'short',
})

export const updateDateFirstLetter = (str: string): string => {
  const firstLetter = str.at(0)
  return `${firstLetter?.toUpperCase()}${str.slice(1,-1)}`
}
