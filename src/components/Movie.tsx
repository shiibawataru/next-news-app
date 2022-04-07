import Link from "next/link";
import React from "react";
import styles from "./Movie.module.css";

const Movie = () => {
  return (
    <>
      <div className={styles.body}>
        <h1>Movie</h1>
        <p>Coming soon ...</p>
        <Link href="/">戻る</Link>
      </div>
    </>
  );
};

export default Movie;
