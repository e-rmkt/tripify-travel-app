import { formatDistanceToNow } from "date-fns";

export default function Counter({ startDate, endDate }) {
  const now = new Date();
  const start = new Date(startDate);
  if (now < start) {
    const countdown = formatDistanceToNow(start);
    return <p>in {countdown}</p>;
  }
  const end = new Date(endDate);
  if (now >= start && now <= end) {
    return <p>Ongoing</p>;
  }
  const countdown = formatDistanceToNow(end, now);
  return <p>{countdown} ago</p>;
}
