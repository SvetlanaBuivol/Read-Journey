import { Card } from './BookCard.styled';

const BookCard = ({ imageUrl, title, author }) => {
  return (
    <Card>
      <img src={imageUrl} alt={author} />
      <h3>{title}</h3>
      <p>{author}</p>
    </Card>
  );
};

export default BookCard;
