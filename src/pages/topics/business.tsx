import Link from "next/link";
import React from "react";
import NewsList from "../../components/NewsList";

const business = (props: any) => {
  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center my-3">ビジネス</h1>
        <hr />
      </div>
      <NewsList articles={props.businessArticles} />
      <div className=" d-flex justify-content-center my-4">
        <Link href="/">
          <a className="btn btn-info">戻る</a>
        </Link>
      </div>
    </>
  );
};
export const getStaticProps = async () => {
  const urlBusiness = `https://newsapi.org/v2/top-headlines?country=jp&category=business&country=jp&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  const businessRes = await fetch(urlBusiness);
  const businessJson = await businessRes.json();
  const businessArticles = await businessJson?.articles;

  return {
    props: {
      businessArticles,
      fallback: "blocking",
    },
  };
};

export default business;
