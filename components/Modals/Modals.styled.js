import styled from "styled-components";
import Link from "next/link";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
`;
export const StyledModalContent = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: #00000059 0px 5px 15px;
  width: 300px;
  padding: 16px;
  position: relative;
`;
export const StyledLink = styled(Link)`
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  width: 98px;
  height: 23px;
  padding: 1px 6px 1px 6px;
  background-color: #448cff;
  border-radius: 13px;
  && {
    color: #ffffff;
  }
`;

export const StyledOkLink = styled(Link)`
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  margin-left: 92px;
  width: 88px;
  height: 23px;
  background-color: #6d6d6d;
  border: 1px solid;
  border-radius: 13px;
  && {
    color: #ffffff;
  }
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
  color: #ffffff;
  border-radius: 13px;
`;
export const StyledModalNoButton = styled.button`
  width: 100px;
  height: 25px;
  color: #ffffff;
  background-color: #6d6d6d;
  border: 1px solid;
  border-radius: 13px;
`;
export const StyledModalText = styled.section`
  font-size: 16px;
  margin-bottom: 31px;
`;

export const StyledModalOkButton = styled.button`
  margin-left: 92px;
  width: 100px;
  height: 25px;
  color: #ffffff;
  background-color: #6d6d6d;
  border: 1px solid;
  border-radius: 13px;
`;
