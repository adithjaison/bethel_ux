import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo-sm.png";
const loaderContainerClass =
  "page-loader flex justify-center items-center h-screen bg-gray-900 bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 z-50";
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
