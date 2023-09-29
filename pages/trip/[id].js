import {
  DetailsCard,
  Header,
  StyledImage,
  StyledText,
  Wrapper,
} from "../../components/page-styles/TripDetails.styled";

import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
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
    return <h2>is Loading...</h2>;
  }

  async function handleDelete() {
    await fetch(`/api/trips/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  const { title, location, timePeriod, img } = trips;

  return (
    <main>
      <Header>
        <h1>Your Trip</h1>
        <Link href="/"> ← back </Link>
      </Header>
      <StyledImage src={img} width={335} height={300} alt="Dummy Pic" />
      <DetailsCard>
        <Location location={location} />
        <StyledText>{title}</StyledText>
        <TimePeriod timePeriod={timePeriod} />
      </DetailsCard>
      <Wrapper>
        <EditButton id={id} />

        <DeleteButton onHandleDelete={handleDelete} />
      </Wrapper>
    </main>
  );
}
