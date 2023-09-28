import Trip from "../Trip";
import useSWR from "swr";
import { LoadingSkeleton, StyledUnorderedList } from "./TripList.styled";
import "react-loading-skeleton/dist/skeleton.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`, fetcher);

  if (!trips || isLoading) {
    return <LoadingSkeleton count={5} />;
  }

  return (
    <StyledUnorderedList>
      {trips.map((trip) => (
        <Trip key={trip._id} {...trip} />
      ))}
    </StyledUnorderedList>
  );
}
