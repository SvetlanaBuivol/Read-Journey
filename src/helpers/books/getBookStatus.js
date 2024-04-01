export const getBookStatus = (book) => {
        const progress = book.progress
        let bookStatus
        if (progress) {
            const lastItem = progress.length > 0 && progress[progress.length - 1]
            bookStatus = lastItem ? lastItem.status : null
        }
        return bookStatus
}
