import Image from "next/image";
import React from "react";
import styles from "./Advertisement.module.css";

const Advertisement = () => {
  return (
    <>
      <div className={`${styles.body} w-100 d-flex flex-column `}>
        <div>ここに広告を掲載</div>
        <div>
          <Image
            src="/img/advertisement/sale.jpg"
            height={120}
            width={1200}
            alt="advertisement"
          />
        </div>
      </div>
    </>
  );
};

export default Advertisement;
