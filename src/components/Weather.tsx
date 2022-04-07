import Image from "next/image";
import React from "react";
import Props from "./types";
import styles from "./Weather.module.css";
import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";

// 今日の日付
const Today = format(
  new Date(),
  "yyyy" + "年" + "MM" + "月" + "dd" + "日" + "(" + "EE" + ")",
  { locale: ja }
);

const Weather: React.FC<Props> = ({ weatherNews }) => {
  const currentWeatherMain = weatherNews?.current.weather[0].main;
  const currentWeatherTemp = weatherNews?.current.temp;
  const currentWeatherIcon = weatherNews?.current.weather[0].icon;
  return (
    <>
      <div className={`${styles.body}`}>
        <div className="p-2">
          <span>
            <BsCalendar3 />
            {Today}
          </span>
          <span className={styles.city}>新宿</span>
          <hr />
          <p>今日の天気</p>
          <div className="d-flex flex-wrap">
            <Image
              className={styles.weather__icon}
              src={`http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`}
              alt="Tokyo's weather icon"
              loading="eager"
              width={220}
              height={220}
            />
            <div>
              <h4>{currentWeatherMain}</h4>
              <h4>{currentWeatherTemp?.toFixed(1)}℃</h4>
            </div>
          </div>
          <Link href="/weather">
            <a className={styles.a}>週間天気</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Weather;
