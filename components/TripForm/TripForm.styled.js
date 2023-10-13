import Link from "next/link";
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
  border: 1px solid #0082ff26;
  padding: 0 15px;
  font-size: 14px;
  font-family: sans-serif;
  &:focus {
    border: 1px solid #ffa573;
    outline: none;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 13px;
`;

export const StyledLink = styled(Link)`
  width: 100px;
  height: 25px;
  background-color: #448cff;
  border: 1px solid;
  color: #ffffff;
  border-radius: 13px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

export const StyledNoButton = styled.button`
  width: 100px;
  height: 25px;
  color: #ffffff;
  background-color: #6d6d6d;
  border: 1px solid;
  border-radius: 13px;
`;
export const Span = styled.span`
  font-size: 11px;
  color: #9c9c9c;
  align-self: flex-end;
  margin-right: 30px;
`;
