import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NewsList from "../../components/NewsList";

const Topics = (props: any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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

export const getServerSideProps = async () => {
  //ニュース
  const urlTopic = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const topicRes = await fetch(urlTopic);
  const topicJson = await topicRes.json();
  const topicArticles = await topicJson?.articles;
  return {
    props: {
      topicArticles,
      fallback: true,
    },
  };
};

export default Topics;
