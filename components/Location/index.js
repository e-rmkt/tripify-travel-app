export default function Location({ location }) {
  return (
    <>{location.map((location) => `${location.country}, ${location.city}`)}</>
  );
}
