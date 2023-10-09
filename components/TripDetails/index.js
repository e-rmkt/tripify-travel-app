import {
  DetailsCard,
  Header,
  StyledImage,
  StyledText,
  Wrapper,
} from "./TripDetails.styled";

import Counter from "../Counter";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import Link from "next/link";
import Location from "../Location";
import TimePeriod from "../TimePeriod";
import WeatherList from "../WeatherList";

export default function TripDetails({
  title,
  location,
  timePeriod,
  img,
  handleDelete,
  id,
  startDate,
  endDate,
  latitude,
  longitude,
}) {
  return (
    <>
      <Header>
        <h1>Your Trip</h1>
        <Link href="/"> ← back </Link>
      </Header>
      <StyledImage src={img} width={335} height={300} alt="Dummy Pic" />
      <DetailsCard>
        <Location location={location} />
        <StyledText>{title}</StyledText>
        <TimePeriod timePeriod={timePeriod} />
        <Counter startDate={startDate} endDate={endDate} />
        <WeatherList latitude={latitude} longitude={longitude} />
      </DetailsCard>
      <Wrapper>
        <EditButton id={id} />
        <DeleteButton onHandleDelete={handleDelete} />
      </Wrapper>
    </>
  );
}
