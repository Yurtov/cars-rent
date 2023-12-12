import styled from 'styled-components';

export const SectionHero = styled.section`
  width: 100%;
  height: 500px;
  background-image: url('https://i.ibb.co/7jRV5w7/image.jpg');
  background-size: cover;
  color: #ffffff;
  border-radius: 15px;
`;

export const TitleHero = styled.h1`
  padding-top: 140px;
  padding-left: 40px;
  font-size: 55px;
  font-weight: 900;
  text-shadow: 1px 2px 2px #121417;
`;

export const TextHero = styled.p`
  padding-left: 40px;
  margin-top: 20px;
  font-size: 20px;
  text-shadow: 1px 2px 2px #121417;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const BtnCatalog = styled.button`
  margin-right: 100px;
  width: 140px;
  height: 50px;
  font-size: 20px;
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
