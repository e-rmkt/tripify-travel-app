import { StyledListItem } from "../Trip/Trip.styled";
import { StyledUnorderedList } from "../TripList/TripList.styled";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function WeatherList({ latitude, longitude }) {
  const { data, isLoading } = useSWR(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=precipitation_probability,uv_index&daily=temperature_2m_max,sunrise,sunset,uv_index_max&timezone=GMT&forecast_days=10`,
    fetcher
  );

  if (!data || isLoading) {
    return <h2>Weather is not available</h2>;
  }

  const {
    temperature_2m_max: temperatures,
    time: dates,
    uv_index_max: uv_index,
  } = data.daily;

  const { temperature_2m_max: temperature_unit } = data.daily_units;
  const initalValue = 0;

  const { precipitation_probability } = data.hourly;

  const precPropToday = Math.round(
    precipitation_probability
      .slice(0, 24)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initalValue
      ) / 24
  );

  const precPropTomorrow = Math.round(
    precipitation_probability
      .slice(24, 48)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initalValue
      ) / 24
  );
  const precPropDayAfterTomorrow = Math.round(
    precipitation_probability
      .slice(48, 72)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initalValue
      ) / 24
  );

  const { precipitation_probability: precProbUnit } = data.hourly_units;

  const precProp = [precPropToday, precPropTomorrow, precPropDayAfterTomorrow];

  return (
    <StyledUnorderedList>
      {dates.map((date, index) => (
        <StyledListItem key={date}>
          {dates[index]}
          <br /> Temperature: {temperatures[index]}
          {temperature_unit}
          <br /> Ø UV-Index: {uv_index[index]}
          <br />Ø Precipitation probability:
          {precProp[index]}
          {precProbUnit}
        </StyledListItem>
      ))}
    </StyledUnorderedList>
  );
}
