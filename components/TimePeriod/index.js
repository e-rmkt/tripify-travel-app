export default function TimePeriod({ timePeriod }) {
  return (
    <time>
      {timePeriod.map(
        (timePeriod) => `${timePeriod.startDate} - ${timePeriod.endDate}`
      )}
    </time>
  );
}
