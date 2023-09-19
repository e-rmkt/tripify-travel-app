import Image from "next/image";
import Link from "next/link";
import Location from "../Location";
import TimePeriod from "../TimePeriod";

export default function Trip({ title, img, location, timePeriod, _id }) {
  return (
    <Link href={`/trip/${_id}`}>
      <li>
        <Image src={img} width={150} height={100} alt="Dummy Pic" />
        <br />
        {title}
        <br />
        <Location location={location} />
        <br />
        <TimePeriod timePeriod={timePeriod} />
        <br />
      </li>
    </Link>
  );
}
