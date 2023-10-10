import { City, Country } from "country-state-city";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "../TripForm/TripForm.styled";

import CancelButton from "@/components/CancelButton";
import CancelIcon from "@/components/CancelButton/CancelIcon.svg";
import CreateButton from "@/components/CreateButton";
import CreateIcon from "@/components/CreateButton/CreateIcon.svg";
import { useState } from "react";

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
  const countries = Country.getAllCountries();
  const defaultIsoCode = countries.filter(({ name }) => name === country)[0]
    .isoCode;
  const defaultFlag = countries.filter(({ name }) => name === country)[0].flag;
  const [isoCode, setIsoCode] = useState(defaultIsoCode);
  const cities = City.getCitiesOfCountry(isoCode);
  const [defaultCity, setDefaultCity] = useState(city);

  function handleIsoCode(event) {
    setIsoCode(event.target.value);
    setDefaultCity();
  }

  function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const isoCode = event.target.country.value;
    const { name } = Country.getCountryByCode(isoCode);
    const coordinates = event.target.city.value.split("-");
    const [lat, long, cityname] = coordinates;
    const latitude = Number(lat).toFixed(4);
    const longitude = Number(long).toFixed(4);

    handleEditTrip({
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
          <StyledSelect name="city" required>
            <option selected>{defaultCity}</option>
            {cities
              .filter(({ countryCode }) => countryCode === isoCode)
              .map(({ latitude, longitude, name, stateCode }) => (
                <option
                  key={`${latitude}-${longitude}-${name}`}
                  value={`${latitude}-${longitude}-${name}`}
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
