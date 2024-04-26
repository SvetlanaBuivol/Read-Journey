export const isPagesRead = book => {
  const isRead = book.timeLeftToRead === undefined ? false : true;
  return isRead;
};
