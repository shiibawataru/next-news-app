import Link from "next/link";
import React from "react";
import NewsList from "../../components/NewsList";

const topics = (props: any) => {
  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center my-3">ニュース</h1>
        <hr />
      </div>
      <NewsList articles={props.topicArticles} />
      <div className=" d-flex justify-content-center my-4">
        <Link href="/">
          <a className="btn btn-info">戻る</a>
        </Link>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  //ニュース
  const urlTopic = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  const topicRes = await fetch(urlTopic);
  const topicJson = await topicRes.json();
  const topicArticles = await topicJson?.articles;
  return {
    props: {
      topicArticles,
      fallback: "blocking",
    },
  };
};

export default topics;
