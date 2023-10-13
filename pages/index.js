import CreateTrip from "@/components/CreateTrip";
import TripList from "@/components/TripList";
import { Wrapper, StyledLink } from "@/components/Layout/Layout.styled";
import MapIcon from "@/components/Layout/MapIcon.svg";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* <h1>My Trips</h1> */}
      <Wrapper>
        <h1>My Trips</h1>
        <Link href="/worldMap">
          <MapIcon />
        </Link>
      </Wrapper>
      <TripList />
      <CreateTrip />
    </main>
  );
}
