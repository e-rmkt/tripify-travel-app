import Trip from "../Trip";
import useSWR from "swr";
import { StyledUnorderedList, WhiteSpace } from "./TripList.styled";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TripList() {
  const { data, isLoading } = useSWR(`/api/trips`, fetcher);

  if (!data || isLoading) {
    return (
      <Skeleton
        count={6}
        height="126px"
        borderRadius="10px"
        style={{
          border: "1px solid rgba(68, 140, 255, 0.15)",
          marginBottom: "20px",
          zIndex: -10,
          marginTop: "10px",
        }}
      />
    );
  }

  data.sort((a, b) => {
    const dateA = new Date(a.timePeriod[0].startDate);
    const dateB = new Date(b.timePeriod[0].startDate);
    const result = dateA - dateB;
    return result;
  });

  const currentDate = new Date();

  const pastTrips = data
    .filter((trip) => {
      const endDate = new Date(trip.timePeriod[0].endDate);
      return endDate < currentDate;
    })
    .sort((a, b) => {});

  const futureTrips = data.filter((trip) => {
    const startDate = new Date(trip.timePeriod[0].startDate);
    return startDate > currentDate;
  });

  const ongoingTrips = data.filter((trip) => {
    const startDate = new Date(trip.timePeriod[0].startDate);
    const endDate = new Date(trip.timePeriod[0].endDate);
    return endDate > currentDate && startDate < currentDate;
  });

  return (
    <>
      <h2>Ongoing Trips</h2>
      <StyledUnorderedList>
        {ongoingTrips.map((trip) => (
          <Trip key={trip._id} {...trip} />
        ))}
      </StyledUnorderedList>
      <h2>Future Trips</h2>
      <StyledUnorderedList>
        {futureTrips.map((trip) => (
          <Trip key={trip._id} {...trip} />
        ))}
      </StyledUnorderedList>
      <h2>Past Trips</h2>
      <StyledUnorderedList>
        {pastTrips.map((trip) => (
          <Trip key={trip._id} {...trip} />
        ))}
      </StyledUnorderedList>
      <WhiteSpace></WhiteSpace>
    </>
  );
}
