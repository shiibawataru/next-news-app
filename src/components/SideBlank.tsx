import Image from "next/image";
import React from "react";
import styles from "./SideBlank.module.css";

const SideBlank = () => {
  return (
    <>
      <div className={`${styles.body} d-flex flex-column`}>
        <div className="m-1">
          <div>サイドバー広告</div>
          <Image
            className={`${styles.img}`}
            src="/img/advertisement/side.jpg"
            height={200}
            width={200}
            alt="advertisement"
          />
        </div>
      </div>
    </>
  );
};

export default SideBlank;
