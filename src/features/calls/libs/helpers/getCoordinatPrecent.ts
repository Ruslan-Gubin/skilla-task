export const getPrecentProgress = (e: React.MouseEvent<HTMLDivElement>) => {
  const mouseClick = e.clientX;
  const nodeCoordinat = e.currentTarget.getBoundingClientRect();
  const nodeWidth = nodeCoordinat.width;
  const nodeClick = mouseClick - nodeCoordinat.x;
  return Math.floor((nodeClick * 100) / nodeWidth);
};
