import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: 10px;
  background-color: #fff;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(68, 140, 255, 0.15);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;
