import React from "react";
import {
  StyledModal,
  StyledModalText,
  StyledModalContent,
} from "./Modals.styled";

export default function Modal({ children }) {
  return (
    <StyledModal>
      <StyledModalContent>
        <StyledModalText>{children}</StyledModalText>
      </StyledModalContent>
    </StyledModal>
  );
}
