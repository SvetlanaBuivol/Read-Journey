const RecommendedCard = ({img, bookTitle, author}) => {
    return (
        <div>
            <img src={img} alt={bookTitle} />
            <div>
                <h3>{bookTitle}</h3>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default RecommendedCard;