// import defaultImage from './images/ownDefaultImage.jpg'

import { useDispatch } from "react-redux"
import { BookInfo, BookInfoBox, Card, Image } from "./MyLibraryBookCard.styled"
import { deleteOwnBookAsync } from "../../../redux/books/booksOperations"

const MyLibraryBookCard = ({ image, title, author, id }) => {
    const dispatch = useDispatch()

    const handleDeleteBook = () => {
        dispatch(deleteOwnBookAsync(id))
    }
    return (
        <Card>
            <Image src={image ? image : './images/ownDefaultImage.jpg'} alt={title} />
            <BookInfoBox>
                <BookInfo>
                    <h3>{title}</h3>
                    <p>{author}</p>
                </BookInfo>
                <button onClick={handleDeleteBook}>
                    <svg width={28} height={28}><use xlinkHref="./svg/svgSprite.svg#icon-trash"></use></svg>
                </button>
            </BookInfoBox>
        </Card>
    )
}

export default MyLibraryBookCard