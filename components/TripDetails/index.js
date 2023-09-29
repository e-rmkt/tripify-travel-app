import {
  DetailsCard,
  Header,
  StyledImage,
  StyledText,
  Wrapper,
} from "./TripDetails.styled";

import Link from "next/link";
import Location from "../Location";
import TimePeriod from "../TimePeriod";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

export default function TripDetails({
  title,
  location,
  timePeriod,
  img,
  handleDelete,
  id,
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
      </DetailsCard>
      <Wrapper>
        <EditButton id={id} />

        <DeleteButton onHandleDelete={handleDelete} />
      </Wrapper>
    </>
  );
}
