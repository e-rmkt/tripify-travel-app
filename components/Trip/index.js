import {
  StyledImage,
  StyledLink,
  StyledListItem,
  StyledText,
  Wrapper,
} from "./Trip.styled";

import Location from "../Location";
import TimePeriod from "../TimePeriod";
import Counter from "../Counter";

export default function Trip({
  title,
  img,
  location,
  timePeriod,
  _id,
  countdown,
}) {
  const startDate = timePeriod.map((timePeriod) => `${timePeriod.startDate}`);
  const endDate = timePeriod.map((timePeriod) => `${timePeriod.endDate}`);

  return (
    <StyledLink href={`/trip/${_id}`}>
      <StyledListItem>
        <StyledImage src={img} width={120} height={100} alt="Dummy Pic" />
        <Wrapper>
          <Location location={location} />
          <StyledText>{title}</StyledText>
          <TimePeriod timePeriod={timePeriod} />
          <Counter
            startDate={startDate}
            endDate={endDate}
            countdown={countdown}
          />
        </Wrapper>
      </StyledListItem>
    </StyledLink>
  );
}
