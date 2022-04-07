import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={`${styles.body} w-100`}>
      <div className="d-flex align-items-center input-group w-50">
        <input
          type="text"
          className="form-control"
          placeholder="まだ何も検索できません"
        />
        <button className="btn btn-primary" type="button">
          <BiSearchAlt />
          検索
        </button>
      </div>
    </div>
  );
};

export default Search;
