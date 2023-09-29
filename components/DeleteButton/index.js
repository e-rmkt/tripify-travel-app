import DeleteIcon from "@/components/DeleteButton/DeleteIcon.svg";
import { StyledDeleteButton } from "./DeleteButton.styled";

export default function DeleteButton({ onHandleDelete }) {
  return (
    <StyledDeleteButton type="button" onClick={onHandleDelete}>
      <DeleteIcon />
      Delete
    </StyledDeleteButton>
  );
}
