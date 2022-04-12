import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import News from "../components/News";
import Search from "../components/Search";
import Weather from "../components/Weather";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import Props from "../components/types";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";
import Advertisement from "../components/Advertisement";
import SideBlank from "../components/SideBlank";
// import styles from "../styles/globals.css";

// 今日の日付
const Today = format(
  new Date(),
  "yyyy" + "年" + "MM" + "月" + "dd" + "日" + "(" + "EE" + ")",
  { locale: ja }
);

const Home = (props: any) => {
  console.log("NJ" + JSON.stringify(props.topicArticles));
  // console.log("W" + props.weatherNews);
  // console.log("WJ" + JSON.stringify(props.weatherNews));

  return (
    <>
      <title>Wahoo! NIPPON</title>
      <h1 className="d-flex justify-content-center mx-1">
        <Image
          height={61}
          width={343}
          src="/img/logo/WAHOO.png"
          alt="企業ロゴ"
        />
      </h1>
      <div className="mx-5 d-flex justify-content-center">
        <Search />
      </div>
      <div className="d-flex flex-wrap mx-5">
        <div className="mt-3 container-fluid">
          <div className="row">
            <div className="col-md-2">
              <CategoryList />
              <SideBlank />
            </div>
            <div className="col-md-7">
              <Tabs>
                <TabList>
                  <Tab>ニュース</Tab>
                  <Tab>ビジネス</Tab>
                  <Tab>科学</Tab>
                  <Tab>エンタメ</Tab>
                  <Tab>スポーツ</Tab>
                </TabList>
                <TabPanel>
                  <News articles={props.topicArticles} />
                  <Link href="/topics/topics">
                    <a>もっと見る&nbsp;-ニュース</a>
                  </Link>
                </TabPanel>
                <TabPanel>
                  <News articles={props.businessArticles} />
                  <Link href="/topics/business">
                    <a>もっと見る&nbsp;-ビジネス</a>
                  </Link>
                </TabPanel>
                <TabPanel>
                  <News articles={props.scienceArticles} />
                  <Link href="/topics/science">
                    <a>もっと見る&nbsp;-科学</a>
                  </Link>
                </TabPanel>
                <TabPanel>
                  <News articles={props.entertainmentArticles} />
                  <Link href="/topics/entertainment">
                    <a>もっと見る&nbsp;-エンタメ</a>
                  </Link>
                </TabPanel>
                <TabPanel>
                  <News articles={props.sportsArticles} />
                  <Link href="/topics/sports">
                    <a>もっと見る&nbsp;-スポーツ</a>
                  </Link>
                </TabPanel>
              </Tabs>
            </div>
            <div className="col-md-3">
              {/* <Weather
                weatherNews={props.weatherNews}
                articles={props.topicArticles}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 my-3 d-flex justify-content-center">
        <Advertisement />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  // NewsAPIのトップ記事の情報を取得
  const pageSize = 8;
  const pageSizeForTop = `&pageSize=${pageSize}&`;
  //ニュース
  const urlTopic = `https://newsapi.org/v2/top-headlines?country=jp${pageSizeForTop}apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const topicRes = await fetch(urlTopic);
  const topicJson = await topicRes.json();
  const topicArticles = await topicJson?.articles;
  // const topicArticles = JSON.stringify(topicJson?.articles);
  // ビジネス用
  const urlBusiness = `https://newsapi.org/v2/top-headlines?country=jp${pageSizeForTop}category=business&country=jp&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const businessRes = await fetch(urlBusiness);
  const businessJson = await businessRes.json();
  const businessArticles = await businessJson?.articles;
  // const businessArticles = JSON.stringify(businessJson?.articles);
  // 科学技術
  const urlScience = `https://newsapi.org/v2/top-headlines?country=jp${pageSizeForTop}category=science&country=jp&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const scienceRes = await fetch(urlScience);
  const scienceJson = await scienceRes.json();
  const scienceArticles = await scienceJson?.articles;
  // const scienceArticles = JSON.stringify(scienceJson?.articles);
  // エンタメ
  const urlEntertainment = `https://newsapi.org/v2/top-headlines?country=jp${pageSizeForTop}category=entertainment&country=jp&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const entertainmentRes = await fetch(urlEntertainment);
  const entertainmentJson = await entertainmentRes.json();
  const entertainmentArticles = await entertainmentJson?.articles;
  // const entertainmentArticles = JSON.stringify(entertainmentJson?.articles);
  // スポーツ
  const urlSports = `https://newsapi.org/v2/top-headlines?country=jp${pageSizeForTop}category=sports&country=jp&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const sportsRes = await fetch(urlSports);
  const sportsJson = await sportsRes.json();
  const sportsArticles = await sportsJson?.articles;
  // const sportsArticles = JSON.stringify(sportsJson?.articles);

  // OpenWeatherMapから天気情報を取得
  const lat = 35.690921;
  const lon = 139.700258;
  const exclude = "hourly,minutely";
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
  );
  const weatherJson = await weatherRes.json();
  const weatherNews = weatherJson;

  return {
    props: {
      topicArticles,
      businessArticles,
      scienceArticles,
      entertainmentArticles,
      sportsArticles,
      weatherNews,
      fallback: "blocking",
    },
  };
};

export default Home;
