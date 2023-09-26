import Location from "../Location";
import TimePeriod from "../TimePeriod";
import { StyledList, Wrapper, StyledLink, StyledImage } from "./Trip.styled";

export default function Trip({ title, img, location, timePeriod, _id }) {
  return (
    <StyledLink href={`/trip/${_id}`}>
      <StyledList>
        <StyledImage src={img} width={150} height={100} alt="Dummy Pic" />
        <Wrapper>
          <Location location={location} />
          <h3>{title}</h3>
          <TimePeriod timePeriod={timePeriod} />
        </Wrapper>
      </StyledList>
    </StyledLink>
  );
}
