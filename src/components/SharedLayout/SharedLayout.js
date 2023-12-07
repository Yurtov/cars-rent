import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, ListNav, Nav, StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <NavLink to="/">
          <svg width="30" height="30">
            <use href="../../images/icons.svg#icon-downarrow"></use>
          </svg>
          <p>Rent</p>
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
        <ul>
          <li>
            <a href="mailto:gta_rent@gmail.com">gta_rent@gmail.com</a>
          </li>
          <li>
            <a href="tel:+31234567890">+3(123)456-78-90</a>
          </li>
        </ul>
      </Header>
      <main>
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
