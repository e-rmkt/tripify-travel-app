import useSWR from "swr";
import Trip from "../Trip";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`, fetcher);
  if (!trips || isLoading) {
    return <>is Loading...</>;
  }

  return (
    <ul>
      {trips.map((trip) => (
        <Trip key={trip._id} {...trip} />
      ))}
    </ul>
  );
}
