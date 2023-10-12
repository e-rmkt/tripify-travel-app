import { City, Country } from "country-state-city";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "./TripForm.styled";
import {
  StyledModalText,
  StyledOkLink,
  StyledModalOkButton,
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

export default function TripForm({
  handleAddTrip,
  endDateDisabled,
  handleDisabled,
}) {
  const countries = Country.getAllCountries();
  const [isoCode, setIsoCode] = useState(countries.isoCode);
  const cities = City.getCitiesOfCountry(isoCode);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [modalType, setModalType] = useState(null);

  function handleIsoCode(event) {
    setIsoCode(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const isoCode = event.target.country.value;
    const { name } = Country.getCountryByCode(isoCode);
    const coordinates = event.target.city.value.split("_");
    const [lat, long, cityname] = coordinates;
    const latitude = Number(lat).toFixed(4);
    const longitude = Number(long).toFixed(4);

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

    handleAddTrip({
      ...data,
      country: {
        name,
        isoCode,
      },
      city: {
        cityname,
        longitude,
        latitude,
      },
    });
  }

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel>
          Country
          <StyledSelect
            name="country"
            onChange={handleIsoCode}
            required
            maxMenuHeight={10}
          >
            <option selected hidden disabled>
              Please select a country
            </option>
            {countries.map(({ isoCode, flag, name }) => (
              <option key={isoCode} value={isoCode}>
                {name} {flag}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel>
          City
          <StyledSelect name="city" required>
            <option selected hidden disabled>
              Please select a city
            </option>

            {cities
              .filter(({ countryCode }) => countryCode === isoCode)
              .map(({ latitude, longitude, name, stateCode }) => (
                <option
                  key={`${latitude}-${longitude}-${name}`}
                  value={`${latitude}_${longitude}_${name}`}
                >
                  {name} - {stateCode}
                </option>
              ))}
          </StyledSelect>
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
            onChange={(event) => {setStartDate(event.target.value); handleDisabled}}
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
        <CreateButton
          modalType={modalType}
          handleClose={handleClose}
          modalContent={getModalContent}
        >
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
