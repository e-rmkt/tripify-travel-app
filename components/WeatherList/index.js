import { StyledButton } from "./WeatherList.styled";
import { StyledListItem } from "../Trip/Trip.styled";
import { StyledUnorderedList } from "../TripList/TripList.styled";
import WeatherIcon from "@/components/WeatherList/WeatherIcon.svg";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function WeatherList({ latitude, longitude }) {
  const [isHidden, setIsHidden] = useState(true);
  function toggleHidden() {
    setIsHidden(!isHidden);
  }
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
    <>
      <StyledButton onClick={toggleHidden}>
        <WeatherIcon />
        {isHidden ? "Show Weather Forecast" : "Hide Weather Forecast"}
      </StyledButton>
      {!isHidden ? (
        <StyledUnorderedList>
          {dates.map((date, index) => (
            <StyledListItem key={date}>
              <h2>{dates[index]}</h2>
              <br />
              <h3>
                Temperature: {temperatures[index]}
                {temperature_unit}
              </h3>
              <br />
              <h3>Ø UV-Index: {uv_index[index]}</h3>
              <br />
              <h3>
                Ø Precipitation probability: {precProp[index]}
                {precProbUnit}
              </h3>
            </StyledListItem>
          ))}
        </StyledUnorderedList>
      ) : null}
    </>
  );
}
