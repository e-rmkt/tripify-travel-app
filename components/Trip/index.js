import Location from "../Location";
import TimePeriod from "../TimePeriod";
import {
  StyledListItem,
  Wrapper,
  StyledLink,
  StyledImage,
  StyledText,
} from "./Trip.styled";

export default function Trip({ title, img, location, timePeriod, _id }) {
  return (
    <StyledLink href={`/trip/${_id}`}>
      <StyledListItem>
        <StyledImage src={img} width={150} height={100} alt="Dummy Pic" />
        <Wrapper>
          <Location location={location} />
          <StyledText>{title}</StyledText>
          <TimePeriod timePeriod={timePeriod} />
        </Wrapper>
      </StyledListItem>
    </StyledLink>
  );
}
