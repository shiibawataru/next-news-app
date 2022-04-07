import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={`${styles.body} w-100`}>
      {/* <div class={`col-lg-6 ${styles.aboutBoxImg} wow fadeInUp`}></div> */}
      {/* <div className="d-flex justify-content-center align-items-center"> */}
      {/* <div className={styles.container}> */}
      <div className="d-flex align-items-center input-group w-50">
        <input
          type="text"
          className="form-control"
          placeholder="まだ何も検索できません"
          //   aria-describedby="button-addon2"
        />
        <button
          className="btn btn-primary"
          type="button"
          //   id="button-addon2"
        >
          <BiSearchAlt />
          検索
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Search;
