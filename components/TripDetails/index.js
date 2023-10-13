import {
  DetailsCard,
  Header,
  StyledImage,
  StyledText,
  Wrapper,
} from "./TripDetails.styled";
import { useRouter } from "next/router";
import Location from "../Location";
import TimePeriod from "../TimePeriod";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";
import Counter from "../Counter";
import { BackButton } from "../Layout/Layout.styled";

export default function TripDetails({
  title,
  location,
  timePeriod,
  img,
  id,
  startDate,
  endDate,
  handleDelete,
}) {
  const router = useRouter();
  return (
    <>
      <Header>
        <h1>Your Trip</h1>
        <BackButton onClick={() => router.back()}>← back</BackButton>
      </Header>
      <StyledImage src={img} width={335} height={300} alt="Dummy Pic" />
      <DetailsCard>
        <Location location={location} />
        <StyledText>{title}</StyledText>
        <TimePeriod timePeriod={timePeriod} />
        <Counter startDate={startDate} endDate={endDate} />
      </DetailsCard>
      <Wrapper>
        <EditButton id={id} />
        <DeleteButton
          onHandleDelete={handleDelete}
          onClick={() => setShowModal(true)}
        />
      </Wrapper>
    </>
  );
}
