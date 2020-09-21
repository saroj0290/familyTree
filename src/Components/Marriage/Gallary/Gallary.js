import React, { useState } from "react";
import { Icon, Modal } from "office-ui-fabric-react";
import "./Gallary.scss";
import Card from "../Card/Card";
import { gallaryData } from "../gallaryData";

function Gallary() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleNextSlide = () => {
    if (currentPosition < gallaryData.length - 1) {
      setCurrentPosition(currentPosition + 1);
    }
  };
  const handlePreviousSlide = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const cardClickHandle = (cardIndex) => {
    setIsModalOpen(true);
    setCurrentPosition(cardIndex);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="photoGalllary comnTBpadd comnLRpadd" id="gallary">
        <div className="PageTitle">
          <h1>
            Our <span>Gallary</span>
          </h1>
          <span className="separatorLine">
            <Icon className="redIcon" iconName="HeartFill"></Icon>
            <Icon className="blackIcon" iconName="HeartFill"></Icon>
          </span>
        </div>
        <div className="photoGalllaryOuter">
          {gallaryData.map((data, index) => {
            return (
              <Card
                key={index}
                cardIndex={index}
                image={data.image}
                name={data.name}
                relation={data.relation}
                onCardClick={cardClickHandle}
              />
            );
          })}
        </div>
        <Modal isOpen={isModalOpen} onDismiss={closeModal}>
          <Icon iconName="Cancel" className="closeModal" onClick={closeModal} />
          <div className="gallaryItem">
            <img
              alt={gallaryData[0].name}
              src={gallaryData[currentPosition].image}
            />
            <ul>
              <li>Sibling</li>
              <li>Parents</li>
              <li>Children</li>
            </ul>
          </div>
          <div className="gallarySliderControls">
            <div className="ControlsIcon left-arrow">
              <Icon iconName="ChevronLeftMed" onClick={handlePreviousSlide} />
            </div>
            <div className="ControlsIcon right-arrow">
              <Icon iconName="ChevronRightMed" onClick={handleNextSlide} />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Gallary;
