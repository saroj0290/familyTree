import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Marriage/Home/Home";
import { initializeIcons } from "@uifabric/icons";
import About from "./Components/Marriage/About/About";
import OurStory from "./Components/Marriage/OurStory/OurStory";
import Gallary from "./Components/Marriage/Gallary/Gallary";
import * as logo from "./assets/images/logo.png";
import { Icon } from "@fluentui/react/lib/Icon";
import { NavLink } from "react-router-dom";
// import Header from "./Components/Marriage/Header/Header";

function App() {
  initializeIcons();
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#our-story">Our Story</a>
              </li>
              <li>
                <a href="#gallary">Gallary</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <Home />
        <About />
        <OurStory />
        <Gallary />
        {/* <Route
          path="/"
          exact
          strict
          component={Home}
          onEnter={function () {
            document.getElementById("Home").scrollIntoView();
          }}
        ></Route>
        <Route
          path="/about"
          exact
          strict
          component={About}
          onEnter={function () {
            document.getElementById("About").scrollIntoView();
          }}
        ></Route>
        <Route
          path="/our-story"
          exact
          strict
          component={OurStory}
          onEnter={function () {
            document.getElementById("OurStory").scrollIntoView();
          }}
        ></Route>
        <Route
          path="/gallary"
          exact
          strict
          component={Gallary}
          onEnter={function () {
            document.getElementById("Gallary").scrollIntoView();
          }}
        ></Route> */}
      </BrowserRouter>
    </>
  );
}

export default App;
