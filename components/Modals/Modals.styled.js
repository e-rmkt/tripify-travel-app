import styled from "styled-components";
import Link from "next/link";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const StyledModalContent = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 300px;
  padding: 16px;
  position: relative;
`;
export const StyledLink = styled(Link)`
  width: 100px;
  height: 25px;
  background-color: #448cff;
  border: 1px solid;
  color: white;
  border-radius: 13px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

export const StyledModalYesButton = styled.button`
  width: 100px;
  height: 25px;
  background-color: #448cff;
  border: 1px solid;
  color: white;
  border-radius: 13px;
`;
export const StyledModalNoButton = styled.button`
  width: 100px;
  height: 25px;
  color: white;
  background-color: #6d6d6d;
  border: 1px solid;
  border-radius: 13px;
`;
export const StyledModalParagraph = styled.p`
  font-size: 16px;
`;
