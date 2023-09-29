import Link from "next/link";
import styled from "styled-components";

export const StyledEditButton = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 8px;
  border: 1px solid #448cff;
  background: #fff;
  width: 127px;
  height: 32px;
  padding: 6px 23px;
  border-radius: 13px;
  color: #448cff;
  font-size: 15px;
  font-weight: 600;
  text-wrap: nowrap;
  &:visited {
    color: #448cff;
  }
  &:link {
    color: #448cff;
  }
`;
