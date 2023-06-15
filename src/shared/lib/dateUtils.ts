const formattedRuTime = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const formatDateToISO  = (date: Date) => {
  const formattedDate = formattedRuTime.format(date);
  const year = formattedDate.slice(-4);
  const mouth = formattedDate.slice(3, 5);
  const day = formattedDate.slice(0, 2);
  return `${year}-${mouth}-${day}`;
};