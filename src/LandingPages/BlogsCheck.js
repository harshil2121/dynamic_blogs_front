import React, { useEffect, useState } from "react";
import { getAllBlogList } from "../apiService/blogApiServices";
import NoImg from "../assets/images/no_image.jpg";
import UserImg from "../assets/images/images.jpeg";
import moment from "moment";

const BlogCheck = () => {
  const [blogData, setBlogData] = useState([]);

  const getData = async () => {
    try {
      const res = await getAllBlogList();
      if (res.success) {
        let data = res.data.map((f) => ({
          ...f,
          images: JSON.parse(f.images),
        }));
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
    <div key={idx} className="col-12 mb-4 post-card-wrapper">
      <div
        className={`row d-flex flex-row ${
          reverse ? "flex-row-reverse" : ""
        } post-card style-3 wow animate__ animate__fadeInRight animate__slow animated activate-animation side-card`}
        style={{
          visibility: "visible",
          animationName: "fadeInRight",
        }}
      >
        <div className="col-6 content">
          <p className="title card-text">{f?.description}</p>
          <div className="meta-user">
            <div className="image">
              <img src={UserImg} className="user-logo" height={25} alt="" />
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

  const renderBlogPattern = (f, idx) => {
    const isFullCard = idx % 6 === 0 || idx % 6 === 5;
    if (isFullCard) {
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
                  <img src={UserImg} className="user-logo" height={25} alt="" />
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
    } else {
      const isReverse = Math.floor(idx / 6) % 2 === 1; // Check if the layout should be reversed
      return (
        <div key={idx} className="col-12 col-md-6 mb-4">
          {renderBlogCard(f, idx, isReverse)}
          {blogData[idx + 1] &&
            renderBlogCard(blogData[idx + 1], idx + 1, isReverse)}
        </div>
      );
    }
  };

  return (
    <div style={{ marginTop: "85px" }}>
      <div className="achieve-area py-80 bg-blue">
        <div className="container">
          <div className="inner-wrapper text-center">
            <div className="content w-100">
              <h3 className="title mb-0">Blogs</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-post-area style-1 py-120 py-sm-60 py-md-80 py-lg-100">
        <div className="container">
          <div className="section-title-wrapper">
            <div className="section-title">
              <div className="short-title">
                <span>Our latest news</span>
              </div>
              <h2 className="title">
                Immerse yourself in our <br /> articles &amp; insights
              </h2>
            </div>
            <div>
              <a href="about.html" className="theme-btn">
                View all
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            {blogData.map((f, idx) => {
              if (idx % 6 === 0 || idx % 6 === 5) {
                // Full-card style for indices 0, 5, 6, 11, 12, 17, etc.
                return renderBlogPattern(f, idx);
              } else if (
                idx % 6 === 1 ||
                idx % 6 === 2 ||
                idx % 6 === 3 ||
                idx % 6 === 4
              ) {
                // Ensure we only render side-card styles once per two items
                if (idx % 2 === 1) {
                  return renderBlogPattern(f, idx);
                }
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCheck;
