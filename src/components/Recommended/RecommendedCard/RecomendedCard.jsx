import { BookCard, BookInfo } from "./RecommendedCard.styled";

const RecommendedCard = ({img, bookTitle, author}) => {
    return (
        <BookCard>
            <img src={img} alt={bookTitle} />
            <BookInfo>
                <h3>{bookTitle}</h3>
                <p>{author}</p>
            </BookInfo>
        </BookCard>
    )
}

export default RecommendedCard;