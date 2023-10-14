import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: 10px;
  background-color: #fff;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #0082ff26;
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
  object-fit: cover;
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 108px;
  width: 120px;
  min-width: 120px;
`;
