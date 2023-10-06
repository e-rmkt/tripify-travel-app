import { StyledCreateButton } from "./CreateButton.styled";
import Modal from "../Modals";

export default function CreateButton({
  children,
  modalType,
  modalContent,
  handleClose,
}) {
  return (
    <>
      <StyledCreateButton type="submit">{children}</StyledCreateButton>
      {modalType && <Modal handleClose={handleClose}>{modalContent()}</Modal>}
    </>
  );
}
