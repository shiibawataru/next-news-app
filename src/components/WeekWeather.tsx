import React from "react";
import Props from "./types";
import { parseISO, format, addDays } from "date-fns";
import ja from "date-fns/locale/ja";
import Link from "next/link";

// 今日の日付
const now = new Date();

let month = now.getMonth() + 1; // 月
let day = now.getDate(); // 日
var dayOfWeek = now.getDay(); // 曜日(数値)
var dayOfWeekStr = [
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土",
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土",
];

const WeekWeather: React.FC<Props> = ({ weatherNews }) => {
  //   const currentWeatherMain = weatherNews?.current.weather[0].main;
  //   const currentWeatherTemp = weatherNews?.current.temp;
  //   const currentWeatherIcon = weatherNews?.current.weather[0].icon;

  return (
    <>
      <div>週間天気</div>
      <div>
        <ul className="d-flex justify-content-center m-auto p-0 flex-wrap">
          {weatherNews?.daily.map((date, index) => {
            return (
              <div className="card p-2" key={index}>
                <h5>{`${month}月${day + index}日(${
                  dayOfWeekStr[dayOfWeek + index]
                })`}</h5>
                <img
                  src={`http://openweathermap.org/img/wn/${date.weather[0].icon}@2x.png`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">{date.weather[0].main}</h4>
                  <hr />
                  <p className="card-text text-danger">
                    {date.temp.max.toFixed(1)}℃
                  </p>
                  <p className="card-text text-primary">
                    {date.temp.min.toFixed(1)}℃
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
        <Link href="/">
          <a href="">戻る</a>
        </Link>
      </div>
    </>
  );
};

export default WeekWeather;
