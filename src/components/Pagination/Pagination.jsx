import { Button, PaginateWrapper } from "./Pagination.styled";

const Pagination = () => {
    return (
        <PaginateWrapper>
            <Button type="button">
                <svg><use xlinkHref="./svg/svgSprite.svg#icon-left"></use></svg>
            </Button>
            <Button type="button">
                <svg><use xlinkHref="./svg/svgSprite.svg#icon-right"></use></svg>
            </Button>
       </PaginateWrapper>
   )
}

export default Pagination;