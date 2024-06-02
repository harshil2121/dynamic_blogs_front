import React, { useEffect, useState } from "react";
import NoImg from "../assets/images/no_image.jpg";
import UserImg from "../assets/images/images.jpeg";
import { getAllBlogList } from "../apiService/blogApiServices";
import moment from "moment/moment";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  const getData = async () => {
    try {
      const res = await getAllBlogList();
      if (res.success) {
        let data = res.data.map((f) => ({
          ...f,
          images: JSON.parse(f.images),
        }));
        console.log("ressss", data);
        setBlogData(data);
      } else {
        console.error("Failed to fetch blog data:", res.error);
      }
    } catch (err) {
      console.error("Error fetching blog data:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderBlogCard = (f, idx, reverse = false) => (
    <div key={idx} className={`col-12 mb-4 post-card-wrapper`}>
      <div
        className={`row d-flex flex-row ${
          reverse ? "flex-row-reverse" : ""
        } post-card style-3 wow animate__ animate__fadeInRight animate__slow animated activate-animation  side-card`}
        style={{
          visibility: "visible",
          animationName: "fadeInRight",
        }}
      >
        <div className="col-6 content">
          <p className="title card-text">{f?.description}</p>
          <div className="meta-user">
            <div className="image">
              <img src={UserImg} className="user-logo" alt="" />
            </div>
            <div className="meta-user-content">
              <h6 className="user">
                <a href="#">{f?.first_name + " " + f?.last_name}</a>
              </h6>
              <p className="desc">
                {moment(f?.created_at).format("MMMM DD, YYYY ")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 p-0">
          <img
            src={
              f?.images?.length > 0
                ? `${process.env.REACT_APP_BACKEND_URI}/${f?.images[0]}`
                : NoImg
            }
            alt=""
            className="image card-img-side"
          />
        </div>
      </div>
    </div>
  );

  // Define a set to keep track of rendered indices
  const renderedIndices = new Set();

  const renderBlogPattern = (f, idx) => {
    const setIndex = Math.floor(idx / 6); // Index of the set of 6 cards

    // Check if the current index has already been rendered
    if (renderedIndices.has(idx)) {
      return null;
    }

    if (idx % 6 === 0 || idx % 6 === 5) {
      // Full-card style for indices 0, 5, 6, 11, 12, 17, etc.
      renderedIndices.add(idx);
      return (
        <div key={idx} className="col-12 col-md-6 mb-4">
          <div className="post-card style-2 full-card">
            <img
              src={
                f?.images?.length > 0
                  ? `${process.env.REACT_APP_BACKEND_URI}/${f?.images[0]}`
                  : NoImg
              }
              alt=""
              className="image card-img-top"
            />
            <div className="content">
              <div className="title card-text">{f?.description}</div>
              <div className="meta-user">
                <div className="image">
                  <img src={UserImg} className="user-logo" alt="" />
                </div>
                <div className="meta-user-content">
                  <h6 className="user">
                    <a href="#">{f?.first_name + " " + f?.last_name}</a>
                  </h6>
                  <p className="desc">
                    {moment(f?.created_at).format("MMMM DD, YYYY ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      idx % 6 === 1 ||
      idx % 6 === 2 ||
      idx % 6 === 3 ||
      idx % 6 === 4
    ) {
      // Side-card style for indices 1, 2, 3, 4, 7, 8, 9, 10, etc.
      const nextIdx = idx + 1;
      if (nextIdx < blogData.length) {
        // Add both current and next index to the set
        renderedIndices.add(idx);
        renderedIndices.add(nextIdx);
      }

      const isReverse = setIndex % 2 === 1; // Check if the layout should be reversed
      return (
        <div key={idx} className="col-md-6 mb-4 d-flex flex-column">
          {renderBlogCard(f, idx, isReverse)}
          {blogData[idx + 1] &&
            renderBlogCard(blogData[idx + 1], idx + 1, isReverse)}
        </div>
      );
    }

    return null; // Return null for other indices
  };

  return (
    <div className="">
      <div
        style={{
          marginTop: "85px",
        }}
        class="achieve-area py-80 bg-blue"
      >
        <div class="container">
          <div class="inner-wrapper text-center">
            <div class="content w-100">
              <h3 class="title mb-0">Blogs</h3>
            </div>
          </div>
        </div>
      </div>
      <section className="section_1">
        <div className="row justify-content-center">
          <div class="section-title-wrapper align-items-center">
            <div class="section-title">
              <div class="short-title">
                <span>Our latest news</span>
              </div>
              <h2 class="title">
                Immerse yourself in our <br /> articles &amp; insights
              </h2>
            </div>
            <div>
              <a href="about.html" class="theme-btn">
                View all
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          {blogData.map((f, idx) => renderBlogPattern(f, idx))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
