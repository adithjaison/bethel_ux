import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo-sm.png";
import "./style.css";
const loaderContainerClass = "page-loader";
const loaderClass = "loader";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    loading && (
      <div className={loaderContainerClass}>
        <div className={loaderClass}>
          <img src={Logo} alt="/" />
        </div>
      </div>
    )
  );
};

export default PageLoader;
