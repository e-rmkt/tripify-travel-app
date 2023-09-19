import Image from "next/image";
import Link from "next/link";

export default function Trip({ title, img, location, timePeriod, _id }) {
  return (
    <Link href={`/trip/${_id}`}>
      <li>
        <Image src={img} width={150} height={100} alt="Dummy Pic" />
        {title}
        {location.map((location) => `${location.country} ${location.city}`)}
        {timePeriod.map(
          (timePeriod) => `${timePeriod.startDate} ${timePeriod.endDate}`
        )}
      </li>
    </Link>
  );
}
