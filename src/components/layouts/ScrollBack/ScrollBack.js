import React, { useEffect } from "react";
import "./style.css";

const ScrollBack = () => {
  useEffect(() => {
    const scrollTopEl = document.querySelector(".scroll-to-top");

    const scrollToTop = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrolledPerc = Math.floor((scrollable * 50) / 100);

      if (scrolled >= scrolledPerc) {
        scrollTopEl.classList.add("active");
      } else {
        scrollTopEl.classList.remove("active");
      }
    };

    const smoothScroll = () => {
      if (!scrollTopEl) return;
      scrollTopEl.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    };

    window.addEventListener("scroll", scrollToTop);
    smoothScroll();

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", scrollToTop);
      if (scrollTopEl) {
        scrollTopEl.removeEventListener("click", smoothScroll);
      }
    };
  }, []);

  return (
    <div className="scroll-to-top">
      <i className="ri-arrow-up-line" />
    </div>
  );
};

export default ScrollBack;
