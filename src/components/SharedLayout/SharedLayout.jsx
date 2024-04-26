import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import ButtonLogOut from '../ButtonLogOut/ButtonLogOut';
import UserInfo from '../UserInfo/UserInfo';
import MobileMenu from '../MobileMenu/MobileMenu';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import {
  Box,
  Container,
  ContainerOutlet,
  HeaderWrapper,
} from './SharedLayout.styled';
import LogoText from '../../components/Logo/LogoText';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Container>
          <HeaderWrapper>
            <MediaQuery maxWidth={1439}>
              {matches => (matches ? <Logo /> : <LogoText />)}
            </MediaQuery>

            <MediaQuery maxWidth={767}>
              {matches =>
                matches ? (
                  <Box>
                    <UserInfo />
                    <MobileMenu />
                  </Box>
                ) : (
                  <>
                    <UserNav />
                    <Box>
                      <UserInfo />
                      <ButtonLogOut />
                    </Box>
                  </>
                )
              }
            </MediaQuery>
          </HeaderWrapper>
        </Container>
      </header>

      <main>
        <ContainerOutlet>
          <Suspense>
            <Outlet />
          </Suspense>
        </ContainerOutlet>
      </main>
    </>
  );
};

export default SharedLayout;
