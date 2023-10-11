import { StyledButton, StyledListItem, Wrapper } from "./WeatherList.styled";

import RainIcon from "@/components/WeatherList/RainIcon.svg";
import { StyledUnorderedList } from "../TripList/TripList.styled";
import TempIcon from "@/components/WeatherList/TempIcon.svg";
import UVIcon from "@/components/WeatherList/UVIcon.svg";
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

  const { precipitation_probability } = data.hourly;

  const { precipitation_probability: precProbUnit } = data.hourly_units;

  const dailyAverages = [];

  precipitation_probability.forEach((value, index) => {
    const dayIndex = Math.floor(index / 24);
    if (!dailyAverages[dayIndex]) {
      dailyAverages[dayIndex] = [];
    }
    dailyAverages[dayIndex].push(value);
  });

  const calculatedAverages = dailyAverages.map((dayData) => {
    const sum = dayData.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return Math.round(sum / dayData.length);
  });

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
              <h3>{dates[index]}</h3>
              <Wrapper>
                <TempIcon />
                <h3>
                  {temperatures[index]}
                  {temperature_unit}
                </h3>
              </Wrapper>
              <Wrapper>
                <UVIcon />
                <h3>{uv_index[index]}</h3>
              </Wrapper>
              <Wrapper>
                <RainIcon />
                <h3>
                  {calculatedAverages[index]}
                  {precProbUnit}
                </h3>
              </Wrapper>
            </StyledListItem>
          ))}
        </StyledUnorderedList>
      ) : null}
    </>
  );
}
