export default function Location({ location }) {
  return (
    <h2>
      {location.map(
        (location) =>
          `${
            !location.city
              ? `${location.country}`
              : `${location.city}, ${location.country}`
          }`
      )}
    </h2>
  );
}
