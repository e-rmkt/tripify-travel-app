import { StyledCancelButton } from "./CancelButton.styled";
import Modal from "../Modals";
import { useState } from "react";
import {
  StyledLink,
  StyledModalNoButton,
  StyledWrapper,
} from "../Modals/Modals.styled";

export default function CancelButton({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <StyledCancelButton type="button" onClick={() => setShowModal(true)}>
        {children}
      </StyledCancelButton>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          Are you sure you want to discard your changes?
          <StyledWrapper>
            <StyledLink href="javascript:history.back()">Yes</StyledLink>
            <StyledModalNoButton
              type="button"
              onClick={() => setShowModal(false)}
            >
              No
            </StyledModalNoButton>
          </StyledWrapper>
        </Modal>
      )}
    </>
  );
}
