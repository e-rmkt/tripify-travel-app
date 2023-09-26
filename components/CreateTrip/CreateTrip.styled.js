import { styled } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  position: fixed;
  left: 50%;
  bottom: 10px;
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
