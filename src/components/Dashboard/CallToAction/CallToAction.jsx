import { Link } from 'react-router-dom';
import DashboardTitle from '../DashboardTitle/DashboardTitle';
import {
  LinkWrapper,
  List,
  ListItem,
  Number,
  StyledLink,
  Text,
  Wrapper,
} from './CallToAction.styled';

const CallToAction = () => {
  return (
    <Wrapper>
      <DashboardTitle title="Start your workout" />
      <List>
        <ListItem>
          <Number>1</Number>
          <Text>
            Create a personal library:{' '}
            <span>add the books you intend to read to it.</span>
          </Text>
        </ListItem>
        <ListItem>
          <Number>2</Number>
          <Text>
            Create your first workout:{' '}
            <span>define a goal, choose a period, start training.</span>
          </Text>
        </ListItem>
      </List>
      <LinkWrapper>
        <StyledLink to={'/library'}>My library</StyledLink>
        <Link to={'/library'}>
          <svg width={24} height={24}>
            <use xlinkHref="./svg/svgSprite.svg#icon-to"></use>
          </svg>
        </Link>
      </LinkWrapper>
    </Wrapper>
  );
};

export default CallToAction;
