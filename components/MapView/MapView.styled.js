import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  margin-left: 92px;
  width: 105px;
  height: 28px;
  background-color: #448cff;
  border: 1px solid;
  border-radius: 13px;
  && {
    color: #ffffff;
  }
`;
