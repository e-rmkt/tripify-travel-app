import { StyledSaveButton } from "./SaveButton.styled";
import Modal from "../Modals";

export default function SaveButton({
  children,
  modalType,
  modalContent,
  handleClose,
}) {
  return (
    <>
      <StyledSaveButton type="submit">{children}</StyledSaveButton>
      {modalType && <Modal handleClose={handleClose}>{modalContent()}</Modal>}
    </>
  );
}
