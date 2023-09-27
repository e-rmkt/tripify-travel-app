import { styled } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  border: 0.125rem solid #ffa573;
  background-color: #ffa573;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 3.125rem;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;
