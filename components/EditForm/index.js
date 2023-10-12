import { City, Country } from "country-state-city";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
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

  const countries = Country.getAllCountries();
  const defaultIsoCode = countries.filter(({ name }) => name === country)[0]
    .isoCode;
  const defaultFlag = countries.filter(({ name }) => name === country)[0].flag;
  const [isoCode, setIsoCode] = useState(defaultIsoCode);
  const cities = City.getCitiesOfCountry(isoCode);
  const [selectedCity, setSelectedCity] = useState(city);
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [modalType, setModalType] = useState(null);

  function handleIsoCode(event) {
    setIsoCode(event.target.value);
    setDefaultCity();
  }

  function handleCity(event) {
    setSelectedCity(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const isoCode = event.target.country.value;
    const { name } = Country.getCountryByCode(isoCode);
    const newEndDate = event.target.endDate.value;
    const newStartDate = event.target.startDate.value;
    const chosenCity = cities.find((city) => city.name === selectedCity);

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

    handleEditTrip({
      ...data,
      country: {
        name,
        isoCode,
      },
      city: {
        cityname: chosenCity.name,
        longitude: Number(chosenCity.longitude).toFixed(4),
        latitude: Number(chosenCity.latitude).toFixed(4),
      },
    });
  }
  return (
    <>
      <h1>Edit Trip</h1>
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel>
          Country
          <StyledSelect name="country" onChange={handleIsoCode} required>
            <option selected value={defaultIsoCode}>
              {country} {defaultFlag}
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
          <StyledSelect name="city" onChange={handleCity} required>
            <option selected value={selectedCity}>
              {selectedCity}
            </option>
            {cities
              .filter(({ countryCode }) => countryCode === isoCode)
              .map(({ latitude, longitude, name, stateCode }) => (
                <option key={`${latitude}-${longitude}-${name}`} value={name}>
                  {name} - {stateCode}
                </option>
              ))}
          </StyledSelect>
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
