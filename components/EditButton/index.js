import { StyledEditButton } from "./EditButton.styled";

export default function EditButton({ id }) {
  return (
    <StyledEditButton href={`/forms/TripForm/${id}`}>Edit</StyledEditButton>
  );
}
