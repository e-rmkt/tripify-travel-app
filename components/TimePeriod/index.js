import { DateContainer } from "./TimePeriod.styled";
import DateIcon from "@/components/TimePeriod/DateIcon.svg";

export default function TimePeriod({ timePeriod }) {
  return (
    <DateContainer>
      <DateIcon aria-label="Icon in form of a calendar" />
      <time>
        {timePeriod.map(
          (timePeriod) => `${timePeriod.startDate} - ${timePeriod.endDate}`
        )}
      </time>
    </DateContainer>
  );
}
