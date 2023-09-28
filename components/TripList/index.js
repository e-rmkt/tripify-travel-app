import Trip from "../Trip";
import useSWR from "swr";
import { StyledUnorderedList } from "./TripList.styled";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`, fetcher);

  if (!trips || isLoading) {
    return (
      <Skeleton
        count={6}
        height="126px"
        borderRadius="10px"
        style={{
          border: "1px solid rgba(68, 140, 255, 0.15)",
          marginBottom: "20px",
          zIndex: -10,
        }}
      />
    );
  }

  return (
    <StyledUnorderedList>
      {trips.map((trip) => (
        <Trip key={trip._id} {...trip} />
      ))}
    </StyledUnorderedList>
  );
}
