import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NewsList from "../../components/NewsList";

const Entertainment = (props: any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center my-3">エンタメ</h1>
        <hr />
      </div>
      <NewsList articles={props.entertainmentArticles} />
      <div className=" d-flex justify-content-center my-4">
        <Link href="/">
          <a className="btn btn-info">戻る</a>
        </Link>
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  // エンタメ
  const urlEntertainment = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&country=jp&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  const entertainmentRes = await fetch(urlEntertainment);
  const entertainmentJson = await entertainmentRes.json();
  const entertainmentArticles = await entertainmentJson?.articles;

  return {
    props: {
      entertainmentArticles,
      fallback: true,
    },
  };
};

export default Entertainment;
