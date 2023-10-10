import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../TripForm/TripForm.styled";

import {
  StyledModalText,
  StyledModalOkButton,
  StyledOkLink,
} from "../Modals/Modals.styled";

import CancelButton from "@/components/CancelButton";
import CancelIcon from "@/components/CancelButton/CancelIcon.svg";
import SaveButton from "@/components/SaveButton";
import CreateIcon from "@/components/CreateButton/CreateIcon.svg";
import { useState } from "react";

const MODAL_TYPES = {
  SUCCESS: "SUCCESS",
  DATE_ERROR: "DATE_ERROR",
};

export default function EditForm({
  country,
  city,
  title,
  startDate,
  endDate,
  handleEditTrip,
}) {
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [modalType, setModalType] = useState(null);

  function handleEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);
    const newEndDate = event.target.endDate.value;
    const newStartDate = event.target.startDate.value;

    if (newEndDate < newStartDate) {
      setModalType(MODAL_TYPES.DATE_ERROR);

      return;
    }
    setModalType(MODAL_TYPES.SUCCESS);
    handleEditTrip(tripData);
  }
  function handleClose() {
    setEndDateValue("");
    setModalType(null);
  }
  function getModalContent() {
    if (modalType === MODAL_TYPES.DATE_ERROR) {
      return (
        <>
          <StyledModalText>
            The end date should not come before the start date.
          </StyledModalText>

          <StyledModalOkButton onClick={handleClose}>Ok</StyledModalOkButton>
        </>
      );
    }
    if (modalType === MODAL_TYPES.SUCCESS) {
      return (
        <>
          <StyledModalText>
            Your trip has been successfully edited.
          </StyledModalText>
          <StyledOkLink href="/">Ok</StyledOkLink>
        </>
      );
    }
  }

  return (
    <>
      <h1>Edit Trip</h1>
      <StyledForm onSubmit={handleEditSubmit}>
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
            onChange={(event) => setStartDateValue(event.target.value)}
          />
        </StyledLabel>
        <StyledLabel>
          End date
          <StyledInput
            name="endDate"
            type="date"
            defaultValue={endDate}
            disabled={!startDate}
            onChange={(event) => setEndDateValue(event.target.value)}
          />
        </StyledLabel>
        <SaveButton
          modalType={modalType}
          handleClose={handleClose}
          modalContent={getModalContent}
        >
          <CreateIcon /> Save
        </SaveButton>
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
