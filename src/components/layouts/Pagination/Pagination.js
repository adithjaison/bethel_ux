import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <span className="pagination__arrow">
        <a href="/">
          <i className="ri-arrow-left-s-line" />
        </a>
      </span>
      <span className="pagination__number">
        <a href="/">1</a>
      </span>
      <span className="pagination__number active">
        <a href="/">2</a>
      </span>
      <span className="pagination__number">
        <a href="/">3</a>
      </span>
      <span className="pagination__arrow">
        <a href="/">
          <i className="ri-arrow-right-s-line" />
        </a>
      </span>
    </div>
  );
};

export default Pagination;
