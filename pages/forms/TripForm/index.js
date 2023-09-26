import { StyledForm, StyledInput, StyledLabel } from "./TripForm.styled";

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
        <CreateButton>Create</CreateButton>
      </StyledForm>
      <CancelButton />
    </main>
  );
}
