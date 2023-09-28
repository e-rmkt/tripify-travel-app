import { useRouter } from "next/router";
import useSWR from "swr";
<<<<<<< HEAD
import TripDetails from "@/components/TripDetails";
=======
import Counter from "@/components/Counter";
>>>>>>> 86292f1 (feat: add Counter to DetailsPage)

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: trips, isLoading } = useSWR(
    id ? `/api/trips/${id}` : null,
    fetcher
  );

  if (!trips || isLoading) {
    return <h2>is Loading...</h2>;
  }

  async function handleDelete() {
    await fetch(`/api/trips/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  const { title, location, timePeriod, img } = trips;
  const startDate = timePeriod.map((timePeriod) => `${timePeriod.startDate}`);
  const endDate = timePeriod.map((timePeriod) => `${timePeriod.endDate}`);

  return (
<<<<<<< HEAD
    <TripDetails
      title={title}
      location={location}
      handleDelete={handleDelete}
      img={img}
      timePeriod={timePeriod}
      id={id}
    />
=======
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
      <Counter startDate={startDate} endDate={endDate} />
      <br />
      <EditButton id={id} />
      <DeleteButton onHandleDelete={handleDelete} />
    </main>
>>>>>>> 86292f1 (feat: add Counter to DetailsPage)
  );
}
