import styled from 'styled-components';

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
  border-right: 1px solid #000;
  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: none;
  }
`;
