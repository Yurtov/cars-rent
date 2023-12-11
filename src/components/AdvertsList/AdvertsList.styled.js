import styled from 'styled-components';

export const AdvertsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  margin-top: 50px;
`;

export const Advert = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  align-self: flex-end;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;
  color: #ffffff;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;

export const ButtonLoadMore = styled.button`
  width: 100px;
  display: flex;
  justify-content: center;
  margin: 100px auto 0;
  border: none;
  background-color: inherit;
  color: #3470ff;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  &:hover,
  :focus {
    color: #0b44cd;
  }
`;
