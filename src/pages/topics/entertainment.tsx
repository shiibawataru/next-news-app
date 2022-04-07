import Link from "next/link";
import React from "react";
import NewsList from "../../components/NewsList";

const entertainment = (props: any) => {
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
export const getStaticProps = async () => {
  // エンタメ
  const urlEntertainment = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&country=jp&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  const entertainmentRes = await fetch(urlEntertainment);
  const entertainmentJson = await entertainmentRes.json();
  const entertainmentArticles = await entertainmentJson?.articles;

  return {
    props: {
      entertainmentArticles,
    },
  };
};

export default entertainment;
