import { formatDateToISO } from "../../../../shared/lib/dateUtils";
import { PeriodVariant } from "../../model";



export const getDate = (period: PeriodVariant): string => {
  const date = new Date();

  switch (period) {
    case "today":
      return formatDateToISO(date);

    case "threeDay":
      date.setDate(date.getDate() - 3);
      return formatDateToISO(date);

    case "week":
      date.setDate(date.getDate() - 7);
      return formatDateToISO(date);

    case "month":
      date.setMonth(date.getMonth() - 1);
      return formatDateToISO(date);

    case "year":
      date.setFullYear(date.getFullYear() - 1);
      return formatDateToISO(date);

    default:
      throw new Error(`Invalid period value: ${period}`);
  }
};
