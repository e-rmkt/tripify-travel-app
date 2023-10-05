import styled from "styled-components";
import Link from "next/link";

export const StyledModelWrapper = styled.div`
  width: 300px;
  height: 200px;
`;

export const StyledModal = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  padding: 15px;
`;

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const StyledLink = styled(Link)`
  background-color: buttonface;
  padding-inline: 6px;
  border-width: 2px;
  border-style: solid;
`;
