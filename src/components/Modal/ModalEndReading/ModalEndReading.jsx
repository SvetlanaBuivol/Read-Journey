import {
  CloseButton,
  Image,
  ModalContant,
  Text,
  Title,
} from './ModalEndReading.styled';

const ModalEndReading = ({ onClose }) => {
  return (
    <ModalContant>
      <CloseButton type="button" onClick={onClose}>
        <svg width={28} height={28}>
          <use xlinkHref="./svg/svgSprite.svg#icon-close"></use>
        </svg>
      </CloseButton>
      <Image src="./images/books.png" alt="great" />
      <Title>The book is read</Title>
      <Text>
        It was an <span>exciting journey</span>, where each page revealed new
        horizons, and the characters became inseparable friends.
      </Text>
    </ModalContant>
  );
};

export default ModalEndReading;
