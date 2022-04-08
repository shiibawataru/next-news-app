import Link from "next/link";
import React from "react";
import styles from "./News.module.css";
import Props from "./types";

const News: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <div className={styles.body}>
        <ul className="p-2">
          {articles.map((article, index) => {
            // return (
            <a key={index} href={article.url} className={`${styles.a}`}>
              <li key={index} className={`m-1 ${styles.li}`}>
                {article.title}
              </li>
            </a>;
            // );
          })}
        </ul>
      </div>
    </>
  );
};

export default News;
