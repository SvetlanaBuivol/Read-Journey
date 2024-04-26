export const calculatePercentage = (pagesRead, totalPages) => {
  const percentage = (pagesRead / totalPages) * 100;
  return percentage.toFixed(1) + '%';
};
