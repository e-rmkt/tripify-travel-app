import Image from "next/image";

export default function Trip({ title, img, location, timePeriod }) {
  return (
    <li>
      <Image src={img} width={150} height={100} alt="Dummy Pic" />
      {title}
      {location.map((location) => `${location.country} ${location.city}`)}
      {timePeriod.map(
        (timePeriod) => `${timePeriod.startDate} ${timePeriod.endDate}`
      )}
    </li>
  );
}
