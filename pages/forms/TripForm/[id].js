import EditForm from "@/components/EditForm";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditFormPage() {
  const { mutate } = useSWR("/api/trips");
  const router = useRouter();

  const { id } = router.query;
  const { data: trip, isLoading } = useSWR(
    id ? `/api/trips/${id}` : null,
    fetcher
  );

  if (!trip || isLoading) {
    return <h2>is Loading...</h2>;
  }

  const { title, location, timePeriod } = trip;
  const { country, city } = location[0];
  const { startDate, endDate } = timePeriod[0];

  function toggleDisabled(event) {
    setEndDateDisabled(!event.target.value);
  }

  async function handleEditTrip(tripData) {
    const repTripDataCountry = tripData.country.name.replace(" ", "");
    const repTripDataCity = tripData.city.cityname.replace(" ", "-");


    const editedTrip = {
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

    {
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
      } catch (error) {
        console.error("Error updating trip:", error);
      }
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
