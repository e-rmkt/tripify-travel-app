import useSWR from "swr";

const fetcher = (...arg) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data: trip, isLoading } = useSWR(`/api/trips`, fetcher);

  if (!trip || isLoading) {
    return <>is Loading...</>;
  }

const {title, location.country, location.city, timePeriod.startDate, timePeriod.endDate, img} = trip;

  return (
    <div>
      <h1>TravelApp</h1>
    </div>
  );
}
