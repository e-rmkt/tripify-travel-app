import { formatDistanceToNow } from "date-fns";
import { StyledCounter, Wrapper } from "./Counter.styled";
import CounterIcon from "@/components/Counter/CounterIcon.svg";

export default function Counter({ startDate, endDate }) {
  const now = new Date();
  const start = new Date(startDate);
  if (now < start) {
    const countdown = formatDistanceToNow(start);
    return (
      <Wrapper>
        <CounterIcon />
        <StyledCounter>in {countdown}</StyledCounter>
      </Wrapper>
    );
  }
  const end = new Date(endDate);
  if (now >= start && now <= end) {
    return (
      <Wrapper>
        <CounterIcon />
        <StyledCounter>Ongoing</StyledCounter>
      </Wrapper>
    );
  }
  const countdown = formatDistanceToNow(end, now);
  return (
    <Wrapper>
      <CounterIcon />
      <StyledCounter>{countdown} ago</StyledCounter>
    </Wrapper>
  );
}
