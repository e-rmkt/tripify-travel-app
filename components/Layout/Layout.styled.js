import Link from "next/link";
import styled from "styled-components";

export const Main = styled.main`
  background-color: #448cff;
  width: 100vw;
  height: 120vh;
  position: relative;
  top: -16px;
  left: -20px;
  padding: 20px 20px;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 260px;
`;

export const StyledLink = styled(Link)`
  background-color: #ffa573;
  padding: 15px;
  border-radius: 20px;
  margin-top: 20px;
  font-size: 14px;
  &:link {
    color: #fff;
  }
  &:visited {
    color: #fff;
  }`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 25px;
  margin-top: 15px;
`;

export const BackButton = styled.button`
  border-style: none;
  background-color: transparent;
`;
