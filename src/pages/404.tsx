import Link from "next/link";
import React from "react";

const custom404 = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column ">
          <div>
            <h1>404 - Page Not Found</h1>
          </div>
          <div className="d-flex justify-content-center">
            <Link href="/">
              <a className="btn btn-info">トップページへ戻る</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default custom404;
