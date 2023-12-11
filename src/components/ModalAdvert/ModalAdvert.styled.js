import styled from 'styled-components';

export const MoadalContainer = styled.div`
  height: 100%;
  font-family: 'Manrope';
  color: #121417;
`;

export const BtnClose = styled.button`
  color: #121417;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  outline: none;
`;

export const SvgClose = styled.svg`
  fill: currentColor;
`;

export const Img = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
`;

export const Title = styled.h3`
  margin-top: 14px;
  font-size: 18px;
`;

export const ColorAccent = styled.span`
  color: #3470ff;
`;

export const StyledListModal = styled.ul`
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 0;
`;

export const StyledListItemModal = styled.li`
  height: 18px;
  padding: 0 6px;
  color: rgba(18, 20, 23, 0.5);
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: none;
  }
`;

export const Text = styled.p`
  margin-top: 14px;
  font-size: 14px;
`;

export const TitleH4 = styled.h4`
  margin-top: 24px;
  font-size: 14px;
`;

export const ConditionsList = styled.ul`
  margin: 8px 0 24px;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ConditionsListItem = styled.li`
  padding: 7px 14px;
`;

export const LinkCall = styled.a`
  border: 1px;
  color: #ffffff;
  border-radius: 12px;
  background-color: #3470ff;
  padding: 12px 50px;
  align-self: flex-end;
`;
