import CreateButton from "@/components/CreateButton";

import CancelButton from "@/components/CancelButton";

export default function TripForm() {
  return (
    <form>
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
        <input name="Start date" type="date" required />
      </label>
      <label>
        End date
        <input name="End date" type="date" />
      </label>
      <CreateButton />
      <CancelButton />
    </form>
  );
}
