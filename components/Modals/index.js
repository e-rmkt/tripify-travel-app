import React from "react";
import {
  StyledModal,
  StyledModalParagraph,
  StyledModalContent,
} from "./Modals.styled";

export default function Modal({ children }) {
  return (
    <StyledModal>
      <StyledModalContent>
        <StyledModalParagraph>{children}</StyledModalParagraph>
      </StyledModalContent>
    </StyledModal>
  );
}
