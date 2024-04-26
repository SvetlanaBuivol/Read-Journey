import { useMediaQuery } from 'react-responsive';
import { Image, Wrapper } from './PhoneImage.styled';
import mobileImage from '../../assets/images/iPhoneMobile.png';
import desktopImage from '../../assets/images/iPhoneDesktop.png';

const PhoneImage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Wrapper>
      <Image
        src={isMobile ? mobileImage : desktopImage}
        alt="iPhone image"
        loading="lazy"
      />
    </Wrapper>
  );
};

export default PhoneImage;
