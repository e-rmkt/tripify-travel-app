import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 25px;
  margin-top: 15px;
`;

export const StyledLink = styled(Link)`
  gap: 8px;
  border: 1px solid #448cff;
  background: #448cff;
  width: 90px;
  height: 32px;
  padding: 3px;
  border-radius: 13px;
  color: #448cff;
  font-size: 12px;
  font-weight: 400;
  text-wrap: nowrap;
  &:visited {
    color: #fff;
  }
  &:link {
    color: #fff;
  }
`;
