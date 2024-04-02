import { useState } from 'react';
import DashboardTitle from '../DashboardTitle/DashboardTitle';
import {  Box, Navigation, Svg } from './Details.styled';
import { useSelector } from 'react-redux';
import { getReadingBook } from '../../../redux/books/booksSelectors';
import Diary from './Diary/Diary';
import Statistic from './Statistic/Statistic';

const Details = () => {
  const book = useSelector(getReadingBook);
  const [activeButton, setActiveButton] = useState('diary');

  const onStatisticClick = () => {
    setActiveButton('statistic');
  };

  const onDiaryClick = () => {
    setActiveButton('diary');
  };

  return (
    <div>
      <Navigation>
        <DashboardTitle title="Diary" />
        <Box>
          <button onClick={onDiaryClick}>
            <Svg $isActive={activeButton === 'diary'}>
              <use xlinkHref="./svg/svgSprite.svg#icon-diary"></use>
            </Svg>
          </button>
          <button onClick={onStatisticClick}>
            <Svg $isActive={activeButton === 'statistic'}>
              <use xlinkHref="./svg/svgSprite.svg#icon-statistic"></use>
            </Svg>
          </button>
        </Box>
      </Navigation>

      {activeButton === 'diary' ? <Diary /> : <Statistic />}
    </div>
  );
};

export default Details;
