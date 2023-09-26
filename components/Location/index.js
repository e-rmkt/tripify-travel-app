export default function Location({ location }) {
  return (
    <h2>
      {location.map((location) => `${location.country}, ${location.city}`)}
    </h2>
  );
}
