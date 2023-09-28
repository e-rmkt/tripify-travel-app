import { formatDistanceToNow } from "date-fns";

export default function Counter({ startDate, endDate }) {
  const date = new Date();
  if (date < new Date(startDate)) {
    const countdown = formatDistanceToNow(new Date(startDate));
    return <p>in {countdown}</p>;
  } else if (date >= new Date(startDate) && date <= new Date(endDate)) {
    return <p>Ongoing</p>;
  } else {
    const countdown = formatDistanceToNow(new Date(endDate), date);
    return <p>{countdown} ago</p>;
  }
}