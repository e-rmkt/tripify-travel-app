import TripList from "@/components/TripList";
import CreateTrip from "@/components/CreateTrip";

export default function HomePage() {
  return (
    <main>
      <h1>My Trips</h1>
      <TripList />
      <CreateTrip />
    </main>
  );
}
