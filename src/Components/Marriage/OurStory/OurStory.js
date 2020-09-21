import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./OurStory.scss";
function OurStory() {
  return (
    <div className="OurStory comnTBpadd comnLRpadd" id="our-story">
      <div className="PageTitle">
        <h1>
          Our <span>Story</span>
        </h1>
        <span className="separatorLine">
          <Icon className="redIcon" iconName="HeartFill"></Icon>
          <Icon className="blackIcon" iconName="HeartFill"></Icon>
        </span>
      </div>
      <div className="OurStoryContent">
        <div className="OurStoryBlock comnLRpadd">
          <div className="coupleImgOuter">
            <div
              className="coupleImg"
              style={{
                backgroundImage: `url(${require("../../../assets/images/our-story1.jpg")})`,
              }}
            ></div>
          </div>
          <h2>We met in Chandigarh</h2>
          <p>
            Praesent cursus dictum magna vitae aliquam. Praesent blandit
            fermentum fringilla. Phasellus ac justo congue dolor venenatis
            faucibus. Ut sagittis rutrum ante, eget pretium ligula adipiscing
            ut. In sed nibh lacus. Ut mi sapien, fermentum quis sagittis at,
            tristique eget libero.
          </p>
        </div>
        <div className="OurStoryBlock comnLRpadd">
          <div className="coupleImgOuter">
            <div
              className="coupleImg"
              style={{
                backgroundImage: `url(${require("../../../assets/images/our-story2.jpg")})`,
              }}
            ></div>
          </div>
          <h2>Got married in our Hometown</h2>
          <p>
            Praesent cursus dictum magna vitae aliquam. Praesent blandit
            fermentum fringilla. Phasellus ac justo congue dolor venenatis
            faucibus. Ut sagittis rutrum ante, eget pretium ligula adipiscing
            ut. In sed nibh lacus. Ut mi sapien, fermentum quis sagittis at,
            tristique eget libero.
          </p>
        </div>
        <div className="OurStoryBlock comnLRpadd">
          <div className="coupleImgOuter">
            <div
              className="coupleImg"
              style={{
                backgroundImage: `url(${require("../../../assets/images/our-story3.jpg")})`,
              }}
            ></div>
          </div>
          <h2>Moved to Hyderabad</h2>
          <p>
            Praesent cursus dictum magna vitae aliquam. Praesent blandit
            fermentum fringilla. Phasellus ac justo congue dolor venenatis
            faucibus. Ut sagittis rutrum ante, eget pretium ligula adipiscing
            ut. In sed nibh lacus. Ut mi sapien, fermentum quis sagittis at,
            tristique eget libero.
          </p>
        </div>
      </div>
    </div>
  );
}
export default OurStory;
