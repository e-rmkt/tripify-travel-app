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
import { Country, City } from "country-state-city";
import { useState } from "react";

export default function TripForm({
  handleAddTrip,
  endDateDisabled,
  handleDisabled,
}) {
  const countries = Country.getAllCountries();
  const [isoCode, setIsoCode] = useState(countries[0].isoCode);
  const cities = City.getCitiesOfCountry(isoCode);

  function handleIsoCode(event) {
    setIsoCode(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const isoCode = event.target.country.value;
    const { name } = Country.getCountryByCode(isoCode);
    handleAddTrip({
      ...data,
      country: {
        name,
        isoCode,
      },
    });
  }

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel>
          Country
          <select name="country" onChange={handleIsoCode} required>
            {countries.map(({ isoCode, flag, name }) => (
              <option key={isoCode} value={isoCode}>
                {name} {flag}
              </option>
            ))}
          </select>
        </StyledLabel>
        <StyledLabel>
          City
          <select name="city" required>
            {cities
              .filter(({ countryCode }) => countryCode === isoCode)
              .map(({ latitude, longitude, name, stateCode }) => (
                <option key={`${latitude}-${longitude}-${name}`}>
                  {name} - {stateCode}
                </option>
              ))}
          </select>
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
          <StyledInput name="startDate" type="date" onChange={handleDisabled} />
        </StyledLabel>
        <StyledLabel>
          End date
          <StyledInput
            name="endDate"
            type="date"
            required
            disabled={endDateDisabled}
          />
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
