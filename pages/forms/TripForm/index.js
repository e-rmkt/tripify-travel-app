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

    const newTrip = {
      title: tripData.title,
      location: [{ country: tripData.country, city: tripData.city }],
      timePeriod: [
        { startDate: tripData.startDate, endDate: tripData.endDate },
      ],
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
    <form onSubmit={handleAddTrip}>
      <label>
        Country
        <input
          name="country"
          placeholder="Country of your trip"
          minLength={3}
          required
          autoFocus
        />
      </label>
      <label>
        City
        <input name="city" placeholder="City of your trip" />
      </label>
      <label>
        Title
        <input
          name="title"
          placeholder="Title of your trip"
          minLength={3}
          required
        />
      </label>
      <label>
        Start date
        <input name="startDate" type="date" required />
      </label>
      <label>
        End date
        <input name="endDate" type="date" />
      </label>
      <CreateButton>Create</CreateButton>
      <CancelButton />
    </form>
  );
}
