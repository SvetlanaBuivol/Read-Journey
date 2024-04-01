import { useSelector } from "react-redux"
import { getReadingBook } from "../../../../redux/books/booksSelectors"

const Diary = () => {
    const book = useSelector(getReadingBook)

    const progress = book.progress
    const totalPages = book.totalPages

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear().toString()
        return `${day}.${month}.${year}`
    }

    const calculatePercentage = (pagesRead, totalPages) => {
        const percentage = (pagesRead / totalPages) * 100
        return percentage.toFixed(1) + '%'
    }

    const readingTime = (endDate, startDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const diffInMinutes = Math.floor((end - start) / (1000 * 60))

        const hours = Math.floor(diffInMinutes / 60)
        const minutes = diffInMinutes % 60

        if (hours > 0 && minutes > 0) {
            return`${hours} hours ${minutes} minutes`
        } else if (hours > 0) {
            return `${hours} hours`
        } else {
            return `${minutes} minutes`
        }
    }

    const readPages = (startPage, endPage) => {
        const pages = endPage - startPage
        return `${pages} pages`
    }

    console.log("Diary  progress", progress)
    return (
        <div>
            {progress.map(item => (
                <div>
                    <div>{formatDate(item.finishReading)}</div>
                    <div>{calculatePercentage((item.finishPage - item.startPage), totalPages)}</div>
                    <div>{readingTime(item.finishReading, item.startReading)}</div>
                    <div>{readPages(item.startPage, item.finishPage)}</div>
                    <div>{item.speed} pages per hour</div>
                </div>
            ))}
         </div>
     )
}

export default Diary