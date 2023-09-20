import { StyledDeleteButton } from "./DeleteButton.styled";

export default function DeleteButton({ onHandleDelete }) {
  return (
    <StyledDeleteButton type="button" onClick={onHandleDelete}>
      Delete
    </StyledDeleteButton>
  );
}
