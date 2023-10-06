import { StyledUnorderedList } from "../TripList/TripList.styled";
import useSWR from "swr";
import Weather from "../Weather";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function WeatherList() {
  const { data, isLoading } = useSWR(
    `https://api.open-meteo.com/v1/forecast?latitude=53.5507&longitude=9.993&hourly=precipitation_probability,uv_index&daily=temperature_2m_max,sunrise,sunset,uv_index_max&timezone=GMT&forecast_days=3`,
    fetcher
  );

  if (!data || isLoading) {
    return <h2>Weather is not available</h2>;
  }

  const {
    temperature_2m_max: temperatures,
    sunrise: sunrises,
    sunset: sunsets,
    time: dates,
    uv_index_max: uv_index,
  } = data.daily;

  const {
    sunrise: sunsrise_time,
    sunset: sunset_time,
    temperature_2m_max: temperature_unit,
  } = data.daily_units;
  const initalValue = 0;

  const { precipitation_probability } = data.hourly;
  const precPropToday =
    precipitation_probability
      .slice(0, 24)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initalValue
      ) / 24;

  const precPropTomorrow =
    precipitation_probability
      .slice(24, 48)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initalValue
      ) / 24;
  const precPropDayAfterTomorrow =
    precipitation_probability
      .slice(48, 72)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initalValue
      ) / 24;

  const { precipitation_probability: precProbUnit } = data.hourly_units;

  return (
    <ul>
      <li>
        {dates[0]} {temperatures[0]}
      </li>
      <li>
        {dates[1]} {temperatures[1]}
      </li>
      <li>
        {dates[2]} {temperatures[2]}
      </li>
    </ul>
  );
}
