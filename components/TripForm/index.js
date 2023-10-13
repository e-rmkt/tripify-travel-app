import {
  Span,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./TripForm.styled";
import {
  StyledModalOkButton,
  StyledModalText,
  StyledOkLink,
} from "../Modals/Modals.styled";

import CancelButton from "@/components/CancelButton";
import CancelIcon from "@/components/CancelButton/CancelIcon.svg";
import CreateButton from "@/components/CreateButton";
import CreateIcon from "@/components/CreateButton/CreateIcon.svg";
import { useState } from "react";

const MODAL_TYPES = {
  SUCCESS: "SUCCESS",
  DATE_ERROR: "DATE_ERROR",
};

export default function TripForm({ handleAddTrip }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [modalType, setModalType] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);
    if (endDate < startDate) {
      setModalType(MODAL_TYPES.DATE_ERROR);
      return;
    }
    setModalType(MODAL_TYPES.SUCCESS);
    handleAddTrip(tripData);
  }
  function handleClose() {
    setEndDate("");
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
            Your trip has been successfully created.
          </StyledModalText>
          <StyledOkLink href="/">Ok</StyledOkLink>
        </>
      );
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
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
          <StyledInput
            name="startDate"
            type="date"
            required
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </StyledLabel>
        <StyledLabel>
          End date
          <StyledInput
            name="endDate"
            type="date"
            required
            value={endDate}
            disabled={!startDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </StyledLabel>
        <Span>All fields are required</Span>
        <CreateButton
          modalType={modalType}
          handleClose={handleClose}
          modalContent={getModalContent}
        >
          <CreateIcon aria-label="Icon in form of a checkmark" /> Create
        </CreateButton>
      </StyledForm>
      <StyledContainer>
        <CancelButton>
          <CancelIcon aria-label="Icon in form of a cross" /> Cancel
        </CancelButton>
      </StyledContainer>
    </>
  );
}
