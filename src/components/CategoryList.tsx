import React from "react";
import styles from "./CategoryList.module.css";
import { BiNews, BiCameraMovie, BiGame } from "react-icons/bi";
import { IoIosPartlySunny } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const CategoryCategoryList = () => {
  return (
    <>
      <div className={styles.body}>
        <ul className={`p-2 m-1 ${styles.li}`}>
          <li>
            <Link href="/topics/topics">
              <a className={styles.a}>
                <BiNews />
                ニュース
              </a>
            </Link>
          </li>
          <li>
            <Link href="/weather">
              <a className={styles.a}>
                <IoIosPartlySunny />
                天気
              </a>
            </Link>
          </li>
          <li>
            <Link href="/movie">
              <a className={styles.a}>
                <BiCameraMovie />
                映画
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://bingo-machine-card.vercel.app/">
              <a className={styles.a}>
                <BiGame />
                ビンゴゲーム
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCategoryList;
