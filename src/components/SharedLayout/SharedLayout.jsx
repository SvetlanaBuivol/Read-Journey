import { Outlet } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Container from '../Container/Container';
import ButtonLogOut from '../ButtonLogOut/ButtonLogOut';
import UserInfo from '../UserInfo/UserInfo';
import MobileMenu from '../MobileMenu/MobileMenu';
import UserNav from '../UserNav/UserNav';
import Logo from '../Logo/Logo';
import {Box, HeaderWrapper} from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {

  return (
    <>
      <header>
        <Container>
          <HeaderWrapper>
            <Logo />

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
        <Suspense>
          <Outlet />
          </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
