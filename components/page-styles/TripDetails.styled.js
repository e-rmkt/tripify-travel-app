import Image from "next/image";
import styled from "styled-components";

export const Header = styled.div`
  margin-bottom: 15px;
`;

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 10px;
  margin-top: 35px;
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

export const StyledImage = styled(Image)`
  border-radius: 13px;
`;
