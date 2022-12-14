import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials flex justify-between items-center">
      <a
        href="https://www.instagram.com"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.twitter.com"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a
        href="https://www.facebook.com"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>

      <a
        href="https://www.youtube.com"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>

      <a
        href="https://www.github.com"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
