import PropTypes from 'prop-types';
import { Button, Svg } from './VisiblePasswordIcon.styled';

const VisiblePasswordIcon = ({ visiblePassword, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {visiblePassword ? (
        <Svg>
          <use xlinkHref="./svg/svgSprite.svg#icon-eye"></use>
        </Svg>
      ) : (
        <Svg>
          <use xlinkHref="./svg/svgSprite.svg#icon-eye-off"></use>
        </Svg>
      )}
    </Button>
  );
};

VisiblePasswordIcon.propTypes = {
  visiblePassword: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VisiblePasswordIcon;
