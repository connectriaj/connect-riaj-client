import React from "react";
import "./Sidebar.css";
import logo1 from "../../assets/logo1.png";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={logo1} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#pricing" className="nav__link">
                <i className="icon-bag"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; Connect Riaj | 2025</span>
      </div>
    </aside>
  );
};

export default Sidebar;
