import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NewsList from "../../components/NewsList";

const Sports = (props: any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center my-3">科学技術</h1>
        <hr />
      </div>
      <NewsList articles={props.sportsArticles} />
      <div className=" d-flex justify-content-center my-4">
        <Link href="/">
          <a className="btn btn-info">戻る</a>
        </Link>
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const urlSports = `https://newsapi.org/v2/top-headlines?country=jp&category=sports&country=jp&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const sportsRes = await fetch(urlSports);
  const sportsJson = await sportsRes.json();
  const sportsArticles = await sportsJson?.articles;

  return {
    props: {
      sportsArticles,
      fallback: true,
    },
  };
};

export default Sports;
