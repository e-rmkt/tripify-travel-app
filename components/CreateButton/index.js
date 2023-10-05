import { StyledCreateButton } from "./CreateButton.styled";
import Modal from "../Modals";
import { StyledLink } from "../Modals/Modals.styled";
import { useState } from "react";

export default function CreateButton({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <StyledCreateButton
        type="submit"
        onClick={() => {
          if (tripDataEndDate < tripDataStartDate) {
            return;
          } else {
            setShowModal(true);
          }
        }}
      >
        {children}
      </StyledCreateButton>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          Your trip has been successfully created!
          <StyledLink href="/">Ok</StyledLink>
        </Modal>
      )}
    </>
  );
}
