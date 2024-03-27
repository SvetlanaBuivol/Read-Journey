export const getBooksPerPage = ({isMobile, isTablet}) => {
    if (isMobile) {
        return 2
    } else if (isTablet) {
        return 8
    } else {
        return 10
    }
}

