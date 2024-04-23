import { useState, useEffect } from 'react';
import {
  BackgroundCircle,
  CircleContainer,
  CircleSVG,
  ProgressCircle,
  Text,
} from './CircularProgressBar.styled';

const CircularProgressBar = ({ percent }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const newOffset = circumference - (percent / 100) * circumference;
    setOffset(newOffset);
  }, [percent]);

  return (
    <CircleContainer>
      <CircleSVG viewBox="0 0 120 120">
        <BackgroundCircle r={50} cx="60" cy="60" />
        <ProgressCircle
          r={50}
          cx="60"
          cy="60"
          strokeDasharray={`${2 * Math.PI * 50} ${2 * Math.PI * 50}`}
          strokeDashoffset={offset}
        />
        <Text x="60" y="66">
          100%
        </Text>
      </CircleSVG>
    </CircleContainer>
  );
};

export default CircularProgressBar;
