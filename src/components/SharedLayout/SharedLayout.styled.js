import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background: #3470ff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #121417;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1204px;
  padding: 0 10px;
  font-family: 'Manrope';
  color: #121417;
`;

export const ContainerHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
`;

export const Nav = styled.nav`
  margin: 0 auto;
  padding: 10px;
`;

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  font-weight: 900;
  -webkit-text-stroke: 0.3px #121417;
  text-shadow: 1px 1px 1px #121417;
  &:hover,
  :focus {
    color: #121417;
    text-shadow: none;
  }
  &.active {
    color: #121417;
    -webkit-text-stroke: 0.3px #ffffff;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-style: italic;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  &:hover,
  :focus {
    color: #121417;
  }
`;
