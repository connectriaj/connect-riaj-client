import React from "react";
import "./Blog.css";
import blog1 from "../../assets/blog-1.svg";
import blog2 from "../../assets/blog-2.svg";
import blog3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumbnail">
            <a href="#">
              <span className="blog__category">Reviews</span>
            </a>
            <a href="#">
              <img src={blog1} alt="blog" className="blog__image" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              5 Best App Development Tool for Your Projects
            </h3>
            <div className="blog__meta">
              <span>09 February, 2022</span>
              <span className="blog__dot">.</span>
              <span>Riaj</span>
            </div>
          </div>
        </div>

        <div className="blog___card">
          <div className="blog__thumbnail">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="#">
              <img src={blog2} alt="blog" className="blog__image" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Common Misconceptions About Payment</h3>
            <div className="blog__meta">
              <span>07 February, 2022</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog___card">
          <div className="blog__thumbnail">
            <a href="#">
              <span className="blog__category">Business</span>
            </a>
            <a href="#">
              <img src={blog3} alt="blog" className="blog__image" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              3 Things to know about startup business
            </h3>
            <div className="blog__meta">
              <span>05 February, 2022</span>
              <span className="blog__dot">.</span>
              <span>David</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
