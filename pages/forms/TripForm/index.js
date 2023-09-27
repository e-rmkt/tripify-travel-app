import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./TripForm.styled";

import CancelButton from "@/components/CancelButton";
import CreateButton from "@/components/CreateButton";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function TripForm() {
  const { mutate } = useSWR("/api/trips");
  const router = useRouter();

  async function handleAddTrip(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);

    const repTripDataCountry = tripData.country.replace(" ", "");
    const repTripDataCity = tripData.city.replace(" ", "-");

    const newTrip = {
      title: tripData.title,
      location: [{ country: tripData.country, city: tripData.city }],
      timePeriod: [
        { startDate: tripData.startDate, endDate: tripData.endDate },
      ],
      img: `${repTripDataCity}`
        ? `https://source.unsplash.com/random/?${repTripDataCountry}-${repTripDataCity}`
        : `https://source.unsplash.com/random/?${repTripDataCountry}`,
    };

    const response = await fetch("/api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrip),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    router.push("/");
  }

  return (
    <main>
      <h1>New Trip</h1>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
          >
            <path
              d="M4.98311 9.9835C4.70454 9.9835 4.43989 9.87207 4.24489 9.67706L0.302952 5.7352C-0.100984 5.33126 -0.100984 4.66268 0.302952 4.25874C0.706889 3.85481 1.37547 3.85481 1.77941 4.25874L4.98311 7.46238L12.1425 0.302952C12.5465 -0.100984 13.2151 -0.100984 13.619 0.302952C14.0229 0.706889 14.0229 1.37547 13.619 1.77941L5.72134 9.67706C5.52634 9.87207 5.26169 9.9835 4.98311 9.9835Z"
              fill="#1AB900"
            />
          </svg>{" "}
          Create
        </CreateButton>
      </StyledForm>
      <StyledContainer>
        <CancelButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
          >
            <path
              d="M1 10L10.5715 1"
              stroke="#FF003D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5715 10L1 1"
              stroke="#FF003D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          Cancel
        </CancelButton>
      </StyledContainer>
    </main>
  );
}
