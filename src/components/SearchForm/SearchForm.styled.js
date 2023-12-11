import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  width: 859px;
  height: 74px;
  display: flex;
  gap: 18px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: #8a8a89;
`;

export const StyledField = styled(Field)`
  padding: 14px 18px;
  border: none;
  font-size: 18px;
  color: #121417;
  background-color: #f7f7fb;
`;

export const InputMileage = styled.div`
  display: flex;

  & > ${StyledField} {
    width: 160px;
  }

  & > ${StyledField}:first-child {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }
`;

export const Button = styled.button`
  width: 136px !important;
  height: 48px;
  align-self: flex-end;
  font-size: 14px;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;
  color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;
