import PropTypes from 'prop-types';
import { Svg } from './StatusIcon.styled';

const StatusIcon = ({ isError, isValid }) => {
  return (
    <>
      {isError && (
        <Svg>
          <use xlinkHref="/src/assets/svg/svgSprite.svg#icon-error"></use>
        </Svg>
      )}
      {isValid && (
        <Svg>
          <use xlinkHref="/src/assets/svg/svgSprite.svg#icon-done"></use>
        </Svg>
      )}
    </>
  );
};

StatusIcon.propTypes = {
  isError: PropTypes.bool,
  isValid: PropTypes.bool,
};

export default StatusIcon;
