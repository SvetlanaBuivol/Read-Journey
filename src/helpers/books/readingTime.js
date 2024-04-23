export const readingTime = (endDate, startDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMinutes = Math.floor((end - start) / (1000 * 60));

    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    if (hours > 0 && minutes > 0) {
      return `${hours} hours ${minutes} minutes`;
    } else if (hours > 0) {
      return `${hours} hours`;
    } else {
      return `${minutes} minutes`;
    }
  };