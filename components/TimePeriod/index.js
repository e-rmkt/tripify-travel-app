import DateIcon from "@/components/TimePeriod/DateIcon.svg";
import { DateContainer } from "./TimePeriod.styled";

export default function TimePeriod({ timePeriod }) {
  return (
    <DateContainer>
      <DateIcon />
      <time>
        {timePeriod.map(
          (timePeriod) => `${timePeriod.startDate} - ${timePeriod.endDate}`
        )}
      </time>
    </DateContainer>
  );
}
