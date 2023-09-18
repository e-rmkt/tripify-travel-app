import useSWR from "swr";
import Trip from "../Trip";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`, fetcher);
  console.log(trips);
  if (!trips || isLoading) {
    return <>is Loading...</>;
  }

  const { _id } = trips;

  return (
    <ul>
      {trips.map((trip) => (
        <Trip key={_id} {...trip} />
      ))}
    </ul>
  );
}
