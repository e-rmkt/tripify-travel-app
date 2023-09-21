import CancelButton from "@/components/CancelButton";
import CreateButton from "@/components/CreateButton";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripDetailsForm() {
  const { mutate } = useSWR("/api/trips");
  const router = useRouter();
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

  async function handleEditTrip(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);

    const editedTrip = {
      title: tripData.title,
      location: [{ country: tripData.country, city: tripData.city }],
      timePeriod: [
        { startDate: tripData.startDate, endDate: tripData.endDate },
      ],
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
    <form onSubmit={handleEditTrip}>
      <label>
        Country
        <input name="country" defaultValue={country} minLength={3} required />
      </label>
      <label>
        City
        <input name="city" defaultValue={city} />
      </label>
      <label>
        Title
        <input name="title" defaultValue={title} minLength={3} required />
      </label>
      <label>
        Start date
        <input name="startDate" type="date" defaultValue={startDate} required />
      </label>
      <label>
        End date
        <input name="endDate" type="date" defaultValue={endDate} />
      </label>
      <CreateButton>Save</CreateButton>
      <CancelButton />
    </form>
  );
}
