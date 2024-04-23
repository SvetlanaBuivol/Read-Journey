export const getPrevPercent = (book, totalPages) => {
        let prevPercent = null
        if (book.progress?.length >= 2) {
            const readPrevPages = book?.progress[book.progress?.length - 2].finishPage
            prevPercent = ((readPrevPages / totalPages) * 100).toFixed(2)
        }
        return prevPercent
    }