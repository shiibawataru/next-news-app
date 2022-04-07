import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NewsList from "../../components/NewsList";

const Science = (props: any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center my-3">科学</h1>
        <hr />
      </div>
      <NewsList articles={props.scienceArticles} />
      <div className=" d-flex justify-content-center my-4">
        <Link href="/">
          <a className="btn btn-info">戻る</a>
        </Link>
      </div>
    </>
  );
};
export const getStaticProps = async () => {
  const urlScience = `https://newsapi.org/v2/top-headlines?country=jp&category=science&country=jp&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  const scienceRes = await fetch(urlScience);
  const scienceJson = await scienceRes.json();
  const scienceArticles = await scienceJson?.articles;

  return {
    props: {
      scienceArticles,
      fallback: true,
    },
  };
};

export default Science;
