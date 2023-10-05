import DeleteIcon from "@/components/DeleteButton/DeleteIcon.svg";
import { StyledDeleteButton } from "./DeleteButton.styled";
import Modal from "../Modals";
import { useState } from "react";

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
          <button type="button" onClick={onHandleDelete}>
            Yes
          </button>
          <button type="button" onClick={() => setShowModal(false)}>
            No
          </button>
        </Modal>
      )}
    </>
  );
}
