import Link from "next/link";
import styled from "styled-components";

export const StyledCancelButton = styled(Link)`
  width: 115px;
  height: 32px;
  padding: 6px 23px;
  border-radius: 13px;
  border: 1px solid #ff003d;
  background: #fff;
  color: #ff003d;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-wrap: nowrap;
  &:visited {
    color: #ff003d;
  }
`;
