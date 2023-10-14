import {
  ImageContainer,
  StyledImage,
  StyledLink,
  StyledListItem,
  StyledText,
  Wrapper,
} from "./Trip.styled";

import Counter from "../Counter";
import Location from "../Location";
import TimePeriod from "../TimePeriod";

export default function Trip({ title, img, location, timePeriod, _id }) {
  const startDate = timePeriod.map((timePeriod) => `${timePeriod.startDate}`);
  const endDate = timePeriod.map((timePeriod) => `${timePeriod.endDate}`);

  return (
    <StyledLink href={`/trip/${_id}`}>
      <StyledListItem>
        <ImageContainer>
          <StyledImage src={img} fill={true} alt="Dummy Pic" />
        </ImageContainer>
        <Wrapper>
          <Location location={location} />
          <StyledText>{title}</StyledText>
          <TimePeriod timePeriod={timePeriod} />
          <Counter startDate={startDate} endDate={endDate} />
        </Wrapper>
      </StyledListItem>
    </StyledLink>
  );
}
