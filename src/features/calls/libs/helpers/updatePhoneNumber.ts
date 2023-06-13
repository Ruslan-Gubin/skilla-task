export const updatePhoneNumber = (value: string) => {
  if (!value) return value;
  const currentValue = value.replace(/[^\d]/g, "");
  const cvLength = currentValue.length;

  if (value === "()") {
    return "";
  }

  if (cvLength < 4) {
    return `(${currentValue.slice(0, 3)})`;
  }

  if (cvLength < 6) {
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 5)}`;
  }
  if (cvLength < 8) {
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
      3,
      5
    )}-${currentValue.slice(5, 7)}`;
  }

  if (cvLength < 10) {
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
      3,
      5
    )}-${currentValue.slice(5, 7)}-${currentValue.slice(7, 9)}`;
  }
  return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
    3,
    5
  )}-${currentValue.slice(5, 7)}-${currentValue.slice(7, 9)}`;
};
