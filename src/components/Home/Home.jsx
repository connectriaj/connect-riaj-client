import React from "react";
import HeaderSocials from "./HeaderSocials";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import man from "../../assets/man.svg";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container w-full" id="home">
      <div className="intro">
        <img src={man} alt="intro" className="home__image mx-auto" />
        <h1 className="home__name">Md Riajul Islam</h1>
        <span className="home__education">I'm a MERN Stack Developer</span>
        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
