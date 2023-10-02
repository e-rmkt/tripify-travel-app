import {
  StyledImage,
  StyledLink,
  StyledListItem,
  StyledText,
  Wrapper,
} from "./Trip.styled";

import Location from "../Location";
import TimePeriod from "../TimePeriod";

export default function Trip({ title, img, location, timePeriod, _id }) {
  return (
    <StyledLink href={`/trip/${_id}`}>
      <StyledListItem>
        <StyledImage src={img} width={120} height={100} alt="Dummy Pic" />
        <Wrapper>
          <Location location={location} />
          <StyledText>{title}</StyledText>
          <TimePeriod timePeriod={timePeriod} />
        </Wrapper>
      </StyledListItem>
    </StyledLink>
  );
}
