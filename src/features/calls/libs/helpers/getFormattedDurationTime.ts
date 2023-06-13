export const getFormattedDurationTime = (num: number): string => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let copyTime = structuredClone(num);

  if (copyTime > 3600) {
    const totalHours = Math.floor(copyTime / 3600);
    copyTime -= 3600 * totalHours;
    hours = totalHours;
  }

  if (copyTime > 60 && copyTime < 3600) {
    const totalMinutes = Math.floor(copyTime / 60);
    copyTime -= 60 * totalMinutes;
    minutes = totalMinutes;
  }

  if (copyTime < 60) {
    seconds = copyTime;
    copyTime = 0;
  }

  return hours
    ? `${hours}:${formattedTime(minutes)}:${formattedTime(seconds)}`
    : `${formattedTime(minutes)}:${formattedTime(seconds)}`;
};

function formattedTime(num: number) {
  if (num < 10) {
    return `0${num}`;
  }

  return +num;
}
