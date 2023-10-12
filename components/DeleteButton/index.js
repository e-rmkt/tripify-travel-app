import DeleteIcon from "@/components/DeleteButton/DeleteIcon.svg";
import { StyledDeleteButton } from "./DeleteButton.styled";
import Modal from "../Modals";
import { useState } from "react";
import {
  StyledModalYesButton,
  StyledModalNoButton,
  StyledWrapper,
} from "../Modals/Modals.styled";

export default function DeleteButton({ onHandleDelete, handleClose }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StyledDeleteButton type="button" onClick={() => setShowModal(true)}>
        <DeleteIcon />
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
