import { StyledCancelButton } from "./CancelButton.styled";
import Modal from "../Modals";
import { useState } from "react";
import { StyledLink } from "../Modals/Modals.styled";

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
          <StyledLink href="javascript:history.back()">Yes</StyledLink>
          <button type="button" onClick={() => setShowModal(false)}>
            No
          </button>
        </Modal>
      )}
    </>
  );
}
