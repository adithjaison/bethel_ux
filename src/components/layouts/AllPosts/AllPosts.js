import React from "react";
import Post1 from "../../../assets/images/post-1@1.5x.jpg";
import Post2 from "../../../assets/images/post-2@1.5x.jpg";
import Sermon1 from "../../../assets/images/sermon-1@1.5x.jpg";
import Pagination from "../Pagination/Pagination";

const postData = [
  {
    image: Post1,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Living for Christ requires boldness",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.",
  },
  {
    image: Post2,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Living in the last days as Christians",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.",
  },
  {
    image: Sermon1,
    date: "02/28/2020",
    speaker: "Pastor Erik B. Hogan",
    title: "Understanding the Bible requires dedication",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis excepturi sunt doloribus consequuntur eveniet nostrum dicta, voluptate enim rem voluptatem.",
  },
  // Add more post objects here if needed
];

const AllPosts = () => {
  return (
    <div className="all-posts default-section-spacing">
      <div className="container">
        <div className="section-heading text-center no-margin">
          <span>Blog</span>
          <h2>Our blog posts</h2>
        </div>
        <div className="search search-header default-section-spacing">
          <div className="row">
            <>
              <div className="flex-md-6 flex-lg-4">
                <div className="search__result">
                  <div className="text leading uppercase bold">Results</div>
                  <p>Showing 6 out of 24 posts</p>
                </div>
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="search__filter">
                  <div className="text leading uppercase bold">Filter</div>
                  <form action="#" className="form search__filter--form">
                    <div className="form__group">
                      <select
                        id="filter-posts"
                        className="form__input form__select"
                      >
                        <option value="most-recent" selected="">
                          Most recent
                        </option>
                        <option value="this-week">Published this week</option>
                        <option value="most-comments">Most comments</option>
                        <option value="most-popular">Most popular</option>
                      </select>
                    </div>
                  </form>
                  {/*  */}
                </div>
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-12 flex-lg-4">
                <div className="search__search">
                  <div className="text leading uppercase bold">Search</div>
                </div>
                <form action="#" className="form search__form">
                  <div className="display-flex">
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Search for posts..."
                      />
                    </div>
                    {/* .form__group ends */}
                    <div>
                      <button type="submit" className="button">
                        Search
                      </button>
                    </div>
                  </div>
                  {/* .display-flex ends */}
                </form>
                {/* .form ends */}
              </div>
              {/* .flex-* ends */}
            </>
          </div>
        </div>
        <div className="all-posts__posts">
          <div className="row">
            {postData.map((post, index) => (
              <div className="flex-md-6 flex-lg-4 mar-b-sm" key={index}>
                <div className="card blog">
                  <div className="card__header">
                    <img
                      src={post.image}
                      alt="Post Image"
                      className="card__image blog__image"
                    />
                  </div>
                  <div className="card__footer">
                    <div className="blog__metas">
                      <div className="blog__meta--date meta">
                        <i className="ri-calendar-event-line" />{" "}
                        <span>{post.date}</span>
                      </div>
                      <div className="blog__meta--speaker meta">
                        <i className="ri-user-star-line" />{" "}
                        <span>{post.speaker}</span>
                      </div>
                    </div>
                    <div className="blog__title">
                      <h3>{post.title}</h3>
                    </div>
                    <div className="blog__content">
                      <div className="excerpt">
                        <p>{post.description}</p>
                      </div>
                      <div className="blog__link">
                        <a href="blog-single.html" className="button">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default AllPosts;
