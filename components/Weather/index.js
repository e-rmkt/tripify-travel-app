import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Weather() {
  const { data, isLoading } = useSWR(
    `https://api.open-meteo.com/v1/forecast?latitude=53.5507&longitude=9.993&hourly=precipitation_probability,uv_index&daily=temperature_2m_max,sunrise,sunset,uv_index_max&timezone=GMT&forecast_days=3`,
    fetcher
  );

  if (!data || isLoading) {
    return <h2>Weather is not available</h2>;
  }

  console.log(data);
  console.log(data.daily.sunrise[0]);

  const {
    temperature_2m_max: temperatures,
    sunrise: sunrises,
    sunset: sunsets,
    time: date,
    uv_index_max: uv_index,
  } = data.daily;

  const {
    sunrise: sunsrise_time,
    sunset: sunset_time,
    temperature_2m_max: temperature_unit,
  } = data.daily_units;

  const { precipitation_probability } = data.hourly;

  const { precipitation_probability: precipitation_probability_unit } =
    data.hourly_units;

  return <></>;
}
