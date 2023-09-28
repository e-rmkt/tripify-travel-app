import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./TripForm.styled";

import CancelButton from "@/components/CancelButton";
import CancelIcon from "@/components/CancelButton/CancelIcon.svg";
import CreateButton from "@/components/CreateButton";
import CreateIcon from "@/components/CreateButton/CreateIcon.svg";

export default function TripForm({ handleAddTrip }) {
  return (
    <>
      <StyledForm onSubmit={handleAddTrip}>
        <StyledLabel>
          Country
          <StyledInput
            name="country"
            placeholder="Country of your trip"
            minLength={3}
            required
            autoFocus
          />
        </StyledLabel>
        <StyledLabel>
          City
          <StyledInput name="city" placeholder="City of your trip" />
        </StyledLabel>
        <StyledLabel>
          Title
          <StyledInput
            name="title"
            placeholder="Title of your trip"
            minLength={3}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Start date
          <StyledInput name="startDate" type="date" required />
        </StyledLabel>
        <StyledLabel>
          End date
          <StyledInput name="endDate" type="date" />
        </StyledLabel>
        <CreateButton>
          <CreateIcon /> Create
        </CreateButton>
      </StyledForm>
      <StyledContainer>
        <CancelButton>
          <CancelIcon /> Cancel
        </CancelButton>
      </StyledContainer>
    </>
  );
}
