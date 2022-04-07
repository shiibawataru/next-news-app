import React from "react";
import Props from "./types";
import styles from "./NewsList.module.css";
// import Image from "next/image";

const NewsList: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <div>
        {articles.map((article, index) => {
          return (
            <>
              <div className="container">
                <a key={index} href={article.url} className={`${styles.a}`}>
                  <div className="row">
                    <div className="col-md-4  img-hidden d-flex justify-content-center">
                      <img
                        src={article.urlToImage}
                        alt="img"
                        className={`${styles.img} img-fulied max-width: 100% rounded`}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div className="col-md-8">
                      <h2>{article.title}</h2>
                      <p>{article.description}</p>
                    </div>
                  </div>
                </a>
                <hr />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default NewsList;
