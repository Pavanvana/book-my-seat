import { LiaPencilAltSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";
import ShowTimeingsHeader from "../ShowTimeingsHeader";

import "./index.css";
import { useState } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthNamesShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const Header = (props) => {
  const [showTimeings, setShowTimeings] = useState("11:00 AM");
  const { setShowPopup } = props;
  const day = new Date().getDay();
  const month = monthNamesShort[new Date().getMonth()];
  const onChangeShowTimeings = (time) => {
    setShowTimeings(time);
  };
  return (
    <div className="header">
      <div className="header-container">
        <div>
          <p className="movie-name-title">Movie Name</p>
          <p className="show-details">
            {" "}
            Theater name | Today, {day} {month}, {showTimeings}
          </p>
        </div>
        <div className="header-right-container">
          <button className="number-of-tickets-button" onClick={setShowPopup}>
            <p className="number-of-tickets">2 Tickets</p>
            <LiaPencilAltSolid size={20} />
          </button>
          <AiOutlineClose color="#ffffff" />
        </div>
      </div>
      <ShowTimeingsHeader onChangeShowTimeings={onChangeShowTimeings} />
    </div>
  );
};
export default Header;
