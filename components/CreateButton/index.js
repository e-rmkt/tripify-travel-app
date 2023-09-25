import { StyledCreateButton } from "./CreateButton.styled";

export default function CreateButton({ children }) {
  return <StyledCreateButton type="submit">{children}</StyledCreateButton>;
}
