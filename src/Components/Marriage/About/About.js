import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./About.scss";
function About() {
  return (
    <div className="AboutUs comnTBpadd comnLRpadd" id="about">
      <div className="PageTitle">
        <h1>
          About <span>Us</span>
        </h1>
        <span className="separatorLine">
          <Icon className="redIcon" iconName="HeartFill"></Icon>
          <Icon className="blackIcon" iconName="HeartFill"></Icon>
        </span>
      </div>
      <div className="AboutContent">
        <div className="AboutBlock comnLRpadd">
          <div className="coupleImgOuter">
            <div
              className="coupleImg"
              style={{
                backgroundImage: `url(${require("../../../assets/images/rahul.jpg")})`,
              }}
            ></div>
          </div>
          <h2>Rahul</h2>
          <p>
            Praesent cursus dictum magna vitae aliquam. Praesent blandit
            fermentum fringilla. Phasellus ac justo congue dolor venenatis
            faucibus. Ut sagittis rutrum ante, eget pretium ligula adipiscing
            ut. Praesent eu massa et risus ultricies aliquet in et enim. Duis
            lobortis, ante a sagittis consectetur, risus erat semper mi, eget
            tempor nisi enim eget risus. In sed nibh lacus. Ut mi sapien,
            fermentum quis sagittis at, tristique eget libero.
          </p>
        </div>
        <div className="AboutBlock comnLRpadd">
          <div className="coupleImgOuter">
            <div
              className="coupleImg"
              style={{
                backgroundImage: `url(${require("../../../assets/images/dimple.jpg")})`,
              }}
            ></div>
          </div>
          <h2>Dimple</h2>
          <p>
            Praesent cursus dictum magna vitae aliquam. Praesent blandit
            fermentum fringilla. Phasellus ac justo congue dolor venenatis
            faucibus. Ut sagittis rutrum ante, eget pretium ligula adipiscing
            ut. Praesent eu massa et risus ultricies aliquet in et enim. Duis
            lobortis, ante a sagittis consectetur, risus erat semper mi, eget
            tempor nisi enim eget risus. In sed nibh lacus. Ut mi sapien,
            fermentum quis sagittis at, tristique eget libero.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
