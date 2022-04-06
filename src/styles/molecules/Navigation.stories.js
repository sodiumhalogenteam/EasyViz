import React from "react";

export default {
  title: "Molecules/Navigation",
};

export const Basic = () => (
  <nav className="c-primary-nav" role="navigation">
    <ul className="c-primary-nav__list">
      <li className="c-primary-nav__item">
        <a href="#" className="c-primary-nav__link">
          <span className="c-primary-nav__icon fal fa-heart-rate"></span>
          Dashboard
        </a>
      </li>
      <li className="c-primary-nav__item is-active">
        <a href="#" className="c-primary-nav__link">
          <span className="c-primary-nav__icon fal fa-walkie-talkie"></span>
          Manage Tools
        </a>
        <ul className="c-primary-nav__subList">
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Current Tools
            </a>
          </li>
          <li className="c-primary-nav__subItem is-active">
            <a href="#" className="c-primary-nav__link">
              Removed Tools
            </a>
          </li>
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Previous Imports
            </a>
          </li>
        </ul>
      </li>
      <li className="c-primary-nav__item">
        <a href="#" className="c-primary-nav__link">
          <span className="c-primary-nav__icon fal fa-users"></span>
          Manage Users
        </a>
        <ul className="c-primary-nav__subList">
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Current Users
            </a>
          </li>
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Removed Users
            </a>
          </li>
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Previous Imports
            </a>
          </li>
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Signup links
            </a>
          </li>
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Dicrectory Services
            </a>
          </li>
        </ul>
      </li>
      <li className="c-primary-nav__item">
        <a href="#" className="c-primary-nav__link">
          <span className="c-primary-nav__icon fal fa-chart-pie"></span>
          View Reports
        </a>
        <ul className="c-primary-nav__subList">
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Shop Actions
            </a>
          </li>
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              User Actions
            </a>
          </li>
          <li className="c-primary-nav__subItem">
            <a href="#" className="c-primary-nav__link">
              Tool Actions
            </a>
          </li>
        </ul>
      </li>
      <li className="c-primary-nav__item">
        <a href="#" className="c-primary-nav__link">
          <span className="c-primary-nav__icon fal fa-garage-open"></span>
          Enterprise Name
        </a>
      </li>
      <li className="c-primary-nav__item">
        <a href="#" className="c-primary-nav__link">
          <span className="c-primary-nav__icon fal fa-user"></span>
          Username
        </a>
      </li>
    </ul>
  </nav>
);
