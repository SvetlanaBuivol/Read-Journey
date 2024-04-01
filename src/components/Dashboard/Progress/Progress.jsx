import DashboardTitle from '../DashboardTitle/DashboardTitle';
import { Image, ImageBox, Text, Wrapper } from './Progress.styled';

const Progress = () => {
  return (
    <Wrapper>
      <DashboardTitle title="Progress" />
      <Text>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </Text>
      <ImageBox>
        <Image src="./images/star.png" alt="star" />
      </ImageBox>
    </Wrapper>
  );
};

export default Progress;
