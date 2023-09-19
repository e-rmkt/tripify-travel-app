import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data: trips, isLoading } = useSWR(
    id ? `/api/trips/${id}` : null,
    fetcher
  );

  console.log(trips);

  if (!trips || isLoading) {
    return <>is Loading...</>;
  }
  const { title, location, timePeriod, img } = trips;

  return (
    <main>
      <h1>Travel App</h1>
      <Link href="/"> ← back </Link>
      <Image src={img} width={150} height={100} alt="Dummy Pic" />
      {location.map((location) => `${location.country}, ${location.city}`)}
      {title}
      {timePeriod.map(
        (timePeriod) => `${timePeriod.startDate} ${timePeriod.endDate}`
      )}
    </main>
  );
}
