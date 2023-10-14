import TripForm from "@/components/TripForm";

import useSWR from "swr";
import { useState } from "react";

export default function TripFormPage() {
  const { mutate } = useSWR("/api/trips");
  const [endDateDisabled, setEndDateDisabled] = useState(true);

  function handleDisabled(event) {
    setEndDateDisabled(!event.target.value);
  }

  async function handleAddTrip(tripData) {
    const repTripDataCountry = tripData.country.name.replace(" ", "");
    const repTripDataCity = tripData.city.cityname.replace(" ", "-");

    const newTrip = {
      title: tripData.title,
      location: [
        {
          country: tripData.country.name,
          city: tripData.city.cityname,
          latitude_city: tripData.city.latitude,
          longitude_city: tripData.city.longitude,
        },
      ],
      timePeriod: [
        { startDate: tripData.startDate, endDate: tripData.endDate },
      ],
      img: `${repTripDataCity}`
        ? `https://source.unsplash.com/random/?${repTripDataCountry}-${repTripDataCity}`
        : `https://source.unsplash.com/random/?${repTripDataCountry}`,
    };

    if (tripData.endDate < tripData.startDate) {
      alert("The end date needs to be bigger than the start date!");
      return;
    }
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
  }

  return (
    <main>
      <h1>New Trip</h1>
      <TripForm
        handleAddTrip={handleAddTrip}
        handleDisabled={handleDisabled}
        endDateDisabled={endDateDisabled}
      />
    </main>
  );
}
