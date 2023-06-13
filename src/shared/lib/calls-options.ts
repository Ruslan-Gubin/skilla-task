import { iconConstants } from "../constants";

export const staffs = [
  { value: "Все сотрудники", label: "allStaff", checked: true },
  {
    value: "Константин К.",
    label: "Константин К.",
    img: iconConstants.iconStaff,
    checked: false,
  },
  {
    value: "Полина З.",
    label: "Полина З.",
    img: iconConstants.iconStaff,
    checked: false,
  },
];

export const callsTypes = [
  {
    value: "Все типы",
    label: "AllTypes",
    checked: true,
  },
  {
    value: "Входящие",
    label: "incoming",
    checked: false,
  },
  {
    value: "Исходящие",
    label: "outgoing",
    checked: false,
  },
];

export const allCalls = [
  {
    value: "Все звонки",
    label: "AllCalls",
    checked: true,
  },
  {
    value: "Новые клиенты",
    label: "newClient",
    checked: false,
  },
  {
    value: "Все исполнители",
    label: "allPerformers",
    checked: false,
  },
  {
    value: "Через приложение",
    label: "throughTheApp",
    checked: false,
  },
  {
    value: "Прочие звонки",
    label: "otherCalls",
    checked: false,
  },
];
export const ratingsOptions = [
  {
    value: "Все оценки",
    label: "allRatings",
    checked: true,
  },
  {
    value: "Распознать",
    label: "recognize",
    checked: false,
  },
];
export const allErrorsOptions = [
  {
    value: "Все ошибки",
    label: "allErrors",
    checked: true,
  },
  {
    value: "Приветствие",
    label: "greeting",
    checked: false,
  },
  {
    value: "Имя",
    label: "name",
    checked: false,
  },
  {
    value: "Цена",
    label: "count",
    checked: false,
  },
  {
    value: "Скидка",
    label: "discount",
    checked: false,
  },
  {
    value: "Предзаказ",
    label: "preOrder",
    checked: false,
  },
  {
    value: "Благодарность",
    label: "gratitude",
    checked: false,
  },
  {
    value: "Стоп слова",
    label: "stopWords",
    checked: false,
  },
];
