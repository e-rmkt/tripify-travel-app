export default function TimePeriod({ timePeriod }) {
  return (
    <>
      {timePeriod.map(
        (timePeriod) => `${timePeriod.startDate} - ${timePeriod.endDate}`
      )}
    </>
  );
}
