import { Box, LogoName } from "./Logo.styled";

const Logo = (props) => {
  return (
    <Box>
      <svg width={42} height={17}>
        <use xlinkHref="svg/svgSprite.svg#icon-logo"></use>
          </svg>
          <LogoName {...props}>read journey</LogoName>
    </Box>
  );
};

export default Logo;