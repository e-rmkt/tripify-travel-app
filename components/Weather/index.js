import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Weather() {
  const { data, isLoading } = useSWR(
    `https://api.open-meteo.com/v1/forecast?latitude=53.5507&longitude=9.993&current_weather=true&timezone=GMT`,
    fetcher
  );

  if (!data || isLoading) {
    return <h2>Weather is not available</h2>;
  }

  const { current_weather: weather, current_weather_units: unit } = data;

  return (
    <>
      Current weather
      {weather.temperature}
      {unit.temperature}
    </>
  );
}
