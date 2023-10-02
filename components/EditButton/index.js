import EditIcon from "@/components/EditButton/EditIcon.svg";
import { StyledEditButton } from "./EditButton.styled";

export default function EditButton({ id }) {
  return (
    <StyledEditButton href={`/forms/TripForm/${id}`}>
      <EditIcon />
      Edit
    </StyledEditButton>
  );
}
