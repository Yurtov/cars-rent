import styled from 'styled-components';

export const SectionAdvantages = styled.section`
  margin-top: 40px;
`;

export const TitleAdvantages = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 900;
`;

export const ListAdvantages = styled.ul`
  margin-top: 20px;
  text-align: center;
  display: flex;
  gap: 30px;
`;

export const ListItemAdvantages = styled.li`
  background-color: rgb(112, 167, 255, 0.2);
  border-radius: 14px;
  height: 300px;
  padding: 20px;
  width: 100%;
  &:nth-child(2) {
    margin-top: 50px;
  }
`;

export const ListItemAdvantagesTitle = styled.h3`
  margin-top: 20px;
`;

export const ListItemAdvantagesText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-style: italic;
`;
