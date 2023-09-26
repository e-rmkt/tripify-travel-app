import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
  margin-top: 38px;
  align-items: center;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  width: 275px;
  height: 53px;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  height: 30px;
  border-radius: 50px;
  border: 1px solid rgba(0, 130, 255, 0.15);
  padding: 0 15px;
  font-size: 14px;
  font-family: sans-serif;
  &:focus {
    border: 1px solid #ffa573;
    outline: none;
  }
`;
