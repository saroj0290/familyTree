import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@fluentui/react/lib/Icon";
import "./Header.scss";
import * as logo from "../../../assets/images/logo.png";

function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <header className={"header " + (isCollapse ? "collapse" : " ")}>
      <a href="/#" className="logo" aria-label="logo">
        <img alt="logo" src={logo} />
      </a>
      <a
        href="/#"
        className="toggleButton"
        role="button"
        aria-label="Toggle menu button"
        onClick={() => {
          setIsCollapse(!isCollapse);
        }}
      >
        <Icon iconName="CollapseMenu"></Icon>
      </a>
      <nav className="topNav">
        <ul>
          <li>
            <NavLink exact strict to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact strict to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact strict to="/our-story">
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink exact strict to="/gallary">
              Gallary
            </NavLink>
          </li>
          <li>
            <NavLink exact strict to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
