import Header from "../Header";
import Label from "../Label";

import ScreenIcon from "../../icons/ScreenIcon";

import "./index.css";
import { useState } from "react";

const numberOfSeatsInARow = 30;
const numberOfRows = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
];
const soldSeats = [];

const BookYourSeat = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [seatSelected, setSelectedSeat] = useState(false);

  const renderSeatsPositions = () => {
    const renderSeats = (row) => {
      let seatsArray = [];
      for (let i = 1; i <= numberOfSeatsInARow; i++) {
        seatsArray.push(i);
        if ((i === 7) | (i === 23)) {
          seatsArray.push(0);
        }
      }

      const onClickSeat = (seat) => {
        setSelectedSeat(true);
      };
      const seatSelectedClassName = seatSelected && "selected-seat";
      return (
        <ul className="seats-positions">
          {seatsArray.map((each, index) =>
            each !== 0 ? (
              <li
                className={`each-seat-container`}
                onClick={() => onClickSeat(each)}
              >
                {each}
              </li>
            ) : (
              <li className="empty-space-container"></li>
            )
          )}
        </ul>
      );
    };
    return (
      <div className="seats-cards-container">
        {numberOfRows.map((each, index) =>
          index !== 5 && index !== 13 ? (
            <div className="each-row-container">
              <p className="row-name">{each}</p>
              {renderSeats(each)}
            </div>
          ) : (
            <div className="gap-between-seats">
              <p className="amount">Price-300</p>
            </div>
          )
        )}
      </div>
    );
  };

  const showPopUpOf = () => {
    setShowPopup(!showPopup);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-container">
      <Header setShowPopup={showPopUpOf} />
      {showPopup && (
        <form className="model" onSubmit={(e) => onSubmitForm(e)}>
          <div className="overlay">
            <div className="model-container">
              <p className="model-title">How Many Seats?</p>
              <ul className="selected-seats-number">
                <option className="pop1">1</option>
                <option className="pop1">2</option>
                <option className="pop1">3</option>
                <option className="pop1">4</option>
                <option className="pop1">5</option>
                <option className="pop1">6</option>
              </ul>
            </div>
          </div>
        </form>
      )}
      <div className="seats-container">{renderSeatsPositions()}</div>
      <div className="screen-this-way">
        <ScreenIcon />
        <p className="screen-tis-way-text">All eyes this way please!</p>
      </div>
      <Label />
    </div>
  );
};
export default BookYourSeat;
