export const getCurrentPercent = (readPages, totalPages) => {
    const percentageRead = ((readPages / totalPages) * 100).toFixed(2)
    const percentage = isNaN(percentageRead) ? false : percentageRead;
    return percentage
}