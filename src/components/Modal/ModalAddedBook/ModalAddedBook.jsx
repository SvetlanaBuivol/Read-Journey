import {
  CloseButton,
  Image,
  ModalContant,
  Text,
  Title,
} from './ModalAddedBook.styled';

const ModalAddedBook = ({ onClose }) => {
  return (
    <ModalContant>
      <CloseButton type="button" onClick={onClose}>
        <svg width={28} height={28}>
          <use xlinkHref="./svg/svgSprite.svg#icon-close"></use>
        </svg>
      </CloseButton>
      <Image src="./images/ok.png" alt="great" />
      <Title>Good job</Title>
      <Text>
        Your book is now in <span>the library!</span> The joy knows no bounds
        and now you can start your training
      </Text>
    </ModalContant>
  );
};

export default ModalAddedBook;
