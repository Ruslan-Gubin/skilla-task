export const getTimeCalls = (date: string) => {
  if (!date) return;
  return date.slice(-8, -3)
}

export const formattedPhone = (string: string) => {
  return `+${string.slice(0,1)} (${string.slice(1,4)}) ${string.slice(4,7)}-${string.slice(7,9)}-${string.slice(9)}`
}