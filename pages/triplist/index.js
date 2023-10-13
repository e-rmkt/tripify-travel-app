import CreateTrip from "@/components/CreateTrip";
import TripList from "@/components/TripList";

export default function HomePage() {
  return (
    <main>
      <h1>Tripify</h1>
      <TripList />
      <CreateTrip />
    </main>
  );
}
