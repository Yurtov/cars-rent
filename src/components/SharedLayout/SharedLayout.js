import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  ContactLink,
  ContactList,
  Container,
  ContainerHeader,
  Header,
  ListNav,
  Nav,
  StyledNavLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Container>
          <ContainerHeader>
            <NavLink to="/">
              <img
                src="https://fontmeme.com/permalink/231207/0bf71085da3f0627ad58f1db8911a0aa.png"
                alt="logo"
                border="0"
              />
            </NavLink>

            <Nav>
              <ListNav>
                <li>
                  <StyledNavLink to="/">Home</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/catalog">Catalog</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/favorites">Favorites</StyledNavLink>
                </li>
              </ListNav>
            </Nav>
            <ContactList>
              <li>
                <ContactLink href="mailto:gta_rent@gmail.com">
                  gta_rent@gmail.com
                </ContactLink>
              </li>
              <li>
                <ContactLink href="+380730000000">
                  +38(073)000-00-00
                </ContactLink>
              </li>
            </ContactList>
          </ContainerHeader>
        </Container>
      </Header>
      <main>
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
