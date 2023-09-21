import EditButton from "@/components/EditButton";
import Image from "next/image";
import Link from "next/link";
import Location from "@/components/Location";
import TimePeriod from "@/components/TimePeriod";
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

  if (!trips || isLoading) {
    return <>is Loading...</>;
  }
  const { title, location, timePeriod, img } = trips;

  return (
    <main>
      <h1>Travel App</h1>
      <Link href="/"> ← back </Link>
      <br />
      <Image src={img} width={150} height={100} alt="Dummy Pic" />
      <br />
      <Location location={location} />
      <br />
      <TimePeriod timePeriod={timePeriod} />
      <br />
      {title}
      <br />
      <EditButton id={id} />
    </main>
  );
}
