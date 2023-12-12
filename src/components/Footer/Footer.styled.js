import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #3470ff;
  height: 120px;
`;

export const TitleFooter = styled.h2`
  margin-top: 40px;
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  text-shadow: 1px 2px 2px #121417;
`;

export const ListFooter = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 50px;
`;

export const TextFooter = styled.p`
  color: #121417;
  text-shadow: 1px 2px 2px #fff;
`;

export const LinkFooter = styled.a`
  color: #fff;
  font-size: 18px;
  font-style: italic;
  font-weight: 900;
  &:hover,
  :focus {
    color: #121417;
  }
`;
