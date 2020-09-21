import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./Home.scss";
function Home() {
  return (
    <>
      <div className="homeBanner" id="home">
        <div className="bannerContent">
          <h1>Dimple & Rahul</h1>
          <p>Got Married</p>
          <span className="separatorLine">
            <Icon className="whiteIcon" iconName="Heart"></Icon>
            <Icon className="redIcon" iconName="HeartFill"></Icon>
          </span>
          <p>December 06, 2019</p>
        </div>
      </div>
    </>
  );
}

export default Home;
