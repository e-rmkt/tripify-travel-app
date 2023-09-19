import { styled } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  border: 0.125rem solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  font-size: 3.125rem;
  text-decoration: none;
`;
