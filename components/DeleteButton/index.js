import {
  StyledModalNoButton,
  StyledModalYesButton,
  StyledWrapper,
} from "../Modals/Modals.styled";

import DeleteIcon from "@/components/DeleteButton/DeleteIcon.svg";
import Modal from "../Modals";
import { StyledDeleteButton } from "./DeleteButton.styled";
import { useState } from "react";

export default function DeleteButton({ onHandleDelete, handleClose }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StyledDeleteButton type="button" onClick={() => setShowModal(true)}>
        <DeleteIcon aria-label="Icon in form of a trash can" />
        Delete
      </StyledDeleteButton>
      {showModal && (
        <Modal handleClose={handleClose}>
          Are you sure you want to delete this trip?
          <StyledWrapper>
            <StyledModalYesButton type="button" onClick={onHandleDelete}>
              Yes
            </StyledModalYesButton>
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
