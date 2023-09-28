import EditForm from "@/components/EditForm";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditFormPage() {
  const { mutate } = useSWR("/api/trips");
  const router = useRouter();

  const [endDateDisabled, setEndDateDisabled] = useState(false);
  const [endDateValue, setEndDateValue] = useState();

  const { id } = router.query;
  const { data: trips, isLoading } = useSWR(
    id ? `/api/trips/${id}` : null,
    fetcher
  );

  if (!trips || isLoading) {
    return <h2>is Loading...</h2>;
  }

  const { title, location, timePeriod, img } = trips;
  const country = location.map((location) => `${location.country}`);
  const city = location.map((location) => `${location.city}`);
  const startDate = timePeriod.map((timePeriod) => `${timePeriod.startDate}`);
  const endDate = timePeriod.map((timePeriod) => `${timePeriod.endDate}`);

  function handleDisabled(event) {
    setEndDateDisabled(!event.target.value);
  }

  function handleEndDateValue(event) {
    const endDateValue = event.target.value;
    const startDateValue = startDate;
    // document.getElementsByName("startDate");
    if (endDateValue < startDateValue) {
      alert("The end date has to be bigger or equal to the start date") &&
        setEndDateValue(endDate);
    }
  }

  async function handleEditTrip(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);

    const repTripDataCountry = tripData.country.replace(" ", "");
    const repTripDataCity = tripData.city.replace(" ", "-");

    const editedTrip = {
      title: tripData.title,
      location: [{ country: tripData.country, city: tripData.city }],
      timePeriod: [
        { startDate: tripData.startDate, endDate: tripData.endDate },
      ],
      img: `${repTripDataCity}`
        ? `https://source.unsplash.com/random/?${repTripDataCountry}-${repTripDataCity}`
        : `https://source.unsplash.com/random/?${repTripDataCountry}`,
    };
    try {
      const response = await fetch(`/api/trips/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedTrip),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      mutate();
      router.push(`/trip/${id}`);
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  }

  return (
    <EditForm
      country={country}
      city={city}
      title={title}
      startDate={startDate}
      endDate={endDate}
      handleEditTrip={handleEditTrip}
    />
  );
}
