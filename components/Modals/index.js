import React from "react";
import ReactDOM from "react-dom";
import {
  StyledModelWrapper,
  StyledModal,
  StyledModalOverlay,
  StyledModalBody,
  StyledModalHeader,
} from "./Modals.styled";

const Modal = ({ onClose, children, title }) => {
  const handleCloseClick = (event) => {
    event.preventDefault();
    onClose();
  };

  const modalContent = (
    <StyledModalOverlay>
      <StyledModelWrapper>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </StyledModalHeader>
          {title && <h1>{title}</h1>}
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModelWrapper>
    </StyledModalOverlay>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal;
