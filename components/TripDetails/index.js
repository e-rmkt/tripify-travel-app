import {
  DetailsCard,
  Header,
  ImageContainer,
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
import { useRouter } from "next/router";
import { BackButton } from "../Layout/Layout.styled";
import WeatherList from "../WeatherList";

export default function TripDetails({
  title,
  location,
  timePeriod,
  img,
  id,
  startDate,
  endDate,
  latitude,
  longitude,
  handleDelete,
}) {
  const router = useRouter();
  return (
    <>
      <Header>
        <h1>Your Trip</h1>
        <BackButton onClick={() => router.back()}>← back</BackButton>
      </Header>
      <ImageContainer>
        <StyledImage src={img} fill={true} alt="Dummy Pic" />
      </ImageContainer>
      <DetailsCard>
        <Location location={location} />
        <StyledText>{title}</StyledText>
        <TimePeriod timePeriod={timePeriod} />
        <Counter startDate={startDate} endDate={endDate} />
        <WeatherList latitude={latitude} longitude={longitude} />
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
