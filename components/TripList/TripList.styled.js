import Skeleton from "react-loading-skeleton";
import { styled } from "styled-components";

export const StyledUnorderedList = styled.ul`
  gap: 15px;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const LoadingSkeleton = styled(Skeleton)`
  z-index: -1;
  list-style-type: none;
  display: flex;
  gap: 10px;
  width: 100%;
  height: 113px;
  background-color: #fff;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(68, 140, 255, 0.15);
`;
