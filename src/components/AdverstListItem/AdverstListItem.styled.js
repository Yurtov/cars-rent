import styled from 'styled-components';

export const DivListItem = styled.div`
  position: relative;
`;

export const BtnFavorite = styled.button`
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  outline: none;
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;

export const TitleAdvert = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 14px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const StyledList = styled.ul`
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 0;
`;

export const StyledListItem = styled.li`
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
