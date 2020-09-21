import React from "react";
import "./Card.scss";

function Card(props) {
  const onImageClickHandle = () => {
    props.onCardClick(props.cardIndex);
  };
  return (
    <>
      <div className="photoCard">
        <div className="cardBody">
          <div
            className="cardImage"
            style={{
              backgroundImage: `url(${props.image})`,
            }}
            onClick={onImageClickHandle}
          ></div>
        </div>
        <div className="cardFooter">
          <h2>{props.name}</h2>
          <p>{props.relation}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
