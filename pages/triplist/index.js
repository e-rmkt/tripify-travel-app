import CreateTrip from "@/components/CreateTrip";
import TripList from "@/components/TripList";
import { Wrapper } from "@/components/Layout/Layout.styled";
import MapIcon from "@/components/Layout/MapIcon.svg";
import Link from "next/link";
export default function HomePage() {
  return (
    <main>
      <Wrapper>
        <h1>Tripify</h1>
        <Link href="/worldMap">
          <MapIcon />
        </Link>
      </Wrapper>
      <TripList />
      <CreateTrip />
    </main>
  );
}
