import { useState } from "react";
import "./index.css";

const ShowTimeingsHeader = (props) => {
  const [activeTimeing, setActiveTimeing] = useState("11:00 AM");
  const { onChangeShowTimeings } = props;

  const onClickTimeingCard = (time) => {
    onChangeShowTimeings(time);
    setActiveTimeing(time);
  };
  const isActiveMorningShow =
    activeTimeing === "11:00 AM" && "bg-color-timeing-card";
  const isActiveMatniee =
    activeTimeing === "02:15 PM" && "bg-color-timeing-card";
  const isActiveFirstShow =
    activeTimeing === "06:00 PM" && "bg-color-timeing-card";
  const isActiveSecondShow =
    activeTimeing === "09:10 PM" && "bg-color-timeing-card";
  return (
    <div className="show-timeings-container">
      <div
        className={`show-time-card ${isActiveMorningShow}`}
        onClick={() => onClickTimeingCard("11:00 AM")}
      >
        <p>11:00 AM</p>
      </div>
      <div
        className={`show-time-card ${isActiveMatniee}`}
        onClick={() => onClickTimeingCard("02:15 PM")}
      >
        <p>02:15 PM</p>
      </div>
      <div
        className={`show-time-card ${isActiveFirstShow}`}
        onClick={() => onClickTimeingCard("06:00 PM")}
      >
        <p>06:00 PM</p>
      </div>
      <div
        className={`show-time-card ${isActiveSecondShow}`}
        onClick={() => onClickTimeingCard("09:10 PM")}
      >
        <p>09:10 PM</p>
      </div>
    </div>
  );
};
export default ShowTimeingsHeader;
