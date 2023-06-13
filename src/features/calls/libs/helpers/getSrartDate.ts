import { PeriodVariant } from "../../model";

const formattedRuTime = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const formattedDate = (date: Date) => {
  const formattedDate = formattedRuTime.format(date);
  const year = formattedDate.slice(-4);
  const mouth = formattedDate.slice(3, 5);
  const day = formattedDate.slice(0, 2);
  return `${year}-${mouth}-${day}`;
};

export const getDate = (period: PeriodVariant) => {
  const date = new Date();
  let resultDate = "";

  switch (period) {
    case "today":
      break;
    case "threeDay":
      date.setDate(date.getDate() - 3);
      break;
    case "week":
      date.setDate(date.getDate() - 7);
      break;
    case "month":
      date.setMonth(date.getMonth() - 1);
      break;
    case "year":
      date.setFullYear(date.getFullYear() - 1);
      break;
  }

  resultDate = formattedDate(date);

  return resultDate;
};
