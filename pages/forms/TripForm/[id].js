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
  const { data: trip, isLoading } = useSWR(
    id ? `/api/trips/${id}` : null,
    fetcher
  );

  if (!trip || isLoading) {
    return <h2>is Loading...</h2>;
  }

  const { title, location, timePeriod, img } = trip;
  const { country, city } = location[0];
  const { startDate, endDate } = timePeriod[0];

  function toggleDisabled(event) {
    setEndDateDisabled(!event.target.value);
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

      if (tripData.endDate < tripData.startDate) {
        alert("The end date needs to be bigger than the start date!");
        setEndDateValue("");
      } else {
        router.push(`/trip/${id}`);
      }
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
