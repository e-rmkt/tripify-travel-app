import CreateTrip from "@/components/CreateTrip";
import TripList from "@/components/TripList";

export default function HomePage() {
  return (
    <main>
      <h1>My Trips</h1>
      <TripList />
      <CreateTrip />
    </main>
  );
}
