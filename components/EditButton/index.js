import EditIcon from "@/components/EditButton/EditIcon.svg";
import { StyledEditButton } from "./EditButton.styled";

export default function EditButton({ id }) {
  return (
    <StyledEditButton href={`/forms/TripForm/${id}`}>
      <EditIcon aria-label="Icon in form of a pencil" />
      Edit
    </StyledEditButton>
  );
}
