export const getPercent = (total: number, current: number): number => {
  return (Math.floor(current) * 100) / Math.floor(total);
};
