import React from "react";
import WeekWeather from "../components/WeekWeather";

const weather = (props: any) => {
  return (
    <>
      {/* <WeekWeather
        weatherNews={props.weatherNews}
        articles={props.topicArticles}
      /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  // OpenWeatherMapから天気情報を取得
  const lat = 35.690921;
  const lon = 139.700258;
  const exclude = "hourly,minutely";
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  );
  const weatherJson = await weatherRes.json();
  const weatherNews = await weatherJson;

  return {
    props: {
      weatherNews,
      fallback: "blocking",
    },
  };
};
export default weather;
