import { styled } from "styled-components";
import Link from "next/link";

export const StyledCancelButton = styled(Link)`
  background-color: red;
  writing-mode: horizontal-tb !important;
  margin: 0em;
  padding-inline: 6px;
  border-style: outset;
  border-color: buttonborder;
  font-size: 13px;
  text-decoration: none;
  color: white;
`;
