export default function TimePeriod({ timePeriod }) {
  return (
    <time>
      {timePeriod.map(
        (timePeriod) =>
          `${
            !timePeriod.endDate
              ? `${timePeriod.startDate}`
              : `${timePeriod.endDate} - ${timePeriod.startDate}`
          }`
      )}
    </time>
  );
}
