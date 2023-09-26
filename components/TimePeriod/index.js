export default function TimePeriod({ timePeriod }) {
  return (
    <h4>
      {timePeriod.map(
        (timePeriod) => `${timePeriod.startDate} - ${timePeriod.endDate}`
      )}
    </h4>
  );
}
