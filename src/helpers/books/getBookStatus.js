export const getBookStatus = book => {
  const progress = book.progress;
  let status;
  let isBookStarted;
  if (progress) {
    const lastItem = progress.length > 0 && progress[progress.length - 1];
    status = lastItem ? lastItem.status : null;
    isBookStarted =
      progress.length > 0 && progress[0].finishPage !== undefined
        ? progress[0].finishPage
        : false;
  }
  return { status, isBookStarted };
};
