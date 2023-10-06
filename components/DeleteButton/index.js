import DeleteIcon from "@/components/DeleteButton/DeleteIcon.svg";
import { StyledDeleteButton } from "./DeleteButton.styled";
import Modal from "../Modals";
import { useState } from "react";
import {
  StyledModalYesButton,
  StyledModalNoButton,
} from "../Modals/Modals.styled";

export default function DeleteButton({ onHandleDelete }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StyledDeleteButton type="button" onClick={() => setShowModal(true)}>
        <DeleteIcon />
        Delete
      </StyledDeleteButton>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          Are you sure you want to delete this trip?
          <StyledModalYesButton type="button" onClick={onHandleDelete}>
            Yes
          </StyledModalYesButton>
          <StyledModalNoButton
            type="button"
            onClick={() => setShowModal(false)}
          >
            No
          </StyledModalNoButton>
        </Modal>
      )}
    </>
  );
}
