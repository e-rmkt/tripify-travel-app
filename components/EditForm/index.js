import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../TripForm/TripForm.styled";

import CancelButton from "@/components/CancelButton";
import CancelIcon from "@/components/CancelButton/CancelIcon.svg";
import CreateButton from "@/components/CreateButton";
import CreateIcon from "@/components/CreateButton/CreateIcon.svg";

export default function EditForm({
  country,
  city,
  title,
  startDate,
  endDate,
  handleEditTrip,
  toggleDisabled,
  endDateDisabled,
}) {
  return (
    <>
      <h1>Edit Trip</h1>
      <StyledForm onSubmit={handleEditTrip}>
        <StyledLabel>
          Country
          <StyledInput
            name="country"
            defaultValue={country}
            minLength={3}
            required
          />
        </StyledLabel>
        <StyledLabel>
          City
          <StyledInput name="city" defaultValue={city} />
        </StyledLabel>
        <StyledLabel>
          Title
          <StyledInput
            name="title"
            defaultValue={title}
            minLength={3}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Start date
          <StyledInput
            name="startDate"
            type="date"
            defaultValue={startDate}
            required
            onChange={toggleDisabled}
          />
        </StyledLabel>
        <StyledLabel>
          End date
          <StyledInput
            name="endDate"
            type="date"
            defaultValue={endDate}
            disabled={endDateDisabled}
          />
        </StyledLabel>
        <CreateButton>
          <CreateIcon /> Save
        </CreateButton>
      </StyledForm>
      <StyledContainer>
        <CancelButton>
          <CancelIcon />
          Cancel
        </CancelButton>
      </StyledContainer>
    </>
  );
}
