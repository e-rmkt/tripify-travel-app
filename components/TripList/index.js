import Trip from "../Trip";
import useSWR from "swr";
import { StyledUnorderedList } from "./TripList.styled";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`, fetcher);
  if (!trips || isLoading) {
    return <h2>is Loading...</h2>;
  }

  return (
    <StyledUnorderedList>
      {trips.map((trip) => (
        <Trip key={trip._id} {...trip} />
      ))}
    </StyledUnorderedList>
  );
}
