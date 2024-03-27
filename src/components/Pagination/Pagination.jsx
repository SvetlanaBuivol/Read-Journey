import { useDispatch, useSelector } from "react-redux";
import { Button, PaginateWrapper } from "./Pagination.styled";
import { getCurrentPage, getTotalPages } from "../../redux/books/booksSelectors";
import { goToNextPage, goToPrevPage } from "../../redux/books/booksSlice";

const Pagination = () => {
    const currentPage = useSelector(getCurrentPage)
    const totalPages = useSelector(getTotalPages)
    const dispatch = useDispatch()

    const handleNextPage = () => {
        dispatch(goToNextPage())
    }

    const handlePrevPage = () => {
        dispatch(goToPrevPage())
    }
    return (
        <PaginateWrapper>
            <Button type="button" disabled={currentPage === 1} onClick={handlePrevPage}>
                <svg><use xlinkHref="./svg/svgSprite.svg#icon-left"></use></svg>
            </Button>
            <Button type="button" disabled={currentPage === totalPages} onClick={handleNextPage}>
                <svg><use xlinkHref="./svg/svgSprite.svg#icon-right"></use></svg>
            </Button>
       </PaginateWrapper>
   )
}

export default Pagination;