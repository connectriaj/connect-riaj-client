import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">198</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title ">254</h3>
          <span className="about__subtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">25</h3>
          <span className="about__subtitle">Nominees winner</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title ">584</h3>
          <span className="about__subtitle">Satisfied clients</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
